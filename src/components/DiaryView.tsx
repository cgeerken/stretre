import { MapPin, Swords, Shield, Skull, Target, Edit3, ChevronRight, Frown, MousePointer2, Rabbit, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function DiaryView() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Active Adventure Hero */}
      <section className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-tertiary/20 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-surface-container-high rounded-lg overflow-hidden flex flex-col md:flex-row gap-6 p-1">
          <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden rounded-l-lg">
            <img 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWl_LnsVuNZPCnOgdhVNgyJVXyODA_82p4ia_aM1iXBXJ7rJMIP4O7Ccw2Hm4feFAF9_cRMjqSE3mwqzUfQQCEZPDGxLlqpOVJWVe6mgsTT3RsgkJO0TJ0rgSr4Im2WuX2MBZXZlhfTylxWmuf1PDx3fmP0NB3AYmc33TAq96PYCrgu9ndGVftugcP_3T3i6lIriLOizxNoYN-YvXiAtKwPaHQ04dlSmE_b7bxH87WsQ4wZ4z6Jz-d8EdB4JTzkYC15Fl_5YvAzvYi" 
              alt="Baldur's Gate 3"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Aventura Activa</span>
            </div>
          </div>
          <div className="flex-1 p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-headline font-bold text-secondary">Baldur's Gate 3</h2>
                <p className="text-on-surface-variant flex items-center gap-2 mt-1">
                  <MapPin size={14} />
                  Ciudad Baja
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs uppercase tracking-tighter text-on-surface-variant font-label">Nivel Actual</span>
                <span className="text-2xl font-headline font-bold text-secondary">LVL 12</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl border-l-4 border-secondary/50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-label text-on-surface-variant uppercase tracking-widest">Progreso de la Senda</span>
                <span className="text-secondary font-bold">75%</span>
              </div>
              <div className="w-full bg-surface-variant h-2.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-secondary-container to-secondary h-full rounded-full w-[75%] shadow-[0_0_10px_rgba(233,195,73,0.3)]"></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-container/30 rounded-full border border-primary/10">
                <Swords size={14} className="text-primary" />
                <span className="text-xs font-label text-primary">Paladín de la Venganza</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-container/30 rounded-full border border-primary/10">
                <Shield size={14} className="text-primary" />
                <span className="text-xs font-label text-primary">Armadura de Placas +2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Next Objective */}
        <div className="md:col-span-8 bg-surface-container rounded-lg p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target size={96} />
          </div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6 font-label flex items-center gap-2">
            <span className="w-8 h-px bg-secondary/30"></span>
            Siguiente Objetivo
          </h3>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tertiary-container to-surface-container-highest flex items-center justify-center border border-tertiary/20 shadow-xl">
              <Skull size={32} className="text-tertiary" fill="currentColor" />
            </div>
            <div>
              <h4 className="text-2xl font-headline font-bold text-on-surface italic">Vencer a Lord Gortash</h4>
              <p className="text-on-surface-variant max-w-md mt-1 leading-relaxed">Infíltrate en la Fortaleza de la Roca de la Serpiente y pon fin a la tiranía del Elegido de Bane.</p>
            </div>
          </div>
        </div>

        {/* Campaign Notes */}
        <div className="md:col-span-4 bg-[#f1dfd3] rounded-lg p-6 text-[#1a120b] shadow-inner parchment-texture relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-black/5 rounded-t-lg"></div>
          <h3 className="text-xs uppercase tracking-widest mb-4 font-bold border-b border-[#1a120b]/10 pb-2">Notas de campaña</h3>
          <div className="space-y-3 font-serif italic text-sm leading-relaxed">
            <p>— Hablar con el bardo en la Taberna del Elfo de la Canción.</p>
            <p>— Comprobar si quedan pociones de resistencia al fuego antes del asalto.</p>
            <p>— La llave de la bóveda 9 está escondida tras el cuadro del puerto.</p>
          </div>
          <div className="mt-6 flex justify-end">
            <Edit3 size={20} className="opacity-30" />
          </div>
        </div>

        {/* Backlog */}
        <div className="md:col-span-7 bg-surface-container-low rounded-lg p-6 border-t border-white/5">
          <h3 className="text-lg font-headline font-bold text-secondary mb-6">Aventuras en espera</h3>
          <div className="space-y-4">
            <BacklogItem icon={<MousePointer2 />} title="The Witcher 3: Wild Hunt" mission="Siguendo el hilo" />
            <BacklogItem icon={<MapPin />} title="Elden Ring" mission="Leyndell, Capital Real" />
          </div>
        </div>

        {/* Defeated Bosses */}
        <div className="md:col-span-5 bg-surface-container-low rounded-lg p-6 border-t border-white/5">
          <h3 className="text-lg font-headline font-bold text-primary mb-6">Jefes Vencidos</h3>
          <div className="grid grid-cols-2 gap-4">
            <BossIcon icon={<Frown />} name="Ketheric Thorm" />
            <BossIcon icon={<Skull />} name="Rey Rata" />
            <BossIcon icon={<Rabbit />} name="Tita Ethel" />
            <BossIcon icon={<User />} name="Grym el Eterno" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BacklogItem({ icon, title, mission }: any) {
  return (
    <div className="flex items-center gap-4 p-4 bg-surface-container rounded-xl hover:translate-x-2 transition-transform cursor-pointer">
      <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface-variant">
        {icon}
      </div>
      <div className="flex-1">
        <h5 className="font-bold text-on-surface">{title}</h5>
        <p className="text-xs text-on-surface-variant">Misión: {mission}</p>
      </div>
      <ChevronRight size={16} className="text-on-surface-variant/40" />
    </div>
  );
}

function BossIcon({ icon, name }: any) {
  return (
    <div className="flex flex-col items-center p-4 bg-surface-container-lowest rounded-2xl border border-primary/5">
      <div className="w-12 h-12 bg-primary-container/40 rounded-full flex items-center justify-center mb-2 text-primary">
        {icon}
      </div>
      <span className="text-[10px] text-center uppercase tracking-tighter text-on-surface-variant">{name}</span>
    </div>
  );
}
