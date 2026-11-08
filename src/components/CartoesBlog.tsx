import Link from "next/link";
import { Foto } from "@/components/Foto";
import { POSTS, dataCurta } from "@/lib/posts";
import { v } from "@/lib/medidas";

// Cartões do blog no mesmo formato do widget de blog do Wix: foto, autor com avatar,
// data e tempo de leitura, título em 2 linhas e resumo em 2 linhas.
export function CartoesBlog({ nivel = "h3" }: { nivel?: "h2" | "h3" }) {
  const Titulo = nivel;
  return (
    <ul className="grid gap-[25px] tab:grid-cols-3 tab:gap-[var(--g)]" style={{ "--g": v(25) } as React.CSSProperties}>
      {POSTS.map((p) => (
        <li key={p.slug}>
          <article className="group relative flex h-full flex-col bg-floresta">
            <div className="relative aspect-[351/263] overflow-hidden tab:aspect-[415/311]">
              <Foto nome={p.capa.nome} alt={p.capa.alt} fill sizes="(min-width: 751px) 29vw, 351px" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col px-[21px] pb-[24px] pt-[28px] tab:px-[var(--px)] tab:pb-[var(--pb)] tab:pt-[var(--pt)]" style={{ "--px": v(21), "--pt": v(28), "--pb": v(30) } as React.CSSProperties}>
              <div className="flex items-center gap-[10px] text-[12px] text-cinza">
                {p.avatar ? (
                  <Foto nome={p.avatar} alt="" largura={32} className="size-[32px] rounded-full object-cover" />
                ) : (
                  <span aria-hidden className="grid size-[32px] place-items-center rounded-full bg-teal text-[13px] font-semibold text-white">
                    {p.autor[0]}
                  </span>
                )}
                <div>
                  <p>{p.autor}</p>
                  <p>
                    <time dateTime={p.publicado}>{dataCurta(p.publicado)}</time>
                    <span aria-hidden className="mx-[6px]">·</span>1 min de leitura
                  </p>
                </div>
              </div>
              <Titulo className="mt-[14px] line-clamp-3 font-display text-[20px] font-semibold leading-[1.4] tab:line-clamp-2 tab:text-[22px]">
                <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0 group-hover:text-menta">
                  {p.tituloOriginal}
                </Link>
              </Titulo>
              <p className="mt-[16px] line-clamp-2 text-[16px] leading-[1.5] text-cinza">{p.resumoOriginal}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
