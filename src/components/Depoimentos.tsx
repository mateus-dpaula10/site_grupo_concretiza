import { IconeEstrela } from "@/components/Icones";
import { DEPOIMENTOS } from "@/lib/site";

export function Estrelas({ className = "text-amber-500" }: { className?: string }) {
  return (
    <span className={`flex gap-0.5 ${className}`} role="img" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }, (_, i) => (
        <IconeEstrela key={i} className="size-4" />
      ))}
    </span>
  );
}

export function Depoimentos() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {DEPOIMENTOS.map((d) => (
        <figure key={d.nome} className="flex flex-col border-t-4 border-marca bg-white p-7 sm:p-9">
          <Estrelas className="text-[#b7791f]" />
          <blockquote className="mt-5 grid gap-4 text-[1.05rem] leading-relaxed text-tinta">
            {d.texto.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </blockquote>
          <figcaption className="mt-auto pt-6 font-semibold">
            {d.nome}
            <span className="block text-sm font-normal text-grafite">Avaliação no Google</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
