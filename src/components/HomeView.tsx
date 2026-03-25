import React from 'react';
import { Radio, Star, AlertCircle, CheckCircle2, Calendar, Users, Book, Package, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function HomeView({ onViewChange }: { onViewChange: (view: any) => void }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="flex flex-col gap-2">
        <h2 className="text-4xl font-headline font-bold text-on-surface">¡Bienvenido a la Taberna, Master Chronicler!</h2>
        <p className="text-on-surface-variant font-medium italic">El fuego está encendido y la hidromiel servida.</p>
        <div className="mt-2">
          <span className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full border border-outline-variant/20 text-xs font-bold text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
            OFFLINE
          </span>
        </div>
      </section>

      {/* Main Quest Hero */}
      <motion.section 
        whileHover={{ scale: 1.01 }}
        className="relative bg-secondary text-on-secondary parchment-texture rounded-lg p-8 shadow-2xl overflow-hidden cursor-pointer"
        onClick={() => onViewChange('quests')}
      >
        <div className="absolute top-0 right-0 w-64 h-full opacity-10 pointer-events-none">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpWSe_xs7JULqRbYSMca1WKYz-HegpqU7v_TEqGMklk7X3U2Oualnz5J_6r-_mqqwPeAzYKCweaeuZDCApfuaNcJzMCWVYjlEBXREU2lf08VASvf-VkmXItBzcEBiuTddFWQJW69_JgjUvu4tuwTyT4zleJFm_QjCFH4RQ1jZbIQf7p_P1YHfyl7j-whp4Jp9y2zhkEU0aGJSrR5Ur5WyBR834vgCDwgQ5bqCytvYmz4Ae5ISfn3B4Cxw9YIkQlO12UL6-YKsc0oxG" 
            alt="Sigil" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 space-y-4 max-w-md">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">Main Quest • Próximo Directo</span>
          <h3 className="text-5xl font-headline font-bold leading-tight">Baldur's Gate 3</h3>
          <p className="text-lg font-body italic opacity-80">Continuamos la forja del destino en las Tierras Sombrías. Prepárate para el caos.</p>
          <div className="pt-4">
            <p className="text-xs uppercase tracking-widest opacity-60 font-bold">Horario</p>
            <p className="text-xl font-headline italic font-bold">Martes, 21:00 CET</p>
          </div>
          <button className="mt-6 bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg hover:bg-on-secondary-container hover:text-secondary transition-all">
            <Radio size={18} />
            Set Reminder
          </button>
        </div>
      </motion.section>

      {/* Hero of the Month */}
      <section className="bg-surface-container rounded-lg p-8 shadow-xl border border-outline-variant/10 flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-secondary overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu-ep7EZDLagPD3FkhVKAIQkoECVHnwKARN608ZYup9qS5mzwJfKTpDDiwqc1mbXBcCiIJYGTZLkIhDOnP1Tzrjvc43OykDdjvMPb_YRiOAwcfRSLXG027CCeZKT511XNTYhobh4cZxc-H3JJTsNZUxaJma41wLwNjtzqwjYdiN_qX1JIGWxSKrzEUueojWT50DHAWJgEORPC4ec0FVN23jz1AOfOzLlV4j79sD0UqiXsP-sQguMTSf3cyoXDTsVxDPszFS-zoagDp" 
              alt="Hero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary rounded-full p-2 border-4 border-surface-container">
            <Star size={16} fill="currentColor" />
          </div>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest font-bold text-secondary">Héroe del Mes</span>
          <h4 className="text-2xl font-headline font-bold text-on-surface">Sir Alistair</h4>
          <p className="text-sm font-body italic text-on-surface-variant max-w-xs">"El primero en cruzar la puerta de la taberna y el último en soltar la jarra."</p>
        </div>
        <div className="flex gap-3 pt-2">
          <span className="bg-surface-container-high text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-outline-variant/20">75 Gifted Subs</span>
          <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-3 py-1 rounded-full">Loyalty Rank IV</span>
        </div>
      </section>

      {/* Task Scroll */}
      <section className="bg-surface-container-low rounded-lg p-6 border border-outline-variant/10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-headline font-bold flex items-center gap-2">
            <Book size={20} className="text-secondary" />
            Pergamino de Tareas
          </h3>
          <span className="text-[10px] uppercase tracking-widest font-bold bg-surface-container-highest px-3 py-1 rounded-full text-on-surface-variant">Internal Access</span>
        </div>
        <div className="space-y-4">
          <TaskItem 
            icon={<AlertCircle className="text-tertiary" />} 
            title="Actualizar Banner de Youtube" 
            desc="Necesario antes del evento de 'Baldur's Gate' del martes." 
          />
          <TaskItem 
            icon={<CheckCircle2 className="text-on-surface-variant/40" />} 
            title="Revisar Ledger de Donaciones" 
            desc="Cierre de mes para el Gremio de Moderadores." 
          />
          <TaskItem 
            icon={<CheckCircle2 className="text-on-surface-variant/40" />} 
            title="Ban Appeal: 'Troll_Lord42'" 
            desc="Revisar log de chat del último directo de terror." 
          />
        </div>
      </section>

      {/* Quick Grid */}
      <section className="grid grid-cols-2 gap-4">
        <QuickLink icon={<Calendar />} label="Agenda" onClick={() => onViewChange('quests')} />
        <QuickLink icon={<Users />} label="Gremio" onClick={() => onViewChange('guild')} />
        <QuickLink icon={<Book />} label="Diario" onClick={() => onViewChange('diary')} />
        <QuickLink icon={<Package />} label="Botín" onClick={() => onViewChange('loot')} />
      </section>
    </div>
  );
}

function TaskItem({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4 p-4 bg-surface-container rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer">
      <div className="mt-1">{icon}</div>
      <div className="space-y-1">
        <h5 className="font-bold text-on-surface text-sm">{title}</h5>
        <p className="text-xs text-on-surface-variant leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function QuickLink({ icon, label, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className="bg-surface-container-high p-6 rounded-lg flex flex-col items-center justify-center gap-3 hover:bg-surface-variant transition-all group"
    >
      <div className="text-secondary group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>
      <span className="text-lg font-headline font-bold text-on-surface">{label}</span>
    </button>
  );
}
