import { BarChart3, History, Heart, Sparkles, Theater, Hammer, FlaskConical, ScrollText } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProfileView() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-md mx-auto">
      {/* Profile Header */}
      <section className="flex flex-col items-center text-center space-y-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-b from-secondary to-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-surface-container-high shadow-xl ring-4 ring-secondary/20">
            <img 
              className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVoRvXPaEAjw7R0VaMBVFeyLlYLbVV8vYdeVgFjRzFWlfL7lrH4R9QRJ4vW6BPuRm6IX7b8Tf_c67NesnfqlygnEYKnzfNSfoUSnrtMvoK3QVxx13oFHqsOou1BkdORG8OLytnee0KYM0aaZXnmrISW02c29R18x_sS41n89WQHS90Kk_YbCBU1FhuOerNPHQz5Pj7MJlbRPQ3Jr96q7vaSBRhv6hlKhci9PCxOafdah1gvD3-gwus6HYihCRiIqv_-8zprYhAhwpB" 
              alt="Alaric Thorne"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">Alaric Thorne</h1>
          <p className="text-secondary font-headline italic text-lg opacity-90">Grand Master of the Chroniclers</p>
        </div>
        <div className="flex gap-2">
          <span className="bg-primary-container/40 text-primary text-[10px] px-3 py-1 rounded-full border border-outline-variant/20 uppercase tracking-widest font-bold">Elite Member</span>
          <span className="bg-tertiary-container/40 text-tertiary text-[10px] px-3 py-1 rounded-full border border-outline-variant/20 uppercase tracking-widest font-bold">Lvl 84</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="space-y-6">
        <div className="flex bg-surface-container-low rounded-full p-1.5 shadow-inner">
          <button className="flex-1 py-2 px-4 rounded-full bg-secondary text-on-secondary font-bold text-sm tracking-wide shadow-lg flex items-center justify-center gap-2">
            <BarChart3 size={18} />
            Stats
          </button>
          <button className="flex-1 py-2 px-4 rounded-full text-on-surface-variant font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors">
            <History size={18} />
            Activity
          </button>
        </div>

        <div className="space-y-6">
          {/* Combat Power */}
          <div className="relative overflow-hidden bg-surface-container-high rounded-lg p-6 shadow-xl border-l-4 border-secondary/50">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Swords size={96} />
            </div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center border border-secondary/30">
                <Swords size={30} className="text-secondary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Total Combat Power</p>
                <p className="text-4xl font-headline font-extrabold text-secondary">8,450</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            <StatCircle icon={<Heart className="text-tertiary" />} label="Stamina" value="184" />
            <StatCircle icon={<Sparkles className="text-primary" />} label="Mana" value="2,400" />
            <StatCircle icon={<Theater className="text-secondary" />} label="Charisma" value="92" />
          </div>

          {/* Crafting Skills */}
          <div className="bg-surface-bright rounded-lg p-6 parchment-texture shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 border-b border-outline-variant/20 pb-2">
              <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                <Hammer size={20} className="text-on-primary-container" />
                Crafting Skills
              </h3>
              <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-tighter">Artisan Tier</span>
            </div>
            <div className="space-y-4">
              <SkillBar label="Alchemy" value={75} icon={<FlaskConical size={14} />} />
              <SkillBar label="Blacksmithing" value={40} icon={<Hammer size={14} />} />
              <SkillBar label="Inscription" value={98} icon={<ScrollText size={14} />} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCircle({ icon, label, value }: any) {
  return (
    <div className="bg-surface-container rounded-xl p-4 flex flex-col items-center text-center space-y-2 border border-outline-variant/10">
      {icon}
      <p className="text-[10px] font-bold uppercase text-on-surface-variant">{label}</p>
      <p className="text-xl font-headline font-bold">{value}</p>
    </div>
  );
}

function SkillBar({ label, value, icon }: any) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm font-bold">
        <div className="flex items-center gap-2">
          {icon}
          <span>{label}</span>
        </div>
        <span className="text-secondary">{value}</span>
      </div>
      <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary-container to-secondary"
        ></motion.div>
      </div>
    </div>
  );
}

function Swords({ size, className }: any) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line x1="13" y1="19" x2="19" y2="13" />
      <line x1="16" y1="16" x2="20" y2="20" />
      <line x1="19" y1="21" x2="20" y2="20" />
      <polyline points="9.5 6.5 21 18 21 21 18 21 6.5 9.5" />
      <line x1="11" y1="5" x2="5" y2="11" />
      <line x1="8" y1="8" x2="4" y2="4" />
      <line x1="5" y1="3" x2="4" y2="4" />
    </svg>
  );
}
