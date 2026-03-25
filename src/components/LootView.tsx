import { PlusCircle, Video, Share2, Sparkles, BadgeCheck, PlayCircle, History } from 'lucide-react';
import { motion } from 'motion/react';

export default function LootView() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface">El Botín</h2>
          <p className="text-on-surface-variant mt-2 font-label">Organiza tus tesoros visuales y crónicas del reino.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-b from-secondary to-secondary-container text-on-secondary px-6 py-3 rounded-xl font-bold shadow-[0_0_15px_rgba(233,195,73,0.3)] hover:shadow-[0_0_20px_#e9c349] transition-all transform active:scale-95">
          <PlusCircle size={20} />
          Registrar Botín
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ideas Column */}
        <LootColumn title="Ideas" count={4} color="primary">
          <LootCard 
            title="Clip Boss Wipe - Elden Wyvern"
            priority="Crítico"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuD0vz9bJweUJZtA7fgKQGiEX6dVBRZ90XcOxUn1e3SMN0i6qrG33oX95HAoQHBboAA1Po_Ic_mBZHME-9FpW9qlKHIUpEj_dJDYaBZHlIX4yJ77iWJpy5IFQlqgfVhqL6eIkujfPJMc0hp7hTZM4kPQxJ9sBdQr_oOQTW7yjb7T3xtv2A9cmQ-ZVQML893XLZLVB-93OUXUJkB_nsoZevc27Y9I1thzYb37Wud0CijYgBTya3N70Jz_TvwKakocrSZ9KsqnyAOYKOKc"
            time="HACE 2h"
            avatars={[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDb7gfpU1_jClJLt3kp2Nfjm4faipITSFWLeDESd4zbiHZgUTOsff2pvZsMacGnT7sfa-k0FndHPEAsZ58iIqnAUZpQqJ-eWPd-S4mY-ZzZiRkk-J_0qcbHzpnIiLAAHe0bRK84B1ZWWfhKnEJd543ICVLJxoZATh5QcaKUS514Y6ADAQpbGZM9F0DJeZ1wPxZFJMSianS4BG1MiGUAgqth5_IybeS4Y6t93LoiPQgYKZH3P--ebdtPc_XPawNM05QNwRN9NxsWndks",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCjWrMqepv9QcZsfVD-KvlixJWwT17URfmy9a3X8L3ZNecIcbdT4uoQRECLLZnBZyjpA2jTcGvXBWsWqXSGTSJNgLPrUIBn1FRVlXeNs8naz1ELztcJV2AKB1KnM5m538tzfpNozhbtripjXuINDYRLf7LUCQuNIYjZALMj5a1QF8u9zRIFpTlTod0AWqvoawZvIaHlsnASzpG1MLSFNthmq5rei3HrPREMIzOKE8FEC061FdwxbQYInlBCFC3XDyNM-sEGUZLuao5l"
            ]}
          />
          <LootCard 
            title="Vlog: Un día en la Taberna"
            priority="Bajo"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBDQjEgRm2U3LBN7L2KK_hUJGauG2rZTJy0KHeSjZ4IS0cFq7Pdr5se1wiH2hlF1-w-D_ZRehqZi5aEGRXvl54-xu19lw6-5BGdEo5hNZTOkcLYVQwDDrDJWb4pY527XUMRN3K3F9XrP2h87n0LkkbdTWoO6Szkkr8TFakN1NNFpy3UPvfkAl3lkv-2_nSr7bE-FlfAV60O4JEpi7rEutQPvYpEutEnVZs_5hRhEU2mN_GgQMX_0NYhXH3ceL9oqeHBbM_kRVyKtddP"
            time="PENDIENTE"
            avatars={["https://lh3.googleusercontent.com/aida-public/AB6AXuBvfbpoB0jrciI5W--v-kDXMS6bW3NIMGT4T7rRGWoCtuzbMYPIFnl8DiS1-rTOdr7eOg0EYRRZslc5_OmExdK_PFu-9KvWxUdnTvYdV1bpaTD-pqLJuZqxb2Xx0lphtDz6caXpx_fXNr8FRYasMEnx4eVbKYRpfzO7djMzj27vMUj52ky44AZBuStXDhlxFxi9WRTC3ejSbwI_w7P8kKjwgiaHBYVunb0-HDTSROMHxCZpAK7ls49IAGjKuO3efukMu_UIAPifzNw5"]}
          />
        </LootColumn>

        {/* Editing Column */}
        <LootColumn title="En Edición" count={2} color="secondary">
          <LootCard 
            title="Highlights: Gremio vs Dragón"
            priority="Normal"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuC1WutiXKc9lvyoNCNaio7HuW-Ar1Ilw0XaNxZFKRoxvFqzpoNmmZzHoEaVC-YYhw2BzgM-Miv-DWaLOXey5HNOY4g-R16DrLdo9kusLscC3TVBw9qJWCSV1aOCzHNLHrP8uwBV0snCdnTXNtYU2xSxlrqQbLSLVxxAEUAq_xOpu5WghKh13q8byEZ-5xeiXIW3lgrUgGxDf54ejkqSuiU0NDB6wwosu-BhoSPyxg2Pay6oxksCXdp5Ne0XIp2w6uc4XqnB6a9T8VPL"
            editing
            progress={65}
            assignee="MASTER EDITOR"
            assigneeAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAlfd2bN-yQkUOT1jmpAaPwwAED1wbYKGTcpKEqFZqSeMUnY10J8t5oAUa7RUueRmamGe4sAoKlwGy2O0NjyySZcWEgLgRVEZTwd3Ru_KJMgid4qb_1BGnqcjFZFws1JZeec9R1nvd3HfVyLtBa8fYGZM4sqLVBrsdCdVz0WiwTptaFIydkca7lfcSMV4hUP7-18epPnN4v3yBSRNQEvpjNO0Qk0jeGuy4ZoIl8y3FE1_g_9gSf4MbUmNSBrzWmdXqQRGS2ohqHGtN0"
          />
        </LootColumn>

        {/* Ready Column */}
        <LootColumn title="Listo para Publicar" count={1} color="on-surface">
          <LootCard 
            title="Short: El Gremio se reúne"
            priority="Crítico"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ClJFO0N8Fxl1JMAd2t3m670VHjc9EPHWkkY3a1ukD_PQZUDF98LxqbWUJ_6XCrfpD6ccIe57sv3KGYIr44sr55vrE_IQiXWJ0abbWLpv-b_spvZZPg45LWB9sJjShwkWOb-Db2jLOgAHTVymX5AN3JmE-TTpLD8Gj3k0qNfh01h4FPBsdJ3shx7wwJH_O5lc6Fgmxt7e05FBj9oGpp6MzZnX9O6ITHzSh4aasBsaJVKRROveH91SMWc3dSPwDvRY3S06O6bRlH_-"
            ready
          />
        </LootColumn>
      </div>
    </div>
  );
}

function LootColumn({ title, count, color, children }: any) {
  return (
    <div className="flex flex-col gap-6">
      <div className={`flex items-center justify-between px-4 py-2 bg-surface-container rounded-t-lg border-b-2 border-${color}/40`}>
        <h3 className={`font-headline text-xl text-${color} font-bold`}>{title}</h3>
        <span className="text-xs bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded-full">{count}</span>
      </div>
      <div className="flex flex-col gap-6 p-4 bg-surface-container-low rounded-b-lg min-h-[530px]">
        {children}
      </div>
    </div>
  );
}

function LootCard({ title, priority, image, time, avatars, editing, progress, assignee, assigneeAvatar, ready }: any) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className={`group relative bg-surface-bright parchment-texture p-4 rounded-lg shadow-xl transition-all duration-300 ${editing ? 'border-l-4 border-secondary/50' : ready ? 'ring-2 ring-secondary/20' : ''}`}
    >
      <div className="relative w-full h-32 mb-4 rounded-md overflow-hidden bg-surface-container-highest">
        <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src={image} alt={title} referrerPolicy="no-referrer" />
        {editing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors">
            <Sparkles size={32} className="text-secondary" fill="currentColor" />
          </div>
        )}
        {ready && (
          <div className="absolute top-2 left-2">
            <BadgeCheck size={20} className="text-secondary" fill="currentColor" />
          </div>
        )}
      </div>
      <h4 className="font-bold text-lg mb-2 text-on-surface leading-tight">{title}</h4>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`text-[10px] uppercase font-bold tracking-tighter px-2 py-0.5 rounded ${priority === 'Crítico' ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-surface-container-highest text-on-surface-variant'}`}>
          {priority}
        </span>
        <div className="flex gap-1 ml-auto text-on-surface-variant/60">
          <Video size={14} />
          <Share2 size={14} />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-on-surface-variant/10 pt-3">
        {editing ? (
          <>
            <div className="flex items-center gap-2">
              <img src={assigneeAvatar} className="w-6 h-6 rounded-full" alt={assignee} referrerPolicy="no-referrer" />
              <span className="text-[10px] text-on-surface font-bold">{assignee}</span>
            </div>
            <span className="text-[10px] text-secondary font-bold">{progress}%</span>
          </>
        ) : ready ? (
          <>
            <div className="flex gap-2">
              <PlayCircle size={14} className="text-secondary" />
              <History size={14} className="text-secondary" />
            </div>
            <button className="text-[10px] font-bold text-secondary uppercase tracking-widest hover:underline">Publicar Ahora</button>
          </>
        ) : (
          <>
            <div className="flex -space-x-2">
              {avatars?.map((av: string, i: number) => (
                <img key={i} src={av} className="w-6 h-6 rounded-full border border-surface" alt="Team" referrerPolicy="no-referrer" />
              ))}
            </div>
            <span className="text-[10px] text-on-surface-variant font-label">{time}</span>
          </>
        )}
      </div>
    </motion.div>
  );
}
