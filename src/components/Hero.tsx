/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from"motion/react";
import { PackageX, ShoppingCart, Shapes, ShieldCheck } from "lucide-react";
import { useState, useRef, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame } from"@react-three/fiber";
import { OrbitControls, Float } from"@react-three/drei";
import * as THREE from 'three';
import { Link } from "react-router-dom";
import { useOrderModal } from"../contexts/OrderModalContext";

function BeeLogoModel({ isCtrlPressed }: { isCtrlPressed: boolean }) {
 const groupRef = useRef<any>(null);
 const [hovered, setHovered] = useState(false);

 // Shape of the wing from the logo image
 const wingShape = useMemo(() => {
 const shape = new THREE.Shape();
 // Top point
 shape.moveTo(0, 1.4);
 // Outer bottom point
 shape.lineTo(-1.5, -0.1);
 // Inner bottom point
 shape.lineTo(-1.0, -1.4);
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
 <group ref={groupRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}
 scale={1.4}
 >
 <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
 {/* Left Wing */}
 <mesh position={[0, 0, 0]}>
 <extrudeGeometry args={[wingShape, extrudeSettings]} />
 <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} emissive="#FFD700" emissiveIntensity={hovered ? 0.4 : 0.1} />
 </mesh>
 {/* Right Wing (Mirrored) */}
 <mesh position={[0, 0, 0]} scale={[-1, 1, 1]}>
 <extrudeGeometry args={[wingShape, extrudeSettings]} />
 <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} emissive="#FFD700" emissiveIntensity={hovered ? 0.4 : 0.1} />
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
 {/* Background Video Layer - Clean Rectangular Layout */}
 <div className="absolute inset-0 lg:top-1/2 lg:-translate-y-1/2 lg:inset-auto lg:right-[5%] xl:right-[10%] 2xl:right-[15%] w-full h-full lg:w-[380px] xl:w-[450px] lg:h-[700px] xl:h-[750px] pointer-events-none z-0 flex items-center justify-center opacity-30 lg:opacity-100">
 <motion.div initial={{ opacity: 0, scale: 0.95, x: 50 }}
 animate={{ opacity: 1, scale: 1, x: 0 }}
 transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
 className="w-full h-full relative"
 >
 <div className="w-full h-full lg:rounded-2xl overflow-hidden shadow-none relative">
 <video src="/hero-portrait.mp4" autoPlay loop muted playsInline
 onCanPlay={(e) => (e.currentTarget.playbackRate = 1.5)}
 className="w-full h-full object-cover opacity-100 lg:opacity-100 opacity-60"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-bee-black via-bee-black/50 to-transparent lg:hidden" />
 <div className="absolute inset-0 bg-bee-black/40 lg:hidden" />
 </div>
 </motion.div>
 </div>

 <div className="relative w-full max-w-7xl mx-auto h-full flex items-center z-20 mt-10 md:mt-0 pointer-events-none">
 {/* Main Copy - Text remains responsive and interactive */}
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
 className="relative z-30 py-12 md:py-0 pointer-events-auto w-full lg:w-[55%] xl:w-[60%] lg:pr-8"
 >
 <div className="mb-6">
 <span className="text-bee-yellow text-[10px] md:text-xs xl:text-sm font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] xl:tracking-[0.3em] bg-bee-yellow/5 px-3 md:px-4 py-1.5 md:py-2 border border-bee-yellow/20 inline-block mb-4 max-w-full">Промышленная 3D-печать: от одного прототипа до крупных партий</span>
 </div>
 <h1 className="text-[9vw] sm:text-[8vw] md:text-5xl lg:text-4xl xl:text-[3.25rem] 2xl:text-6xl leading-tight font-black tracking-tight uppercase mb-6 md:mb-10 drop-shadow-2xl">
 Создадим <span className="text-bee-yellow">готовый продукт</span><br className="hidden md:block" />
 <span className="md:hidden"> </span>из вашей идеи за 48 часов
 </h1>
 <p className="max-w-md lg:max-w-lg xl:max-w-xl text-base md:text-lg lg:text-xl text-bee-white/60 font-medium leading-relaxed mb-6 md:mb-8">
 Превратим вашу самую смелую идею в физический объект с точностью до микрона. Промышленная студия 3D-печати Black Bee.
 </p>

  <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
  <Link to="/small-batch" className="px-3 py-1.5 border border-bee-white rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider text-bee-white hover:text-bee-black hover:border-bee-yellow hover:bg-bee-yellow transition-all duration-300 cursor-pointer shadow-[0_5px_15px_rgba(255,255,255,0.05)]">Мелкосерийное производство</Link>
  <Link to="/souvenirs" className="px-3 py-1.5 border border-bee-white rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider text-bee-white hover:text-bee-black hover:border-bee-yellow hover:bg-bee-yellow transition-all duration-300 cursor-pointer shadow-[0_5px_15px_rgba(255,255,255,0.05)]">Сувенирная продукция</Link>
  <Link to="/mass-production" className="px-3 py-1.5 border border-bee-white rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider text-bee-white hover:text-bee-black hover:border-bee-yellow hover:bg-bee-yellow transition-all duration-300 cursor-pointer shadow-[0_5px_15px_rgba(255,255,255,0.05)]">Серийное производство</Link>
  <Link to="/marketplace" className="px-3 py-1.5 border border-bee-white rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider text-bee-white hover:text-bee-black hover:border-bee-yellow hover:bg-bee-yellow transition-all duration-300 cursor-pointer shadow-[0_5px_15px_rgba(255,255,255,0.05)]">МАРКЕТПЛЕЙСЫ</Link>
  <Link to="/merch" className="px-3 py-1.5 border border-bee-white rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider text-bee-white hover:text-bee-black hover:border-bee-yellow hover:bg-bee-yellow transition-all duration-300 cursor-pointer shadow-[0_5px_15px_rgba(255,255,255,0.05)]">Производство мерча</Link>
  <Link to="/art-objects" className="px-3 py-1.5 border border-bee-white rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider text-bee-white hover:text-bee-black hover:border-bee-yellow hover:bg-bee-yellow transition-all duration-300 cursor-pointer shadow-[0_5px_15px_rgba(255,255,255,0.05)]">Арт-объекты</Link>
  </div>
 <div className="flex flex-wrap gap-4 mb-12 md:mb-20">
 <button onClick={() => {
 const calculator = document.getElementById('калькулятор');
 if (calculator) calculator.scrollIntoView({ behavior: 'smooth' });
 }}
 className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 lg:px-14 bg-bee-yellow text-bee-black text-sm md:text-base font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,215,0,0.2)] [.light_&]:shadow-none"
 >
 Калькулятор стоимости
 </button>
 </div>

 {/* Information Blocks */}
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 border-t border-bee-border pt-8 md:pt-10 w-full mb-12 md:mb-0">
 {[
 {
 title: "Без склада",
 short: "Zero-Stock",
 icon: PackageX
 },
 {
 title: "Маркетплейсы",
 short: "Запуск за 48ч",
 icon: ShoppingCart
 },
 {
 title: "Любой дизайн",
 short: "Без переплат",
 icon: Shapes
 },
 {
 title: "Прочность",
 short: "Монолитно",
 icon: ShieldCheck
 }
 ].map((feature, i) => (
 <div key={i} className="flex flex-col gap-2 relative">
 <div className="flex items-center gap-1.5 md:gap-2">
 <feature.icon className="w-3.5 h-3.5 text-bee-yellow" />
 <span className="text-[9px] md:text-xs text-bee-text-muted uppercase font-bold tracking-widest md:tracking-[0.2em] opacity-40 truncate">{feature.title}</span>
 </div>
 <span className="text-xs md:text-sm font-mono text-bee-white font-bold tracking-widest leading-none uppercase transition-colors">{feature.short}</span>
 </div>
 ))}
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
