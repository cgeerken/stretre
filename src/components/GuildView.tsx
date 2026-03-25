import { Search, Shield, Users, Gavel, Edit3 } from 'lucide-react';
import { motion } from 'motion/react';

export default function GuildView() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-headline font-bold text-on-surface">Gremio de Aventureros</h1>
          <p className="text-on-surface-variant font-medium">Gestiona a los valientes que frecuentan tu taberna.</p>
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={20} className="text-outline" />
          </div>
          <input 
            type="text" 
            placeholder="Buscar Aventureros..." 
            className="w-full bg-surface-container-lowest border-none border-b-2 border-outline-variant focus:border-secondary transition-all py-4 pl-12 pr-4 rounded-t-xl text-on-surface placeholder:text-outline-variant font-medium focus:ring-0"
          />
        </div>

        <div className="flex flex-wrap gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <button className="px-6 py-2 rounded-full bg-secondary text-on-secondary font-bold text-sm transition-transform active:scale-95 shadow-lg shadow-secondary/20">Followers</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant/20 font-bold text-sm hover:bg-surface-variant transition-colors">Subs</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant/20 font-bold text-sm hover:bg-surface-variant transition-colors">VIPs</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant/20 font-bold text-sm hover:bg-surface-variant transition-colors">Mods</button>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <Shield size={24} className="text-secondary" fill="currentColor" />
          <h2 className="text-2xl font-headline font-bold text-secondary">Consejo Interno</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CouncilCard 
            name="Alaric Thorne"
            role="Gran Maestre"
            description="Supervisando la taberna desde la Primera Era. Guardián de las reglas."
            avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuCqMnSBZaXSnY22I6hh6qaLxW2Qlsd2S08FFyGGs7cFFuKWT08u2yr0aB5FkdFWqzwx115LPcGti6qPyY2Qv63Ow9O8XWoxgmCubFvq0SY2SUdf6thY9pIsL_6FZOYfyRcWuEHEotu1z3UiP2OYr8plbc5S0A95TD3ylQ11BIP_xyU5mll68ZmZBDAHrR4KtMQyhG3MI3fml0j5rEgB5hgD50PKf_MUpcDd04elA6eXyx87Vhpw0ulNTtKAEJJsaTEkhuboW-2vfIAb"
            icon={<Gavel size={14} fill="currentColor" />}
            tag="MODERADOR"
            color="tertiary"
          />
          <CouncilCard 
            name="Elara Scriben"
            role="Editora Real"
            description="Documentando cada hazaña y pergamino del reino digital."
            avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuB-HtUSGa9KNduEaMAhOTFKF7-2dvc2KSNI5PjEnPId0F7zMh24QuXeCKr3muOOlm98fIrbCYDuKYGe3UrAbI8bv6wiLJnNNoRmnHaFRNbHomFWegIgyk5y-oexRR3Jq8klvIt4mTCAzfsPHTlLFY4NOYClk0F6FX3RcHTWx51nX1tVf_Z4_rRTDwf_6Bw_j-JSrg6FOBzem-I9GQbRGRfOE9FlwsTOALnCLwoBteVL5UwB33qKFsscWc8HRFV_bFkACrFdqpaNJGq1"
            icon={<Edit3 size={14} fill="currentColor" />}
            tag="EDITOR"
            color="secondary"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-headline font-bold text-on-surface flex items-center gap-3">
          <Users size={24} className="text-primary" />
          Aventureros del Reino
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MemberCard 
            name="SirLurker"
            title="Legend of the Tavern"
            avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDkMF_Yyrxh962TQtqM1q7EPuUWi7dxAI3BOC7gHqY9Uqv_a-DaK2uo3sPexhT-Iq12G8GFz-Ks-jcaIQg7Fi9SMR42nX15GpyKYUiMm7z-TYoo3VxfR7S4Na4dPCm1GMoM5l5Tz6AwKs7FekcJLNNgHgFSDbhgp_do5ROgVM_nrA_k6WajES-ZeKMz03SnnEefZqNF5fr8F3GNqTstlVnfdliT5S-4p_7ElHyIHX1UZO9tseUsbIygkYa8sUbXKMphY-FHDsqvTmaR"
            tags={["Viewer Frecuente", "Sub Nivel 3"]}
            status="Activo hace 5 min: Explorando Minas"
            active
          />
          <MemberCard 
            name="LadyGem"
            title="Golden Benefactor"
            avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuC-uWC8MOspCWK2qZWtGP9sLweLa4oP48JTgtJXtpR_kh8mOTmFAqu54K3Gy_m2FWmO62QQv-QcK0W0PN9TXvutjEoP053RlV0nhCI3YBKZaX3UWrReqxnKp_kzF3h-3lWSme3zrGEyNacyJfrLldH8lco0axA2KxCcRMVC0jQ8iI-a1AlHfbescruexVtHGDOqg8g2PMcdFjhRr1AlEOfk_ldyrDXU1chLMbXJa4auKJcvZ9qmqPrWyRsSXK57FYANTMXCRJJwDjz7"
            tags={["Comunidad Destacada", "VIP"]}
            status="En la Taberna: Charlas de Gremio"
            highlight
          />
          <MemberCard 
            name="BraveMerc"
            title="Mercenary for Hire"
            avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAIUsIloLEtoBwaogd3QBQTWZFMaugcC9uR52tpg-f8O-GAZWROJUayecOomw-U1_C6bMbkmovSFn6K9n0xIJuwrlhE1_jlYvgC4j08QZl7kDPP9D1Bpz5pXENjd-De36fricB19vllAqUpDRnwAp7wTN_mPgD1wO0YKVrHtSvvwUOhWayInwdImVNGjulMXtmJAxugt2L3L6CViCvBAB4D2D5m2K68-SB9spuLKVPEvMk-l3eQ3plRtVZ61qDaXOGGzeTa6MQbLYiB"
            tags={["Follower Reciente"]}
            status="Desconectado: Camino al Sur"
          />
        </div>
      </section>
    </div>
  );
}

function CouncilCard({ name, role, description, avatar, icon, tag, color }: any) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-surface-container border border-outline-variant/10 rounded-lg p-6 flex items-start gap-4 shadow-xl hover:bg-surface-container-high transition-all group"
    >
      <div className="relative">
        <img src={avatar} alt={name} className={`w-16 h-16 rounded-full object-cover border-2 border-${color} shadow-lg`} referrerPolicy="no-referrer" />
        <div className={`absolute -bottom-1 -right-1 bg-${color} text-on-${color} rounded-full p-1 border-2 border-surface-container`}>
          {icon}
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-on-surface group-hover:text-secondary transition-colors">{name}</h3>
          <span className={`text-[10px] uppercase tracking-widest font-bold bg-${color}-container text-on-${color}-container px-2 py-1 rounded`}>{role}</span>
        </div>
        <p className="text-xs text-on-surface-variant leading-relaxed">{description}</p>
        <div className="pt-2 flex gap-2">
          <span className={`text-[10px] font-bold text-${color} border border-${color}/30 px-2 py-0.5 rounded`}>{tag}</span>
        </div>
      </div>
    </motion.div>
  );
}

function MemberCard({ name, title, avatar, tags, status, active, highlight }: any) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className={`bg-surface-container-low p-5 rounded-lg border-b-4 ${highlight ? 'border-secondary' : active ? 'border-primary' : 'border-outline-variant'} hover:bg-surface-container transition-all`}
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={avatar} alt={name} className={`w-12 h-12 rounded-full border-2 ${highlight ? 'border-secondary' : 'border-outline-variant'}`} referrerPolicy="no-referrer" />
        <div>
          <h4 className="font-bold text-on-surface">{name}</h4>
          <p className={`text-[10px] ${highlight ? 'text-secondary' : 'text-primary'} uppercase font-bold tracking-tighter`}>{title}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag: string) => (
            <span key={tag} className="text-[9px] font-bold bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded">{tag}</span>
          ))}
        </div>
        <div className="text-[11px] text-on-surface-variant flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-green-500' : highlight ? 'bg-secondary' : 'bg-outline-variant'}`}></span>
          {status}
        </div>
      </div>
    </motion.div>
  );
}
