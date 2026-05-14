/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Paintbrush, Hammer, Layers } from "lucide-react";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three-stdlib";

function Model() {
  const geom = useLoader(STLLoader, "/LOOPPENDANT.stl");
  return (
    <mesh geometry={geom} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
      <meshStandardMaterial 
        color="#ffffff" 
        roughness={0.2} 
        metalness={0.4} 
        emissive="#111111"
      />
    </mesh>
  );
}

// Fallback component while STL is loading over network
function FallbackLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-8 h-8 md:w-12 md:h-12 border border-bee-yellow/20 border-t-bee-yellow rounded-full animate-spin"></div>
        <div className="text-bee-yellow font-mono text-[8px] md:text-[10px] uppercase tracking-widest whitespace-nowrap drop-shadow-md">
          Загрузка модели...
        </div>
      </div>
    </Html>
  );
}

export function SpecialProducts() {
  return (
    <section id="студия" className="py-20 md:py-32 border-t border-bee-border bg-bee-black transition-colors relative">
      <div className="absolute left-0 top-1/4 w-[1px] h-32 bg-bee-yellow/50 shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-20 text-center">
          <span className="text-bee-yellow text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] block mb-2 md:mb-4 italic">3D-Студия_BBee</span>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic skew-heading">
            Special<br /><span className="text-bee-white/20">Продукты</span>
          </h2>
          <p className="mt-6 md:mt-8 text-sm md:text-base text-bee-text-muted font-mono max-w-2xl mx-auto leading-relaxed">
            Мы не просто печатаем. Мы создаем полноценные арт-объекты, инсталляции и статуи «под ключ» музейного качества.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-8 md:space-y-12">
            <div className="relative group pl-6 md:pl-10 border-l-2 border-bee-border hover:border-bee-yellow transition-colors">
              <span className="absolute -left-[17px] top-0 w-8 h-8 bg-bee-black border-2 border-bee-border group-hover:border-bee-yellow rounded-full flex items-center justify-center transition-colors">
                <Layers className="w-4 h-4 text-bee-white group-hover:text-bee-yellow transition-colors" />
              </span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest italic mb-3">01. Макро-печать</h3>
              <p className="text-sm md:text-base text-bee-white/50 font-light leading-relaxed">
                Крупноформатная печать составных деталей идеальной точности, что позволяет собирать объекты высотой в несколько метров.
              </p>
            </div>

            <div className="relative group pl-6 md:pl-10 border-l-2 border-bee-border hover:border-bee-yellow transition-colors">
              <span className="absolute -left-[17px] top-0 w-8 h-8 bg-bee-black border-2 border-bee-border group-hover:border-bee-yellow rounded-full flex items-center justify-center transition-colors">
                <Paintbrush className="w-4 h-4 text-bee-white group-hover:text-bee-yellow transition-colors" />
              </span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest italic mb-3">02. Постобработка</h3>
              <p className="text-sm md:text-base text-bee-white/50 font-light leading-relaxed">
                Выход детали из станка — это только начало. Работа продолжается вручную: профессиональная грунтовка, шпаклевка и доведение до идеальной гладкости.
              </p>
            </div>

            <div className="relative group pl-6 md:pl-10 border-l-2 border-bee-border hover:border-bee-yellow transition-colors">
              <span className="absolute -left-[17px] top-0 w-8 h-8 bg-bee-black border-2 border-bee-border group-hover:border-bee-yellow rounded-full flex items-center justify-center transition-colors">
                <Sparkles className="w-4 h-4 text-bee-white group-hover:text-bee-yellow transition-colors" />
              </span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest italic mb-3">03. Художники и Материалы</h3>
              <p className="text-sm md:text-base text-bee-white/50 font-light leading-relaxed">
                В нашей команде работают профессиональные декораторы и художники. Мы комбинируем 3D-печать с массивом дерева, металлом, используем премиальную покраску.
              </p>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none bg-bee-gray border border-bee-border overflow-hidden">
             <div className="absolute inset-0">
                <Canvas 
                  dpr={[1, 1.5]} 
                  gl={{ antialias: true, powerPreference: "high-performance", alpha: true }} 
                  camera={{ position: [100, 100, 100], fov: 40 }}
                >
                  <Suspense fallback={<FallbackLoader />}>
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[100, 100, 100]} intensity={1.5} />
                    <directionalLight position={[-100, -100, -100]} intensity={0.5} />
                    <pointLight position={[0, 100, 0]} intensity={1} color="#FFD700" />
                    <OrbitControls 
                      autoRotate 
                      autoRotateSpeed={1} 
                      enableZoom={false} 
                      enableRotate={false}
                      enablePan={false}
                      minDistance={50}
                      maxDistance={400}
                    />
                    <Center>
                      <Model />
                    </Center>
                  </Suspense>
                </Canvas>
             </div>
             
             <div className="absolute top-4 right-4 bg-bee-black/40 border border-bee-yellow px-3 py-2 flex items-center gap-2 backdrop-blur-md z-10 shadow-xl">
                <div className="w-1.5 h-1.5 bg-bee-yellow rounded-full animate-pulse"></div>
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-bee-yellow font-bold">ВАША ИДЕЯ, ВОПЛОЩЕННАЯ НАМИ</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
