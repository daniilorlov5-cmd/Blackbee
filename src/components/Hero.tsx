/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Activity, Cpu, ShieldCheck } from "lucide-react";
import { useState, useRef, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from 'three';
import { useOrderModal } from "../contexts/OrderModalContext";

function BeeLogoModel({ isCtrlPressed }: { isCtrlPressed: boolean }) {
  const groupRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  // Shape of the wing from the logo image
  const wingShape = useMemo(() => {
    const shape = new THREE.Shape();
    // Top point
    shape.moveTo(0, 1.2);
    // Outer bottom point
    shape.lineTo(-1.3, -0.1);
    // Inner bottom point
    shape.lineTo(-0.85, -1.2);
    shape.closePath();
    return shape;
  }, []);

  const extrudeSettings = { depth: 0.1, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 3 };

  useFrame((state) => {
    if (groupRef.current && !isCtrlPressed) {
      groupRef.current.rotation.y += 0.007;
      if (hovered) groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.15;
    }
  });

  return (
    <group 
      ref={groupRef} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
      scale={1.4}
    >
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        {/* Left Wing */}
        <mesh position={[0, 0, 0]}>
          <extrudeGeometry args={[wingShape, extrudeSettings]} />
          <meshStandardMaterial 
            color="#FFD700" 
            metalness={0.8} 
            roughness={0.2} 
            emissive="#FFD700" 
            emissiveIntensity={hovered ? 0.4 : 0.1} 
          />
        </mesh>
        {/* Right Wing (Mirrored) */}
        <mesh position={[0, 0, 0]} scale={[-1, 1, 1]}>
          <extrudeGeometry args={[wingShape, extrudeSettings]} />
          <meshStandardMaterial 
            color="#FFD700" 
            metalness={0.8} 
            roughness={0.2} 
            emissive="#FFD700" 
            emissiveIntensity={hovered ? 0.4 : 0.1} 
          />
        </mesh>
      </Float>
    </group>
  );
}

export function Hero() {
  const { openModal } = useOrderModal();
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => { if (e.key === 'Control') setIsCtrlPressed(true); }
    const up = (e: KeyboardEvent) => { if (e.key === 'Control') setIsCtrlPressed(false); }
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    }
  }, []);
  
  return (
    <section className="relative flex pt-24 md:pt-32 pb-16 md:pb-24 lg:pl-12 bg-bee-black">
      {/* Background Blueprint - Cyber Detail */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M10 10H90V90H10V10Z" stroke="white" strokeWidth="0.05"/>
          <path d="M50 0V100" stroke="white" strokeWidth="0.025"/>
          <path d="M0 50H100" stroke="white" strokeWidth="0.025"/>
          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.05"/>
        </svg>
      </div>

      {/* Decorative Marks */}
      <div className="absolute top-32 left-16 w-6 h-6 border-t border-l border-bee-yellow/40 z-20 hidden lg:block"></div>
      <div className="absolute bottom-16 right-24 w-6 h-6 border-b border-r border-bee-yellow/40 z-20 hidden lg:block"></div>

      <div className="flex-grow flex items-center relative z-10 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background 3D Model Layer - Absolutely positioned to not interfere with content flow */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible md:translate-x-[20%] lg:translate-x-[25%] opacity-30 lg:opacity-100">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.95 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full flex items-center justify-center pointer-events-auto"
          >
            <div className="w-full h-full max-w-[1000px] max-h-[1000px]">
              <Canvas camera={{ position: [0, 0, 8], fov: 35 }} dpr={[1, 2]} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />
                <Suspense fallback={null}>
                  <BeeLogoModel isCtrlPressed={isCtrlPressed} />
                </Suspense>
                <OrbitControls enableZoom={true} makeDefault rotateSpeed={0.5} enabled={isCtrlPressed} />
              </Canvas>
            </div>
          </motion.div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto h-full flex items-center z-20 mt-10 md:mt-0 pointer-events-none">
          {/* Main Copy - Text remains responsive and interactive */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30 py-12 md:py-0 pointer-events-auto"
          >
            <div className="mb-6">
              <span className="text-bee-yellow text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] bg-bee-yellow/5 px-4 py-2 border border-bee-yellow/20 inline-block mb-4">Аддитивное производство полного цикла</span>
            </div>
            
            <h1 className="text-[14vw] md:text-[7vw] lg:text-[90px] leading-[0.9] font-black tracking-tighter uppercase mb-6 md:mb-10 italic skew-heading drop-shadow-2xl max-w-2xl">
              Идея —<br className="hidden md:block" />
              в <span className="text-bee-yellow">объект</span><br className="hidden md:block" />
              <span className="md:hidden"> </span>за 48 часов
            </h1>
            
            <p className="max-w-md text-base md:text-lg lg:text-xl text-bee-white/60 font-medium leading-relaxed mb-8 md:mb-12">
              Превратим вашу самую смелую идею в физический объект с точностью до микрона. 
              Промышленная студия 3D-печати Black Bee.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12 md:mb-20">
              <button 
                onClick={() => openModal()}
                className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 lg:px-14 bg-bee-yellow text-bee-black text-sm md:text-base font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,215,0,0.2)]"
              >
                Узнать стоимость
              </button>
            </div>

            {/* Information Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 border-t border-bee-border pt-8 md:pt-10">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-bee-yellow" />
                  <span className="text-xs md:text-sm text-bee-text-muted uppercase font-bold tracking-[0.2em] opacity-40">Скорость</span>
                </div>
                <span className="text-sm font-mono text-bee-white font-bold tracking-widest leading-none uppercase">От 48 часов</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-bee-yellow" />
                  <span className="text-xs md:text-sm text-bee-text-muted uppercase font-bold tracking-[0.2em] opacity-40">Логистика</span>
                </div>
                <span className="text-sm font-mono text-bee-yellow font-bold tracking-widest leading-none uppercase">По всей РФ</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-bee-yellow" />
                  <span className="text-xs md:text-sm text-bee-text-muted uppercase font-bold tracking-[0.2em] opacity-40">Точность</span>
                </div>
                <span className="text-sm font-mono text-bee-white font-bold tracking-widest leading-none uppercase">До 0.01 мм</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
