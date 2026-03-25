import React from 'react';
import { User, Mail, Lock, Shield, Sparkles, Theater, Sword, Castle, History } from 'lucide-react';
import { motion } from 'motion/react';

export default function RegisterView({ onRegister }: { onRegister: () => void }) {
  return (
    <div className="min-h-screen bg-surface-dim text-on-surface font-body flex items-center justify-center p-4 selection:bg-secondary/30">
      {/* Wood Background Texture */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]"></div>
      </div>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="surface-container-low p-2 rounded-lg shadow-2xl shadow-black/80">
          <div className="parchment-texture text-surface-dim rounded-lg p-8 md:p-12 relative overflow-hidden deckled-edge border border-primary/20">
            {/* Header */}
            <header className="mb-10 text-center relative">
              <div className="absolute -left-4 top-0 opacity-40">
                <History size={40} className="text-tertiary-container" />
              </div>
              <h1 className="font-headline text-4xl md:text-5xl font-extrabold italic tracking-tight mb-2 text-surface-container-lowest">
                Firma el Registro de la Taberna
              </h1>
              <p className="font-body text-surface-container-highest/70 uppercase tracking-[0.2em] text-xs font-bold">
                Aledrunk & Parchment — Establecida en 1402
              </p>
              <div className="mt-6 h-px w-32 bg-surface-container-highest/20 mx-auto"></div>
            </header>

            {/* Form */}
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onRegister(); }}>
              <div className="space-y-6">
                <FormField label="Nombre de Aventurero" placeholder="v.g. Elara la Valiente" icon={<User />} />
                <FormField label="Correo de Mensajería" placeholder="mensajero@reino.com" icon={<Mail />} type="email" />
                <FormField label="Contraseña" placeholder="••••••••" icon={<Lock />} type="password" />
              </div>

              {/* Role Selector */}
              <div className="pt-4">
                <label className="block font-label text-[10px] uppercase tracking-widest text-surface-container-highest mb-4 ml-1 font-extrabold opacity-60">
                  Clase de Aventurero
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <RoleOption id="warrior" icon={<Shield />} label="Guerrero" sub="Viewer" defaultChecked />
                  <RoleOption id="mage" icon={<Sparkles />} label="Mago" sub="Sub" />
                  <RoleOption id="rogue" icon={<Theater />} label="Pícaro" sub="VIP" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8 relative group">
                <div className="absolute -left-6 bottom-4 transform -rotate-12 z-20 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-16 h-16 bg-tertiary-container rounded-full flex items-center justify-center shadow-lg border-2 border-on-tertiary-container/20">
                    <Lock size={30} className="text-on-tertiary-fixed" fill="currentColor" />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full relative py-6 px-10 rounded-xl bg-gradient-to-b from-secondary to-secondary-container text-on-secondary font-headline text-2xl font-black italic tracking-wide shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(233,195,73,0.3)] active:scale-[0.98] transition-all overflow-hidden border-b-4 border-on-secondary-container/30"
                >
                  <div className="flex items-center justify-center gap-4">
                    <span>Unirse al Gremio</span>
                    <Sword size={30} className="rotate-45" />
                  </div>
                </button>
              </div>

              <div className="text-center mt-6">
                <p className="font-label text-xs font-bold uppercase tracking-widest text-surface-container-highest/50">
                  ¿Ya tienes un salvoconducto? 
                  <button type="button" onClick={onRegister} className="ml-1 text-secondary-container hover:text-on-secondary-container underline decoration-dotted transition-colors">Entra a la Taberna</button>
                </p>
              </div>
            </form>

            <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none">
              <Castle size={96} />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center px-4 opacity-60">
          <div className="flex items-center gap-2">
            <Shield size={14} />
            <span className="text-[10px] uppercase font-bold tracking-tighter">Cifrado con Magia Antigua</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-tighter">Derechos del Gremio © 1402</span>
          </div>
        </div>
      </motion.main>
    </div>
  );
}

function FormField({ label, placeholder, icon, type = "text" }: any) {
  return (
    <div className="group">
      <label className="block font-label text-[10px] uppercase tracking-widest text-surface-container-highest mb-2 ml-1 font-extrabold opacity-60">
        {label}
      </label>
      <div className="relative">
        <input 
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest/20 focus:border-secondary-container focus:ring-0 font-headline text-xl py-3 placeholder:italic placeholder:text-surface-container-highest/30 transition-all duration-300"
        />
        <div className="absolute right-2 top-3 text-surface-container-highest/40">
          {React.cloneElement(icon as React.ReactElement, { size: 20 })}
        </div>
      </div>
    </div>
  );
}

function RoleOption({ id, icon, label, sub, defaultChecked }: any) {
  return (
    <label className="relative cursor-pointer group">
      <input type="radio" name="role" id={id} className="peer sr-only" defaultChecked={defaultChecked} />
      <div className="p-4 rounded-xl border-2 border-surface-container-highest/10 bg-surface-container-highest/5 peer-checked:bg-surface-container-highest/10 peer-checked:border-secondary-container peer-checked:shadow-inner transition-all flex flex-col items-center text-center">
        <div className="mb-2 text-surface-container-highest peer-checked:text-secondary-container">
          {React.cloneElement(icon as React.ReactElement, { size: 24 })}
        </div>
        <span className="font-headline font-bold text-lg">{label}</span>
        <span className="text-[10px] uppercase tracking-tighter opacity-50 font-label">{sub}</span>
      </div>
    </label>
  );
}
