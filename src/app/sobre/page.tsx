import { BotaoSeta } from "@/components/BotaoSeta";
import { Foto } from "@/components/Foto";
import { IconeValor } from "@/components/IconesValores";
import { TopoPagina } from "@/components/TopoPagina";
import { metadados } from "@/lib/seo";
import { v } from "@/lib/medidas";

export const metadata = metadados({
  titulo: "Sobre",
  descricao:
    "Há mais de duas décadas o Grupo Concretiza reúne engenharia e incorporação para desenvolver obras com alto padrão técnico, visão estratégica e compromisso com qualidade.",
  caminho: "/sobre",
});

const VALORES = [
  { icone: "compromisso", titulo: "Compromisso", texto: "Cada obra é conduzida com rigor técnico, atenção aos detalhes e alto padrão de execução." },
  {
    icone: "visao",
    titulo: "Visão",
    texto: "Projetamos e construímos pensando na durabilidade, na valorização e no impacto positivo de cada empreendimento.",
  },
  {
    icone: "inovacao",
    titulo: "Inovação e Tecnologia",
    texto: "Utilizamos processos modernos de gestão e projeto para garantir mais precisão, eficiência e segurança em todas as etapas.",
  },
  {
    icone: "confianca",
    titulo: "Confiança e Transparência",
    texto: "Mantemos relações baseadas em seriedade, clareza e responsabilidade com clientes, parceiros e investidores.",
  },
] as const;

// Réplica da página "Sobre" do Wix (medidas de 1440px e 390px).
export default function Sobre() {
  return (
    <>
      <TopoPagina
        titulo="Grupo Concretiza"
        texto="O Grupo Concretiza reúne engenharia e incorporação para desenvolver obras com alto padrão técnico, visão estratégica e compromisso com qualidade, inovação e rentabilidade."
        pagina={{ nome: "Sobre", href: "/sobre" }}
        foto={{ nome: "obra-guindaste", alt: "Edifício em construção com guindastes" }}
      />

      <section
        className="degrade-base pb-[60px] pt-[36px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]"
        style={{ "--pt": v(86), "--pb": v(90), "--inicio": "60%", "--fim": "#1e2612" } as React.CSSProperties}
      >
        <div className="caixa tab:grid tab:grid-cols-[var(--c1)_1fr] tab:gap-x-[var(--g)]" style={{ "--c1": v(563), "--g": v(114) } as React.CSSProperties}>
          <div className="relative h-[364px] tab:h-auto">
            <div className="relative h-[349px] w-[330px] overflow-hidden rounded-[20px] tab:h-[var(--ih)] tab:w-full" style={{ "--ih": v(669) } as React.CSSProperties}>
              <Foto nome="nobile-suites" alt="Fachada do hotel Nobile Suites, obra da Concretiza" fill sizes="(min-width: 751px) 40vw, 330px" className="object-cover" />
            </div>
            <div
              className="absolute left-[194px] top-[203px] h-[161px] w-[156px] overflow-hidden rounded-[12px] border-[3px] border-white tab:left-[var(--x)] tab:top-[var(--y)] tab:h-[var(--h)] tab:w-[var(--w)]"
              style={{ "--x": v(332), "--y": v(434), "--w": v(284), "--h": v(293) } as React.CSSProperties}
            >
              <Foto nome="vista-cidade" alt="Profissional da Concretiza observando a cidade" fill sizes="(min-width: 751px) 20vw, 156px" className="object-cover" />
            </div>
          </div>
          <div className="mt-[22px] tab:mt-0">
            <h2 className="t-h2">Concretiza</h2>
            <p className="t-lead mt-[9px] tab:mt-[var(--m)]" style={{ "--m": v(17) } as React.CSSProperties}>
              Da concepção ao acabamento, desenvolvemos obras que unem técnica, inovação e solidez para quem constrói, investe e acredita
              em projetos bem feitos.
            </p>
            <div className="mt-[7px] grid gap-[25px] text-[16px] leading-[1.6] text-cinza tab:mt-[var(--m2)] tab:gap-[var(--g2)] tab:text-[length:var(--f)]" style={{ "--m2": v(12), "--g2": v(28), "--f": v(18) } as React.CSSProperties}>
              <p>
                Com mais de duas décadas de atuação, a Concretiza construiu uma trajetória sólida desenvolvendo projetos nas áreas de
                engenharia, construção e incorporação. Atuando de forma integrada, o grupo entrega obras que aliam planejamento técnico,
                eficiência construtiva e alto padrão de execução.
              </p>
              <p>
                Presente em diferentes regiões do Brasil, a Concretiza participa de empreendimentos residenciais, comerciais e
                corporativos, oferecendo soluções completas. Cada obra é conduzida com rigor técnico, organização e compromisso com
                qualidade, garantindo segurança para quem constrói e confiança para quem investe.
              </p>
              <p>
                Mais do que executar obras, a Concretiza constrói com responsabilidade, inovação e visão de longo prazo, mantendo como
                princípio a precisão de quem projeta com cuidado, concretizando a entrega com orgulho.
              </p>
            </div>
            <div className="mt-[37px] tab:mt-[var(--m3)]" style={{ "--m3": v(54) } as React.CSSProperties}>
              <BotaoSeta href="/#contato" variante="cheio" largura={[150, 187]} escuro>
                Entre em contato!
              </BotaoSeta>
            </div>
          </div>
        </div>
      </section>

      <section
        className="degrade-base pb-[60px] pt-[31px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]"
        style={{ "--pt": v(86), "--pb": v(88), "--inicio": "60%", "--fim": "#1c2411" } as React.CSSProperties}
      >
        <div className="caixa">
          <div className="text-center">
            <h2 className="t-h2">Missão, Visão e Valores</h2>
            <p className="t-lead mx-auto mt-[9px] tab:mt-[var(--m)] tab:max-w-[var(--w)]" style={{ "--m": v(17), "--w": v(789) } as React.CSSProperties}>
              Trabalhar com responsabilidade, inovação e excelência para desenvolver projetos que geram valor, constroem confiança e
              deixam resultados duradouros.
            </p>
          </div>
          <div className="mt-[21px] tab:mt-[var(--m)] tab:grid tab:grid-cols-[var(--c1)_1fr] tab:gap-x-[var(--g)]" style={{ "--m": v(57), "--c1": v(496), "--g": v(58) } as React.CSSProperties}>
            <div className="relative h-[314px] overflow-hidden rounded-[16px] tab:h-[var(--h)]" style={{ "--h": v(693) } as React.CSSProperties}>
              {/* Exceção: no original a foto é do banco do Wix (guindaste); aqui vai foto de obra do cliente. */}
              <Foto nome="majestic-hall" alt="Majestic Hall, centro de eventos construído pela Concretiza" fill sizes="(min-width: 751px) 35vw, 351px" className="object-cover" />
            </div>
            <ul className="mt-[25px] grid gap-[25px] tab:mt-0 tab:grid-cols-2 tab:gap-x-[var(--gx)] tab:gap-y-[var(--gy)]" style={{ "--gx": v(25), "--gy": v(30) } as React.CSSProperties}>
              {VALORES.map((val) => (
                <li
                  key={val.titulo}
                  className="rounded-[20px] bg-[#16423a] px-[16px] pb-[30px] pt-[18px] tab:px-[var(--px)] tab:pb-[var(--pb)] tab:pt-[var(--pt)]"
                  style={{ "--px": v(24), "--pt": v(28), "--pb": v(36) } as React.CSSProperties}
                >
                  <div
                    className="grid size-[52px] place-items-center rounded-[6px] border-[4px] border-[#3a4a2b] bg-menta-escuro p-[9px] text-oliva tab:size-[var(--b)] tab:p-[var(--bp)]"
                    style={{ "--b": v(64), "--bp": v(12) } as React.CSSProperties}
                  >
                    <IconeValor nome={val.icone} />
                  </div>
                  <h3 className="mt-[30px] font-display text-[20px] font-semibold leading-[1.3] tab:mt-[var(--m)] tab:text-[length:var(--f)]" style={{ "--m": v(39), "--f": v(24.75) } as React.CSSProperties}>
                    {val.titulo}
                  </h3>
                  <p className="mt-[4px] text-[14px] leading-[1.6] text-cinza tab:mt-[var(--m2)] tab:text-[length:var(--f2)]" style={{ "--m2": v(9), "--f2": v(18) } as React.CSSProperties}>
                    {val.texto}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
