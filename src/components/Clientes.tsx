import { Foto } from "@/components/Foto";
import dimensoes from "@/lib/imagens.gerado.json";
import { CLIENTES } from "@/lib/site";

const mapa = dimensoes as Record<string, { w: number; h: number }>;
// Caixa máxima de cada logo na tela (px). A largura final respeita a proporção do logo.
const CAIXA = { w: 120, h: 56 };

// Parede de logos dos clientes, nas cores originais.
// Logos brancos (feitos para fundo escuro) são escurecidos com brightness(0).
export function Clientes() {
  return (
    <ul className="grid grid-cols-2 border-l border-t border-linha bg-white xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {CLIENTES.map((c) => {
        const d = mapa[c.logo];
        const largura = Math.round(Math.min(CAIXA.w, (CAIXA.h * d.w) / d.h));
        return (
          <li key={c.nome} className="flex h-28 items-center justify-center border-b border-r border-linha p-5 sm:h-32">
            <Foto nome={c.logo} alt={c.nome} largura={largura} className={c.claro ? "brightness-0" : undefined} />
          </li>
        );
      })}
    </ul>
  );
}
