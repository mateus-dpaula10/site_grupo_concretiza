import Link from "next/link";
import { POSTS, formatarData, type Post } from "@/lib/posts";

// Capa tipográfica (sem imagem): o tema do post em letra condensada sobre o verde da marca.
export function CartoesPosts({ posts = POSTS, nivel = "h3" }: { posts?: Post[]; nivel?: "h2" | "h3" }) {
  const Titulo = nivel;
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {posts.map((p) => (
        <li key={p.slug}>
          <article className="group relative flex h-full flex-col bg-white">
            <div aria-hidden className="flex aspect-[16/9] items-end bg-floresta p-5 text-menta">
              <span className="titulo-condensado text-4xl leading-none sm:text-5xl">{p.tema}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <Titulo className="text-xl font-bold leading-snug [font-stretch:105%]">
                <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0 group-hover:text-marca">
                  {p.titulo}
                </Link>
              </Titulo>
              <p className="mt-3 text-grafite">{p.resumo}</p>
              <p className="mt-auto pt-5 text-sm text-grafite">
                {p.autor}, <time dateTime={p.publicado}>{formatarData(p.publicado)}</time>
              </p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
