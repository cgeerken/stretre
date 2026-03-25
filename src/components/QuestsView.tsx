import { Calendar, Clock, Swords, Radio, Bell } from 'lucide-react';
import { motion } from 'motion/react';

export default function QuestsView() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="flex flex-col gap-2">
        <span className="text-xs font-label uppercase tracking-[0.2em] text-secondary/70 ml-1">Bitácora de Aventuras</span>
        <div className="flex items-end justify-between">
          <h2 className="text-4xl font-headline font-bold text-on-surface">Misiones Semanales</h2>
          <div className="flex items-center gap-2 bg-surface-container-high rounded-full px-4 py-2 border border-outline-variant/15">
            <Calendar size={14} className="text-secondary" />
            <span className="text-sm font-label font-bold text-on-surface-variant">22 - 28 Enero</span>
          </div>
        </div>
      </section>

      <div className="space-y-12 relative">
        {/* Thursday Quest */}
        <div className="relative group">
          <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-transparent opacity-50 rounded-full"></div>
          <div className="mb-4 flex items-baseline gap-4">
            <h3 className="text-2xl font-headline italic text-on-surface">Jueves</h3>
            <div className="h-px flex-grow bg-outline-variant/20"></div>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-secondary text-on-secondary parchment-texture rounded-lg p-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-surface-container-lowest/5 -mr-12 -mt-12 rotate-45"></div>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Boss Attempt</span>
                  <span className="flex items-center gap-1 text-xs font-bold text-on-secondary">
                    <Radio size={14} fill="currentColor" />
                    En Vivo
                  </span>
                </div>
                <div>
                  <h4 className="text-3xl font-headline font-bold leading-tight">Elden Ring</h4>
                  <p className="text-lg font-body italic opacity-80 mt-1">Boss attempts + build de fe</p>
                </div>
                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-on-secondary/70" />
                    <span className="font-bold">22:00 UTC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Swords size={18} className="text-on-secondary/70" />
                    <span className="font-bold">Dificultad: Legendaria</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg border-2 border-surface-container/10">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfA48zAYcdvRuO7-DioxbLmda_9ztdBVP2qlQCpgUPEKbDzEXEYh34QVi_X2477z31WLii2mWrHXzzy6O3UV37l85UMTYDDg39spt7BeZRFQpkl1uv5nqqizlky7yqpLWc3Iu0ROwkhrhWvLIeRFI54BF1olCMjgYwdcU1l-qyxAHkEKZ0zubd7m9VBHGGmo5dD033ISZNjBQG6gmTfL53fQKI2h1Rh2LdiF97p7fztwHxRQVfhufgsih8FJ7mhQo_mGJooym39Qhc" 
                    alt="Elden Ring"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-secondary after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                  <span className="ml-3 text-sm font-bold opacity-70">Recordatorio</span>
                </label>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sunday Quest */}
        <div className="relative group">
          <div className="mb-4 flex items-baseline gap-4">
            <h3 className="text-2xl font-headline italic text-on-surface">Domingo</h3>
            <div className="h-px flex-grow bg-outline-variant/20"></div>
          </div>
          
          <div className="bg-surface-container parchment-texture rounded-lg p-6 shadow-xl relative overflow-hidden opacity-90 border border-outline-variant/10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-outline-variant/20">Charla de Taberna</span>
                  <span className="flex items-center gap-1 text-xs font-bold text-on-surface-variant/60">
                    <Calendar size={14} />
                    Programado
                  </span>
                </div>
                <div>
                  <h4 className="text-3xl font-headline font-bold text-secondary">Tertulia del Fuego Medio</h4>
                  <p className="text-lg font-body italic text-on-surface-variant/80 mt-1">Repaso de la semana y lectura de misivas del gremio.</p>
                </div>
                <div className="flex flex-wrap items-center gap-6 pt-2 text-on-surface-variant/70">
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span className="font-bold">20:30 UTC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio size={18} />
                    <span className="font-bold">Comunidad</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg border-2 border-surface-container-highest opacity-50 grayscale">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyTfQ-LqhhLBKlblO2ulxtirTEqmxTM8ejmmql6ytmx0iposfOWlMIi4c2-3bdvnc28s7uh8WjZtiyJ6Aak4hYW3oiuXSVkQnxVRqfovLXYGH1OjUipc0e8XP3nPPc14LTQsHb4RPIbCQHmMRp-PHszJYdCJsNTaz8kNrQHB7plLpafhsUBSXeISNKMwMGNPtPX-lEi-NtNRf8KSKi2bYxqR4AerjvXroYrIpj92hxkR8kUaAOfwOs9-q5zu-c5iZQjQ3m-QsMlshH" 
                    alt="Tavern"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-surface-container-lowest border border-outline-variant/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant/40 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                  <span className="ml-3 text-sm font-bold opacity-40">Recordatorio</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
