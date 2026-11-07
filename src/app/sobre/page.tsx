import { CabecalhoPagina } from "@/components/CabecalhoPagina";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";
import { Foto } from "@/components/Foto";
import { Numeros } from "@/components/Numeros";
import { VideoFacade } from "@/components/VideoFacade";
import { metadados } from "@/lib/seo";

export const metadata = metadados({
  titulo: "Sobre o Grupo Concretiza",
  descricao:
    "Há mais de duas décadas o Grupo Concretiza reúne engenharia e incorporação para desenvolver obras com alto padrão técnico, visão estratégica e compromisso com qualidade.",
  caminho: "/sobre",
});

const VALORES = [
  { titulo: "Compromisso", texto: "Cada obra é conduzida com rigor técnico, atenção aos detalhes e alto padrão de execução." },
  {
    titulo: "Visão",
    texto: "Projetamos e construímos pensando na durabilidade, na valorização e no impacto positivo de cada empreendimento.",
  },
  {
    titulo: "Inovação e tecnologia",
    texto:
      "Utilizamos processos modernos de gestão e projeto para garantir mais precisão, eficiência e segurança em todas as etapas.",
  },
  {
    titulo: "Confiança e transparência",
    texto: "Mantemos relações baseadas em seriedade, clareza e responsabilidade com clientes, parceiros e investidores.",
  },
];

export default function Sobre() {
  return (
    <>
      <CabecalhoPagina
        titulo="Grupo Concretiza"
        trilha={[{ nome: "Sobre", href: "/sobre" }]}
        resumo="O Grupo Concretiza reúne engenharia e incorporação para desenvolver obras com alto padrão técnico, visão estratégica e compromisso com qualidade, inovação e rentabilidade."
        foto={{ nome: "vista-cidade", alt: "Homem de perfil observando a cidade por uma janela panorâmica" }}
      />

      <section aria-labelledby="concretiza-titulo" className="py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <h2 id="concretiza-titulo" className="titulo text-4xl sm:text-5xl">
              Concretiza
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-tinta [font-stretch:105%]">
              Da concepção ao acabamento, desenvolvemos obras que unem técnica, inovação e solidez para quem constrói,
              investe e acredita em projetos bem feitos.
            </p>
            <div className="texto-corrido mt-6 grid gap-5 text-grafite">
              <p>
                Com mais de duas décadas de atuação, a Concretiza construiu uma trajetória sólida desenvolvendo projetos
                nas áreas de engenharia, construção e incorporação. Atuando de forma integrada, o grupo entrega obras que
                aliam planejamento técnico, eficiência construtiva e alto padrão de execução.
              </p>
              <p>
                Presente em diferentes regiões do Brasil, a Concretiza participa de empreendimentos residenciais,
                comerciais e corporativos, oferecendo soluções completas. Cada obra é conduzida com rigor técnico,
                organização e compromisso com qualidade, garantindo segurança para quem constrói e confiança para quem
                investe.
              </p>
              <p>
                Mais do que executar obras, a Concretiza constrói com responsabilidade, inovação e visão de longo prazo,
                mantendo como princípio a precisão de quem projeta com cuidado, concretizando a entrega com orgulho.
              </p>
            </div>
          </div>
          <figure className="self-start">
            <Foto
              nome="equipe-em-obra"
              alt="Equipe da Concretiza reunida de capacete em um canteiro de obras"
              sizes="(min-width: 1248px) 540px, (min-width: 1024px) 44vw, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-sm text-grafite">Desde 2006 construindo história.</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="video-titulo" className="sobre-escuro bg-floresta py-16 text-white lg:py-24">
        <div className="container-site">
          <h2 id="video-titulo" className="titulo text-3xl sm:text-4xl">
            Conheça a Concretiza em 1 minuto e meio
          </h2>
          <div className="relative mt-8 aspect-video overflow-hidden bg-black">
            <VideoFacade src="/video/institucional-1080p.mp4" titulo="Vídeo institucional do Grupo Concretiza (1min32s)">
              <Foto nome="institucional-capa" alt="" fill sizes="(min-width: 1248px) 1184px, 100vw" className="object-cover" />
            </VideoFacade>
          </div>
        </div>
      </section>

      <section aria-label="Números" className="bg-white py-16 lg:py-20">
        <div className="container-site">
          <Numeros />
        </div>
      </section>

      <section aria-labelledby="valores-titulo" className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 id="valores-titulo" className="titulo text-4xl sm:text-5xl">
              Missão, visão e valores
            </h2>
            <p className="texto-corrido text-grafite lg:pt-2">
              Trabalhar com responsabilidade, inovação e excelência para desenvolver projetos que geram valor, constroem
              confiança e deixam resultados duradouros.
            </p>
          </div>
          <ul className="mt-12 grid gap-px bg-linha sm:grid-cols-2">
            {VALORES.map((v) => (
              <li key={v.titulo} className="bg-concreto p-7 sm:p-9">
                <h3 className="text-2xl font-bold [font-stretch:112%]">{v.titulo}</h3>
                <p className="mt-3 text-grafite">{v.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ChamadaOrcamento titulo="Entre em contato!" />
    </>
  );
}
