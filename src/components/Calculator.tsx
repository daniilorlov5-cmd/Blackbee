/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, Suspense, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Upload, Smartphone, Send, CheckCircle2, Ruler, Box, Maximize2, X, RefreshCw, Move, RotateCw, HelpCircle } from "lucide-react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { STLLoader } from "three-stdlib";
import { Center, OrbitControls, Html, Edges, ContactShadows, Bounds, useBounds } from "@react-three/drei";
import * as THREE from "three";
import { useOrderModal } from "../contexts/OrderModalContext";

function calculateSurfaceArea(geometry: THREE.BufferGeometry) {
  const positions = geometry.getAttribute("position");
  const index = geometry.getIndex();
  let area = 0;

  const vA = new THREE.Vector3();
  const vB = new THREE.Vector3();
  const vC = new THREE.Vector3();

  if (index) {
    for (let i = 0; i < index.count; i += 3) {
      vA.fromBufferAttribute(positions, index.getX(i));
      vB.fromBufferAttribute(positions, index.getX(i + 1));
      vC.fromBufferAttribute(positions, index.getX(i + 2));
      area += new THREE.Triangle(vA, vB, vC).getArea();
    }
  } else {
    for (let i = 0; i < positions.count; i += 3) {
      vA.fromBufferAttribute(positions, i);
      vB.fromBufferAttribute(positions, i + 1);
      vC.fromBufferAttribute(positions, i + 2);
      area += new THREE.Triangle(vA, vB, vC).getArea();
    }
  }
  return area;
}

function calculateVolume(geometry: THREE.BufferGeometry) {
  let volume = 0;
  const positions = geometry.getAttribute("position");
  const index = geometry.getIndex();
  if (!positions) return 0;
  
  const vA = new THREE.Vector3();
  const vB = new THREE.Vector3();
  const vC = new THREE.Vector3();

  if (index) {
    for (let i = 0; i < index.count; i += 3) {
      vA.fromBufferAttribute(positions, index.getX(i));
      vB.fromBufferAttribute(positions, index.getX(i + 1));
      vC.fromBufferAttribute(positions, index.getX(i + 2));
      volume += vA.dot(vB.cross(vC)) / 6.0;
    }
  } else {
    for (let i = 0; i < positions.count; i += 3) {
      vA.fromBufferAttribute(positions, i);
      vB.fromBufferAttribute(positions, i + 1);
      vC.fromBufferAttribute(positions, i + 2);
      volume += vA.dot(vB.cross(vC)) / 6.0;
    }
  }
  return Math.abs(volume);
}

function Model({ url, onSpecsUpdate, manualScale, autoRotate = true, isCtrlPressed = false }: { url: string, onSpecsUpdate: (specs: any) => void, manualScale: number, autoRotate?: boolean, isCtrlPressed?: boolean }) {
  const geometry = useLoader(STLLoader, url);
  const groupRef = useRef<THREE.Group>(null);
  const sizeRef = useRef(new THREE.Vector3());
  const baseSpecs = useRef({ volume: 0, size: new THREE.Vector3(), surfaceArea: 0 });
  const bounds = useBounds();

  // Manual rotation state
  const targetX = useRef(0);
  const targetY = useRef(0);
  const isDragging = useRef(false);
  const prevCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (isCtrlPressed && e.button === 0) {
        isDragging.current = true;
        prevCoords.current = { x: e.clientX, y: e.clientY };
      }
    };
    const handlePointerUp = () => {
      isDragging.current = false;
    };
    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging.current) {
        const deltaX = e.clientX - prevCoords.current.x;
        const deltaY = e.clientY - prevCoords.current.y;
        targetX.current += deltaY * 0.01;
        targetY.current += deltaX * 0.01;
        prevCoords.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointermove', handlePointerMove);
    
    if (!isCtrlPressed) {
      isDragging.current = false;
    }
    
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [isCtrlPressed]);

  // Handle "swing" rotation vs manual
  useFrame((state) => {
    if (groupRef.current) {
      if (isCtrlPressed) {
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX.current, 0.2);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY.current, 0.2);
      } else {
        targetX.current = groupRef.current.rotation.x;
        targetY.current = groupRef.current.rotation.y;

        if (autoRotate) {
          const time = state.clock.getElapsedTime();
          groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.05);
          groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, Math.sin(time * 0.5) * 0.6, 0.05);
        }
      }
    }
  });

  // Initial calculation only when geometry changes
  useEffect(() => {
    if (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();
      geometry.center();
      
      const vol = calculateVolume(geometry); 
      const area = calculateSurfaceArea(geometry);
      const box = geometry.boundingBox;
      const size = new THREE.Vector3();
      if (box) {
        box.getSize(size);
        
        // If the model is clearly Z-up (tall along Z but short along Y), 
        // rotate it 90 degrees around X to make it Y-up for Three.js
        if (size.z > size.y * 1.3) {
          geometry.rotateX(-Math.PI / 2);
          geometry.computeBoundingBox();
          geometry.boundingBox?.getSize(size);
        }
        
        sizeRef.current.copy(size);
      }
      
      baseSpecs.current = { volume: vol, size: size.clone(), surfaceArea: area };
      // Initial fit
      setTimeout(() => bounds.refresh().fit(), 100);
    }
  }, [geometry, bounds]);

  // Update specs and REFIT camera when geometry OR scale changes
  useEffect(() => {
    if (baseSpecs.current.volume === 0) return;

    onSpecsUpdate({
      volume: baseSpecs.current.volume, 
      surfaceArea: baseSpecs.current.surfaceArea,
      baseDimensions: { 
        x: baseSpecs.current.size.x, 
        y: baseSpecs.current.size.y, 
        z: baseSpecs.current.size.z 
      },
      dimensions: { 
        x: baseSpecs.current.size.x * manualScale, 
        y: baseSpecs.current.size.y * manualScale, 
        z: baseSpecs.current.size.z * manualScale 
      },
      currentVolume: baseSpecs.current.volume * Math.pow(manualScale, 3),
      currentSurfaceArea: baseSpecs.current.surfaceArea * Math.pow(manualScale, 2)
    });

    // Automatically adjust camera to fit the new scale smoothly
    // throttled fit
    const timer = setTimeout(() => {
      bounds.refresh().fit();
    }, 50);
    return () => clearTimeout(timer);
  }, [onSpecsUpdate, manualScale, bounds]);

  return (
    <group ref={groupRef} scale={manualScale}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.15} /* Sharper reflections for detail */
          metalness={0.2}  /* More metallic pop */
        />
        {geometry.attributes.position.count < 300000 && <Edges threshold={25} color="#000000" opacity={0.08} transparent />}
      </mesh>
      <mesh>
        <boxGeometry args={[sizeRef.current.x, sizeRef.current.y, sizeRef.current.z]} />
        <meshBasicMaterial transparent opacity={0.02} color="#FFD700" wireframe />
      </mesh>
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <RefreshCw className="w-16 h-16 text-[#FFD700] animate-spin opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#FFD700] rounded-full animate-pulse shadow-[0_0_15px_rgba(255,215,0,0.8)]" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase font-mono tracking-[0.5em] text-[#FFD700] whitespace-nowrap bg-black/90 px-6 py-3 border border-[#FFD700]/30 backdrop-blur-xl shadow-2xl">
            СКАНИРОВАНИЕ ГЕОМЕТРИИ
          </span>
          <div className="w-32 h-[1px] bg-[#FFD700]/20 overflow-hidden relative">
            <motion.div 
               animate={{ x: [-128, 128] }} 
               transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
               className="absolute inset-y-0 w-12 bg-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.8)]"
            />
          </div>
        </div>
      </div>
    </Html>
  );
}

function CameraControlsHandler() {
  const { camera } = useThree();
  const controls = useThree((state) => state.controls) as any;

  useEffect(() => {
    if (!controls) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // WASD and Arrows for panning
      const PAN_SPEED_BASE = 0.08;
      const distance = camera.position.distanceTo(controls.target);
      const speed = Math.max(distance * PAN_SPEED_BASE, 2.0);

      const vector = new THREE.Vector3();
      const right = new THREE.Vector3();
      const up = new THREE.Vector3();

      camera.getWorldDirection(vector);
      right.crossVectors(camera.up, vector).normalize();
      up.crossVectors(vector, right).normalize();

      let moved = false;

      if (e.code === 'KeyD' || e.code === 'ArrowRight') {
        controls.target.addScaledVector(right, -speed);
        camera.position.addScaledVector(right, -speed);
        moved = true;
      }
      if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
        controls.target.addScaledVector(right, speed);
        camera.position.addScaledVector(right, speed);
        moved = true;
      }
      if (e.code === 'KeyW' || e.code === 'ArrowUp') {
        controls.target.addScaledVector(up, -speed);
        camera.position.addScaledVector(up, -speed);
        moved = true;
      }
      if (e.code === 'KeyS' || e.code === 'ArrowDown') {
        controls.target.addScaledVector(up, speed);
        camera.position.addScaledVector(up, speed);
        moved = true;
      }

      if (moved) {
        controls.update();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [controls, camera]);

  return null;
}

function ModelPreview({ url, onSpecsUpdate, manualScale = 1, isFullScreen = false, controlMode = 'orbit', isCtrlPressed = false }: { 
  url: string, 
  onSpecsUpdate: (specs: any) => void, 
  manualScale?: number,
  isFullScreen?: boolean,
  controlMode?: 'orbit' | 'pan',
  isCtrlPressed?: boolean
}) {
  return (
    <div className={`w-full h-full relative z-10 bg-[#060606] ${isFullScreen ? 'fixed inset-0 z-50' : ''}`}>
      <Canvas shadows camera={{ position: [1000, 1000, 1000], fov: 35, far: 100000 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#060606"]} />
        
        <ambientLight intensity={0.7} />
        <hemisphereLight intensity={1.5} color="#ffffff" groundColor="#111111" />
        
        <directionalLight 
          position={[3000, 5000, 8000]} 
          intensity={3.5} 
          castShadow 
          shadow-mapSize={[2048, 2048]} 
          shadow-bias={-0.0001}
        />
        
        <pointLight position={[-4000, 3000, 4000]} intensity={2.0} color="#ffffff" />
        <pointLight position={[4000, 2000, -4000]} intensity={1.2} color="#ffffff" />
        
        <spotLight position={[0, 10000, -5000]} intensity={2.0} angle={0.3} penumbra={1} castShadow />
        
        <Suspense fallback={<Loader />}>
          <Bounds fit observe margin={0.95}>
            <Center top>
              <Model url={url} onSpecsUpdate={onSpecsUpdate} manualScale={manualScale} autoRotate={!isFullScreen} isCtrlPressed={isCtrlPressed} />
            </Center>
          </Bounds>
        </Suspense>

        <ContactShadows position={[0, -20, 0]} opacity={0.8} scale={15000} blur={2.5} far={800} />
        <OrbitControls 
          makeDefault 
          enabled={!isCtrlPressed}
          autoRotate={false} 
          maxDistance={40000}
          minDistance={10}
          enableDamping
          dampingFactor={0.05}
          screenSpacePanning={true}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            RIGHT: THREE.MOUSE.PAN,
            MIDDLE: THREE.MOUSE.DOLLY
          }}
          touches={{
            ONE: controlMode === 'orbit' ? THREE.TOUCH.ROTATE : THREE.TOUCH.PAN,
            TWO: THREE.TOUCH.DOLLY_PAN
          }}
        />
        <CameraControlsHandler />
      </Canvas>
    </div>
  );
}

export function Calculator() {
  const { openModal } = useOrderModal();
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [material, setMaterial] = useState("plastic");
  const [step, setStep] = useState(1); // 1: Upload, 2: Contacts, 3: Success
  const [specs, setSpecs] = useState<any>(null);
  const [manualScale, setManualScale] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [controlMode, setControlMode] = useState<'orbit' | 'pan'>('orbit');
  const [wallThickness, setWallThickness] = useState(10);
  const [isSolid, setIsSolid] = useState(false);
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Control') setIsCtrlPressed(true);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Control') setIsCtrlPressed(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setFileUrl(null);
    }
  }, [file]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.name.toLowerCase().endsWith(".stl"))) {
      setFile(droppedFile);
      setSpecs(null);
      setManualScale(1);
    }
  };

  const handleDimensionChange = (axis: 'x' | 'y' | 'z', value: string) => {
    // Clear zero or empty
    const cleanedValue = value === "" ? "0" : value.replace(/^0+(?=\d)/, '');
    const numValue = parseFloat(cleanedValue);
    
    if (isNaN(numValue) || numValue < 0 || !specs) return;
    const newScale = numValue / specs.baseDimensions[axis];
    setManualScale(newScale);
  };

  const calculateRealWeight = (specs: any) => {
    if (!specs) return 0;
    
    const V_total = specs.currentVolume; // mm3
    const S_surface = specs.currentSurfaceArea; // mm2
    const density = 1.25; // standard density from request
    
    let weightInGrams = 0;
    
    if (isSolid) {
      // Monolith (100% solid)
      weightInGrams = (V_total / 1000) * density;
    } else {
      // Standard (Hollow: shell + 1% infill)
      const plasticVolumeMm3 = (S_surface * wallThickness) + (V_total * 0.01);
      weightInGrams = (plasticVolumeMm3 / 1000) * density;
    }
    
    return weightInGrams;
  };

  const calculatePrice = () => {
    if (!specs) return 0;
    const rate = material === 'plastic' ? 5 : material === 'polymer' ? 18 : 45;
    const weight = calculateRealWeight(specs);
    return Math.max(120, Math.round(weight * rate));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const formatNumber = (num: number, decimals: number = 2) => {
    return new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(num);
  };

  return (
    <section id="калькулятор" className="relative py-16 md:py-24 bg-bee-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-stretch">
          
          {/* Left: UI Element */}
          <div className="relative group min-h-[400px] md:min-h-[500px] bg-bee-gray border border-bee-border rounded-sm overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute top-4 md:top-6 left-4 md:left-6 z-20 flex items-center gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FFD700] animate-ping"></div>
              <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-bee-white/40">3D_ВИД_АКТИВЕН // СКАНИРОВАНИЕ...</span>
            </div>
            
            <div className="flex-grow flex items-center justify-center bg-bee-black/20 w-full overflow-hidden relative">
              {fileUrl ? (
                <>
                  <ModelPreview url={fileUrl} onSpecsUpdate={setSpecs} manualScale={manualScale} controlMode={controlMode} isCtrlPressed={isCtrlPressed} isFullScreen={false} />
                  <div className="absolute top-4 md:top-6 right-4 md:right-6 z-40 flex gap-2">
                    <button 
                      onClick={() => setControlMode(controlMode === 'orbit' ? 'pan' : 'orbit')}
                      className={`md:hidden w-8 h-8 md:w-10 md:h-10 backdrop-blur-md border border-bee-border flex items-center justify-center transition-all ${controlMode === 'pan' ? 'bg-bee-yellow text-bee-black' : 'bg-bee-black/50 text-bee-white'}`}
                      title={controlMode === 'orbit' ? "Переключить на перемещение" : "Переключить на вращение"}
                    >
                      {controlMode === 'orbit' ? <RotateCw className="w-4 h-4 md:w-5 md:h-5" /> : <Move className="w-4 h-4 md:w-5 md:h-5" />}
                    </button>
                    <button 
                      onClick={() => setIsFullScreen(true)}
                      className="w-8 h-8 md:w-10 md:h-10 bg-bee-black/50 backdrop-blur-md border border-bee-border flex items-center justify-center text-bee-white hover:text-[#FFD700] transition-all"
                    >
                      <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-[9px] md:text-[10px] font-mono text-bee-white/20 uppercase tracking-[0.2em] md:tracking-[0.5em] px-4 text-center">ОЖИДАНИЕ_ФАЙЛА_МОДЕЛИ</div>
              )}
            </div>

            <AnimatePresence>
              {isFullScreen && fileUrl && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] bg-bee-black"
                >
                  <div className="absolute top-4 right-4 md:top-10 md:right-10 z-[110] flex gap-2 md:gap-4 flex-wrap justify-end">
                    <div className="hidden md:flex items-center gap-6 px-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-white/40 py-2">
                      <div className="flex items-center gap-2"><span className="text-bee-yellow font-bold">WASD</span> перемещение</div>
                      <div className="flex items-center gap-2"><span className="text-bee-yellow font-bold">Мышь</span> вращение / зум</div>
                      <div className="flex items-center gap-2"><span className="text-bee-yellow font-bold">CTRL + Мышь</span> вращение 3D-модели</div>
                    </div>

                    <button 
                      onClick={() => setControlMode(controlMode === 'orbit' ? 'pan' : 'orbit')}
                      className={`md:hidden w-10 h-10 md:w-12 md:h-12 backdrop-blur-md border border-white/10 flex items-center justify-center rounded-full transition-all ${controlMode === 'pan' ? 'bg-bee-yellow text-bee-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
                      title={controlMode === 'orbit' ? "Переключить на перемещение" : "Переключить на вращение"}
                    >
                      {controlMode === 'orbit' ? <RotateCw className="w-5 h-5 md:w-6 md:h-6" /> : <Move className="w-5 h-5 md:w-6 md:h-6" />}
                    </button>

                    <button 
                      onClick={() => setIsFullScreen(false)}
                      className="w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-full transition-colors border border-white/10"
                    >
                      <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </button>
                  </div>
                  
                  <ModelPreview url={fileUrl} onSpecsUpdate={setSpecs} manualScale={manualScale} isFullScreen controlMode={controlMode} isCtrlPressed={isCtrlPressed} />
                  
                  <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[110] flex flex-col items-center gap-4 w-[90%] md:w-auto">
                     <div className="bg-bee-black/80 backdrop-blur-xl border border-bee-yellow/20 px-4 md:px-8 py-3 md:py-4 rounded-sm flex items-center gap-4 md:gap-8 shadow-2xl w-full md:w-auto justify-between md:justify-center">
                        <div className="flex flex-col items-center flex-1">
                          <span className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-bee-white/40 mb-1">X</span>
                          <span className="text-xs md:text-sm font-mono font-bold text-bee-white">{Math.round(specs.dimensions.x)} мм</span>
                        </div>
                        <div className="w-[1px] h-6 md:h-8 bg-bee-border" />
                        <div className="flex flex-col items-center flex-1">
                          <span className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-bee-white/40 mb-1">Y</span>
                          <span className="text-xs md:text-sm font-mono font-bold text-bee-white">{Math.round(specs.dimensions.y)} мм</span>
                        </div>
                        <div className="w-[1px] h-6 md:h-8 bg-bee-border" />
                        <div className="flex flex-col items-center flex-1">
                          <span className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-bee-white/40 mb-1">Z</span>
                          <span className="text-xs md:text-sm font-mono font-bold text-bee-white">{Math.round(specs.dimensions.z)} мм</span>
                        </div>
                     </div>
                     <p className="text-[8px] uppercase tracking-[0.3em] text-bee-yellow font-bold animate-pulse text-center">Управление активно</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className={`absolute inset-0 z-30 flex flex-col items-center justify-center transition-all duration-500 bg-black/60 backdrop-blur-sm px-4 text-center ${file ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-dashed border-bee-yellow/30 rounded-full flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6 md:w-8 md:h-8 text-bee-yellow" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-2 md:mb-4 italic">Загрузите 3D-модель</h3>
              <p className="text-xs md:text-sm text-bee-white/40 font-light mb-6 md:mb-8">Перетащите .STL файл сюда</p>
              <label className="px-6 md:px-8 py-3 bg-bee-yellow text-bee-black text-[9px] md:text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:bg-bee-white transition-colors">
                Выбрать файл
                <input type="file" className="hidden" accept=".stl" onChange={(e) => {
                  const f = e.target.files?.[0] || null;
                  if (f) {
                    setFile(f);
                    setSpecs(null);
                  }
                }} />
              </label>
            </div>

            {file && (
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-30 flex items-center justify-between bg-bee-black/80 backdrop-blur-md p-3 md:p-4 border border-bee-yellow/20 rounded-sm">
                <div className="flex items-center gap-2 md:gap-3 overflow-hidden pr-2">
                  <Box className="w-4 h-4 md:w-5 md:h-5 text-bee-yellow shrink-0" />
                  <span className="text-[10px] md:text-xs font-mono text-bee-white tracking-tighter truncate">{file.name}</span>
                </div>
                <button 
                  onClick={() => setFile(null)}
                  className="text-[9px] md:text-[10px] uppercase font-bold text-bee-white/30 hover:text-red-500 transition-colors shrink-0"
                >
                  Удалить
                </button>
              </div>
            )}
          </div>

          {/* Right: Calculator UI */}
          <div className="flex flex-col justify-center">
            <div className="mb-8 md:mb-12">
              <span className="text-bee-yellow text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] block mb-2 md:mb-4 italic">Калькулятор</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] italic skew-heading mb-6 md:mb-8">
                Рассчитать<br /><span className="text-bee-yellow">стоимость</span>
              </h2>
              <p className="text-xs md:text-sm text-bee-text-muted font-light leading-relaxed max-w-md italic">
                *Если у вас есть своя 3D модель для загрузки и дальнейшей печати, пожалуйста, предоставьте её нам.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="space-y-6">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-bee-white/30">Выберите материал</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {["plastic", "polymer", "composite"].map((m) => (
                              <button
                                key={m}
                                onClick={() => setMaterial(m)}
                                className={`p-6 border transition-all text-left group ${material === m ? 'border-bee-yellow bg-bee-yellow/5' : 'border-bee-border hover:border-bee-white/20 bg-bee-gray'}`}
                              >
                                <span className={`block text-[10px] uppercase font-bold tracking-widest mb-2 ${material === m ? 'text-bee-yellow' : 'text-bee-white/40'}`}>
                              {m === 'plastic' ? 'Пластик' : m === 'polymer' ? 'Фотополимер' : 'Композит'}
                            </span>
                            <span className="text-sm font-light text-bee-white/70 block">
                              {m === 'plastic' ? 'От 5 ₽ / гр' : m === 'polymer' ? 'От 18 ₽ / гр' : 'От 45 ₽ / гр'}
                            </span>
                              </button>
                            ))}
                          </div>
                  </div>

                  <div className="p-4 md:p-8 bg-bee-gray border border-bee-border rounded-sm relative overflow-hidden">
                    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-bee-white/40 mb-1">Предварительная оценка</span>
                        {specs && (
                          <span className="text-[8px] sm:text-[9px] uppercase text-bee-yellow/50 font-mono tracking-tighter">
                            {isSolid ? '*100% заполнено (Монолит)' : `*Полая оболочка ${wallThickness}мм + 1% заполнения`}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <span className="text-xl sm:text-2xl md:text-3xl font-black text-bee-yellow italic tracking-tighter whitespace-nowrap">
                          {specs ? `~ ${formatPrice(calculatePrice())} ₽` : '~ 0 ₽'}
                        </span>
                      </div>
                    </div>
                    
                    {specs && (
                      <div className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-4 bg-black/5 border border-bee-border">
                            <span className="block text-[8px] uppercase text-bee-text-muted tracking-widest mb-2 font-bold">Объем</span>
                            <div className="flex items-baseline gap-1 flex-wrap">
                              <span className="text-base sm:text-lg md:text-xl font-mono text-bee-white font-bold leading-none">{formatNumber(specs.currentVolume / 1000)}</span>
                              <span className="text-[9px] sm:text-[10px] font-mono text-bee-text-muted">см³</span>
                            </div>
                          </div>
                          <div className="p-4 bg-black/5 border border-bee-border flex flex-col justify-center">
                            <span className="block text-[8px] uppercase text-bee-text-muted tracking-widest mb-2 font-bold">Вес (расчетный)</span>
                            <div className="flex items-baseline gap-1 flex-wrap">
                              <span className="text-base sm:text-lg md:text-xl font-mono text-[#FFD700] font-bold leading-none">
                                {formatNumber(calculateRealWeight(specs), 1)}
                              </span>
                              <span className="text-[9px] sm:text-[10px] font-mono text-[#FFD700]/60">гр</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <span className="block text-[10px] uppercase text-bee-text-muted tracking-widest font-bold">Толщина стенки (мм)</span>
                            <input 
                              type="number" 
                              min="0.4"
                              step="0.1"
                              value={wallThickness === 0 ? "" : wallThickness}
                              onChange={(e) => {
                                const val = e.target.value.replace(/^0+(?=\d)/, '');
                                setWallThickness(val === "" ? 0 : parseFloat(val));
                              }}
                              className="w-full bg-bee-black/5 border border-bee-border py-4 px-4 text-sm font-mono text-bee-white outline-none focus:border-bee-yellow transition-colors"
                            />
                          </div>
                          <div className="space-y-3 flex flex-col justify-end">
                            <label className="flex items-center gap-3 cursor-pointer group">
                              <div className={`w-5 h-5 border flex items-center justify-center transition-all ${isSolid ? 'border-bee-yellow bg-bee-yellow' : 'border-bee-border bg-bee-black/50'}`}>
                                {isSolid && <CheckCircle2 className="w-3 h-3 text-bee-black" />}
                              </div>
                              <input 
                                type="checkbox" 
                                className="hidden"
                                checked={isSolid}
                                onChange={(e) => setIsSolid(e.target.checked)}
                              />
                              <span className="text-[10px] uppercase tracking-widest font-bold text-bee-white/60 group-hover:text-bee-white transition-colors">Полнотелая печать</span>
                            </label>
                            {isSolid && (
                              <p className="text-[8px] uppercase text-red-500/70 font-bold tracking-tighter animate-pulse">
                                *Внимание: значительно увеличивает вес и стоимость.
                              </p>
                            )}
                          </div>
                        </div>

                         <div className="space-y-4">
                           <span className="block text-[9px] md:text-[10px] uppercase text-bee-text-muted tracking-widest font-bold">Габариты (мм)</span>
                           <div className="grid grid-cols-3 gap-2">
                              {(['x', 'y', 'z'] as const).map((axis) => (
                                <div key={axis} className="relative">
                                  <span className="absolute left-2.5 md:left-3 top-1/2 -translate-y-1/2 text-[9px] md:text-[10px] font-mono text-bee-yellow/50 uppercase">{axis}</span>
                                  <input 
                                    type="number" 
                                    value={Math.round(specs.dimensions[axis])}
                                    onChange={(e) => handleDimensionChange(axis, e.target.value)}
                                    className="w-full bg-bee-black/5 border border-bee-border py-3 md:py-4 pl-6 md:pl-8 pr-1 md:pr-4 text-[11px] md:text-sm font-mono text-bee-white outline-none focus:border-bee-yellow transition-colors"
                                  />
                                </div>
                              ))}
                           </div>
                         </div>
                      </div>
                    )}
                    
                    <p className="text-[10px] text-bee-white/20 uppercase tracking-widest relative z-10 italic">Цена может измениться после проверки инженером</p>
                    
                    <AnimatePresence>
                      {!file && (
                        <motion.div 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          className="absolute inset-x-0 bottom-0 top-0 bg-bee-gray/90 backdrop-blur-sm z-20 flex items-center justify-center px-8 text-center transition-all"
                        >
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-bee-yellow/50">Загрузите .STL для расчета</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button 
                      disabled={!file}
                      onClick={() => openModal('order', {
                        material: material === 'plastic' ? 'Пластик' : material === 'polymer' ? 'Фотополимер' : 'Композит',
                        construction: isSolid ? 'Монолитная' : 'Полая',
                        thickness: isSolid ? undefined : wallThickness,
                        sizeX: specs ? Math.round(specs.dimensions.x) : undefined,
                        sizeY: specs ? Math.round(specs.dimensions.y) : undefined,
                        sizeZ: specs ? Math.round(specs.dimensions.z) : undefined,
                        estimatedPrice: calculatePrice(),
                        estimatedWeight: Math.round(calculateRealWeight(specs) * 10) / 10,
                      })}
                      className="w-full py-5 bg-bee-yellow text-bee-black text-xs font-bold uppercase tracking-[0.3em] hover:scale-[1.02] transition-all disabled:opacity-50 disabled:grayscale"
                    >
                      Получить финальный оффер
                    </button>
                    <button 
                      onClick={() => openModal('order')}
                      className="w-full py-5 border border-bee-border text-bee-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-bee-white/5 transition-all"
                    >
                      У меня есть только идея / фото
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <p className="text-bee-white/60 font-light leading-relaxed">
                    Наш инженер проверит вашу модель на наличие ошибок печати и пришлет финальный оффер с учетом скидки за объем.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-bee-white/30">Telegram или Телефон</label>
                        <div className="relative">
                            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bee-yellow" />
                            <input 
                                type="text" 
                                placeholder="@username или +7..."
                                className="w-full bg-bee-gray border border-bee-border py-4 pl-12 pr-4 text-sm font-light text-bee-white outline-none focus:border-bee-yellow transition-colors placeholder:text-bee-text-muted/50"
                            />
                        </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                        onClick={() => setStep(1)}
                        className="px-6 py-4 border border-bee-border text-[10px] uppercase font-bold tracking-widest hover:bg-bee-white/5 transition-colors"
                    >
                        Назад
                    </button>
                    <button 
                        onClick={() => setStep(3)}
                        className="flex-grow py-4 bg-bee-yellow text-bee-black text-[10px] font-bold uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(255,215,0,0.1)]"
                    >
                        Отправить запрос <Send className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-bee-gray p-12 border border-bee-yellow/30 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-bee-yellow/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-bee-yellow/20">
                    <CheckCircle2 className="w-10 h-10 text-bee-yellow" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic">Заявка принята</h3>
                  <p className="text-bee-white/40 text-sm font-light max-w-xs mx-auto">
                    Инженер уже анализирует {file?.name}. Мы свяжемся с вами в течение 15 минут.
                  </p>
                  <button 
                    onClick={() => { setStep(1); setFile(null); }}
                    className="text-[10px] uppercase font-bold tracking-widest text-bee-yellow hover:text-white transition-colors"
                  >
                    Рассчитать еще один проект
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-bee-yellow" />
                    <span className="text-[10px] uppercase tracking-widest text-bee-white/40">Точность ±10мкм</span>
                </div>
                <div className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-bee-yellow" />
                    <span className="text-[10px] uppercase tracking-widest text-bee-white/40">Любой формат</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
