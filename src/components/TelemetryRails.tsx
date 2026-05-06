/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";

export function TelemetryRails() {
  const [time, setTime] = useState(new Date().toISOString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toISOString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const codeSnippets = [
    "СТУДИЯ_ДИЗАЙНА: BLACK_BEE",
    "ЛОКАЦИЯ: ЯРОСЛАВЛЬ_ХАБ",
    "ПОЛУЧЕНИЕ /api/v1/узлы/синхр",
    "ТОКЕН_АВТ: BB_7734_АКТИВЕН",
    "ШИФРОВАНИЕ: AES-256-GCM",
    "СТАТУС_УЗЛА: ОПТИМАЛЬНО",
    "ЗАДЕРЖКА: 12мс",
    "ДВИЖОК_РЕНДЕРА: BLK_BEE_v4",
  ];

  return (
    <>
      {/* Left Rail */}
      <div className="fixed left-0 top-0 h-full w-12 border-r border-bee-border bg-bee-black z-40 hidden xl:flex flex-col items-center py-24 gap-12 overflow-hidden select-none pointer-events-none">
        <div className="rotate-180 flex flex-col gap-8 opacity-20" style={{ writingMode: "vertical-rl" }}>
          {codeSnippets.map((s, i) => (
            <span key={i} className="font-mono text-[8px] uppercase tracking-[0.4em] whitespace-nowrap">
              {s}
            </span>
          ))}
        </div>
        <div className="flex-grow"></div>
        <div className="rotate-180 opacity-40 px-4" style={{ writingMode: "vertical-rl" }}>
           <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-bee-yellow font-bold">
             ТЕХНОЛОГИЧЕСКОЕ_ПРЕВОСХОДСТВО // {time.split('T')[1].split('.')[0]}
           </span>
        </div>
      </div>

      {/* Right Rail */}
      <div className="fixed right-0 top-0 h-full w-12 border-l border-bee-border bg-bee-black z-40 hidden xl:flex flex-col items-center py-24 gap-12 overflow-hidden select-none pointer-events-none">
        <div className="flex flex-col gap-10 opacity-20" style={{ writingMode: "vertical-rl" }}>
          <span className="font-mono text-[8px] uppercase tracking-[0.3em]">СИСТЕМА_СТАБИЛЬНА // {time.split('T')[1].split('.')[0]}</span>
          <span className="font-mono text-[8px] uppercase tracking-[0.3em]">СИНХР_УЗЛОВ: ОК</span>
          <span className="font-mono text-[8px] uppercase tracking-[0.3em]">ISO_9001_СООТВЕТСТВИЕ</span>
          <span className="font-mono text-[8px] uppercase tracking-[0.3em]">НАГРУЗКА_ДУБАЙ: 24%</span>
        </div>
        <div className="flex-grow"></div>
        <div className="opacity-40" style={{ writingMode: "vertical-rl" }}>
           <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-bee-white font-bold">
             {time.split('T')[0]} // ISO_v1
           </span>
        </div>
      </div>
    </>
  );
}
