import { NUMEROS } from "@/lib/site";

// Os números da empresa como uma cota encadeada de desenho técnico:
// cada medida ocupa um trecho da mesma linha, com os batentes encostados.
export function Numeros({ escuro = false }: { escuro?: boolean }) {
  return (
    <ul
      className={`grid grid-cols-2 gap-y-12 lg:grid-cols-4 ${escuro ? "text-white" : "text-tinta"}`}
      aria-label="A Concretiza em números"
    >
      {NUMEROS.map((n) => (
        <li key={n.unidade} className="flex flex-col items-center px-3 text-center">
          <p className="flex flex-col items-center whitespace-nowrap sm:flex-row sm:items-baseline sm:gap-2">
            <span className="text-[2.6rem] font-extrabold leading-none [font-stretch:125%] tracking-tight sm:text-6xl">{n.valor}</span>
            <span className={`text-lg font-semibold ${escuro ? "text-menta" : "text-marca"}`}>{n.unidade}</span>
          </p>
          <div aria-hidden className={`cota -mx-3 mt-3 w-[calc(100%+1.5rem)] ${escuro ? "text-white/50" : "text-grafite/60"}`} />
          <p className={`mt-4 max-w-[22ch] text-[0.95rem] leading-snug ${escuro ? "text-white/80" : "text-grafite"}`}>{n.texto}</p>
        </li>
      ))}
    </ul>
  );
}
