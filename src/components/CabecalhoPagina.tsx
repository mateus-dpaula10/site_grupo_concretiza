import Link from "next/link";
import type { ReactNode } from "react";
import { Foto } from "@/components/Foto";
import { JsonLd, dadosBreadcrumb } from "@/components/JsonLd";

type Props = {
  titulo: string;
  resumo: ReactNode;
  trilha: { nome: string; href: string }[];
  foto?: { nome: string; alt: string };
  children?: ReactNode;
};

// Abertura das páginas internas: trilha (com BreadcrumbList), H1, resumo e foto opcional.
export function CabecalhoPagina({ titulo, resumo, trilha, foto, children }: Props) {
  return (
    <section className="sobre-escuro bg-floresta text-white">
      <JsonLd dados={dadosBreadcrumb(trilha)} />
      <div className={`container-site grid gap-10 pb-14 pt-8 ${foto ? "lg:grid-cols-[1.1fr_1fr] lg:items-end" : ""}`}>
        <div>
          <nav aria-label="Trilha de navegação">
            <ol className="flex flex-wrap items-center gap-x-2 text-sm text-white/75">
              <li>
                <Link href="/" className="hover:text-menta">
                  Home
                </Link>
              </li>
              {trilha.map((t, i) => (
                <li key={t.href} className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  {i === trilha.length - 1 ? (
                    <span aria-current="page" className="text-white">
                      {t.nome}
                    </span>
                  ) : (
                    <Link href={t.href} className="hover:text-menta">
                      {t.nome}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="titulo mt-8 text-[2.4rem] sm:text-6xl lg:text-[4.25rem]">{titulo}</h1>
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{resumo}</div>
          {children}
        </div>
        {foto && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:aspect-[5/4]">
            <Foto
              nome={foto.nome}
              alt={foto.alt}
              fill
              prioridade="lcp"
              sizes="(min-width: 1248px) 560px, (min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
