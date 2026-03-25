import React from 'react';
import { 
  Castle, 
  ScrollText, 
  Users, 
  Book, 
  Package, 
  Wallet,
  Menu
} from 'lucide-react';
import { cn } from '../lib/utils';
import { View } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Layout({ children, currentView, onViewChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-on-background font-body pb-32">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-background/80 backdrop-blur-xl z-50 shadow-2xl shadow-black/60">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onViewChange('tavern')}>
          <div className="w-10 h-10 rounded-full border-2 border-secondary overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu-ep7EZDLagPD3FkhVKAIQkoECVHnwKARN608ZYup9qS5mzwJfKTpDDiwqc1mbXBcCiIJYGTZLkIhDOnP1Tzrjvc43OykDdjvMPb_YRiOAwcfRSLXG027CCeZKT511XNTYhobh4cZxc-H3JJTsNZUxaJma41wLwNjtzqwjYdiN_qX1JIGWxSKrzEUueojWT50DHAWJgEORPC4ec0FVN23jz1AOfOzLlV4j79sD0UqiXsP-sQguMTSf3cyoXDTsVxDPszFS-zoagDp" 
              alt="Guild Master"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-xl font-bold italic tracking-wider text-primary font-headline">The Gilded Hearth</h1>
        </div>
        
        <div className="flex items-center gap-4 text-primary">
          <button onClick={() => onViewChange('profile')} className="hover:text-secondary transition-colors">
            <Wallet size={24} />
          </button>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-4 max-w-5xl mx-auto">
        {children}
      </main>

      {/* Bottom Nav Bar */}
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-end pb-6 px-4 bg-[#2a1d13] rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.6)]">
        <NavItem 
          icon={<Castle />} 
          label="Taberna" 
          active={currentView === 'tavern'} 
          onClick={() => onViewChange('tavern')} 
        />
        <NavItem 
          icon={<ScrollText />} 
          label="Misiones" 
          active={currentView === 'quests'} 
          onClick={() => onViewChange('quests')} 
        />
        <NavItem 
          icon={<Users />} 
          label="Gremio" 
          active={currentView === 'guild'} 
          onClick={() => onViewChange('guild')} 
        />
        <NavItem 
          icon={<Book />} 
          label="Diario" 
          active={currentView === 'diary'} 
          onClick={() => onViewChange('diary')} 
        />
        <NavItem 
          icon={<Package />} 
          label="Botín" 
          active={currentView === 'loot'} 
          onClick={() => onViewChange('loot')} 
        />
      </nav>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function NavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center transition-all duration-300 px-3 py-2",
        active 
          ? "bg-gradient-to-b from-[#40261e] to-[#2a1d13] text-secondary rounded-2xl shadow-[0_0_15px_#e9c349] transform scale-110 -translate-y-2" 
          : "text-primary/50 hover:text-primary"
      )}
    >
      {React.cloneElement(icon as React.ReactElement, { size: 24, fill: active ? "currentColor" : "none" })}
      <span className="font-sans text-[10px] uppercase tracking-tighter mt-1">{label}</span>
    </button>
  );
}
