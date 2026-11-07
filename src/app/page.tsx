import Link from "next/link";
import { CarrosselInstagram } from "@/components/CarrosselInstagram";
import { FormContato } from "@/components/FormContato";
import { Foto } from "@/components/Foto";
import { BotaoSeta } from "@/components/BotaoSeta";
import { IconeEstrelas, IconeServico } from "@/components/Icones";
import { Rolagem } from "@/components/Rolagem";
import { VideoAoVer } from "@/components/VideoAoVer";
import { VideoHero } from "@/components/VideoHero";
import { metadados } from "@/lib/seo";
import { CLIENTES, ESPECIALIDADES, GALERIA_HOME, SERVICOS_HOME, WHATSAPP_ORCAMENTO, whatsappUrl } from "@/lib/site";
import { v } from "@/lib/medidas";

export const metadata = metadados({
  titulo: "Home | Grupo Concretiza",
  tituloAbsoluto: true,
  descricao:
    "Soluções completas em engenharia e execução de obras corporativas, comerciais, industriais e residenciais de alto padrão. Mais de 747 projetos e 20 anos de experiência.",
  caminho: "/",
});

// Réplica da home do site Wix. Medidas desktop medidas em 1440px e convertidas em vw
// (o Wix Studio escala o layout com a largura); medidas do celular medidas em 390px.
export default function Home() {
  return (
    <>
      {/* 1. Abertura com vídeo (o Wix usava vídeo do banco do Wix; aqui é vídeo do cliente) */}
      <section
        className="relative overflow-hidden tab:h-[var(--h)]"
        style={{ "--h": v(666) } as React.CSSProperties}
      >
        <div className="absolute inset-0">
          <Foto nome="hero-capa" alt="" fill prioridade="lcp" sizes="100vw" className="object-cover" />
          <VideoHero />
          <div aria-hidden className="absolute inset-0 bg-fundo/75" />
        </div>
        <div className="caixa relative pb-[39px] pt-[10px] tab:pb-0 tab:pt-[var(--pt)]" style={{ "--pt": v(105) } as React.CSSProperties}>
          {/* Selo sem as fotos de pessoas (eram do Unsplash e o cliente via como "logos embaralhados"). */}
          <div
            className="inline-flex h-[66px] items-center rounded-full border border-white/15 bg-white/10 px-[24px] backdrop-blur-sm tab:h-[var(--bh)] tab:px-[var(--bp)]"
            style={{ "--bh": v(79), "--bp": v(28), "--st": v(84) } as React.CSSProperties}
          >
            <div>
              <p className="flex items-center gap-[10px] whitespace-nowrap text-[12px] text-cinza tab:text-[length:var(--t1)]" style={{ "--t1": v(14) } as React.CSSProperties}>
                <IconeEstrelas className="w-[70px] text-menta tab:w-[var(--st)]" />
                <span>5.0 Nota</span>
              </p>
              <p className="mt-[4px] text-[13px] tab:text-[length:var(--t2)]" style={{ "--t2": v(16) } as React.CSSProperties}>
                500+ Clientes
              </p>
            </div>
          </div>

          <h1 className="t-h1 mt-[17px] max-w-[355px] tab:mt-[var(--g1)] tab:max-w-[var(--w)]" style={{ "--g1": v(23), "--w": v(1110) } as React.CSSProperties}>
            Soluções completas em engenharia e execução de obras.
          </h1>
          <p className="t-lead mt-[6px] max-w-[355px] tab:mt-[var(--g2)] tab:max-w-none" style={{ "--g2": v(12) } as React.CSSProperties}>
            Planejamento, agilidade e compromisso para entregar obras com precisão e alto padrão.
          </p>
          <div className="mt-[42px] flex flex-col items-start gap-[16px] tab:mt-[var(--g3)] tab:flex-row tab:gap-[var(--g4)]" style={{ "--g3": v(57), "--g4": v(28) } as React.CSSProperties}>
            {/* Cada botão leva a um lugar: Orçamento → formulário; Contato → página com todos os canais.
                O WhatsApp fica só no cabeçalho. */}
            <BotaoSeta href="/#contato" variante="cheio" largura={[185, 210]}>
              Orçamento de projetos
            </BotaoSeta>
            <BotaoSeta href="/contato" variante="contorno" largura={[155, 157]}>
              Contato
            </BotaoSeta>
          </div>
        </div>
      </section>

      {/* 2. Resultados que constroem confiança + galeria rolando */}
      <section
        className="degrade-base pb-[30px] pt-[31px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]"
        style={{ "--pt": v(87), "--pb": v(85), "--inicio": "59%", "--fim": "#377a6d" } as React.CSSProperties}
      >
        <div className="caixa">
          <div className="tab:grid tab:grid-cols-[42.75%_1fr]">
            <h2 className="t-h2-menor max-w-[351px] tab:max-w-[var(--w)]" style={{ "--w": v(497) } as React.CSSProperties}>
              Resultados que constroem confiança
            </h2>
            <div>
              <p className="t-lead mt-[5px] tab:mt-0">
                Em mais de duas décadas de atuação, a Concretiza construiu uma trajetória sólida de Campos Novos ao Paraná, de
                residências a grandes complexos comerciais. Cada obra entregue carrega o compromisso de quem projeta com técnica,
                executa com rigor e entrega com orgulho.
              </p>
              <ul
                className="mt-[47px] grid grid-cols-2 gap-[21px] tab:ml-[var(--ml)] tab:mt-[var(--mt)] tab:flex tab:gap-[var(--gap)]"
                style={{ "--ml": v(194), "--mt": v(34), "--gap": v(34) } as React.CSSProperties}
              >
                {[
                  ["+747 projetos", "Residências, edifícios e grandes complexos entregues."],
                  ["20 anos", "De experiência, inovação e compromisso com a excelência."],
                ].map(([t, d]) => (
                  <li key={t} className="tab:w-[var(--sw)]" style={{ "--sw": v(159) } as React.CSSProperties}>
                    <h3 className="t-h3 border-b border-white pb-[4px]">{t}</h3>
                    <p className="mt-[8px] text-[14px] leading-[1.1] text-cinza tab:mt-[var(--m)] tab:text-[length:var(--f)]" style={{ "--m": v(20), "--f": v(13.5) } as React.CSSProperties}>
                      {d}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[46px] overflow-hidden tab:mx-[5%] tab:mt-[var(--mt)]" style={{ "--mt": v(57) } as React.CSSProperties} aria-label="Fotos de obras">
          <Rolagem className="flex w-max gap-[20px] pl-[20px] tab:gap-[var(--gap)] tab:pl-0" style={{ "--gap": v(25), "--duracao": "70s" } as React.CSSProperties}>
            {GALERIA_HOME.map((f) => (
              <li
                key={f.nome}
                className="relative h-[288px] w-[166px] shrink-0 overflow-hidden rounded-[12px] tab:h-[var(--gh)] tab:w-[var(--gw)] tab:rounded-[var(--r)]"
                style={{ "--gw": v(305), "--gh": v(342), "--r": v(20) } as React.CSSProperties}
              >
                <Foto nome={f.nome} alt={f.alt} fill sizes="(min-width: 751px) 22vw, 166px" className="object-cover" />
              </li>
            ))}
          </Rolagem>
        </div>
      </section>

      {/* 3. Nossos Serviços */}
      <section
        id="servicos"
        className="degrade-base pb-[44px] pt-[32px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]"
        style={{ "--pt": v(86), "--pb": v(92), "--inicio": "70%", "--fim": "#285d52" } as React.CSSProperties}
      >
        <div className="caixa">
          <h2 className="t-h2 text-center">Nossos Serviços</h2>
          <ul className="mt-[55px] grid gap-[48px] px-[16px] tab:mt-[var(--mt)] tab:grid-cols-4 tab:gap-[var(--gap)] tab:px-[var(--px)] tab:text-center" style={{ "--mt": v(70), "--gap": v(45), "--px": v(12) } as React.CSSProperties}>
            {SERVICOS_HOME.map((s) => (
              <li key={s.titulo} className="group">
                <div
                  className="grid size-[52px] place-items-center rounded-[8px] border-[4px] border-[#2d6c5e] bg-menta-escuro tab:mx-auto tab:size-[var(--b)] tab:rounded-[var(--r)] tab:border-[length:var(--bd)]"
                  style={{ "--b": v(69), "--r": v(10), "--bd": v(5), "--i": v(40) } as React.CSSProperties}
                >
                  <IconeServico tipo={s.icone} className="w-[31px] text-teal tab:w-[var(--i)]" />
                </div>
                <h3 className="t-h3 mt-[30px] tab:mt-[var(--m)]" style={{ "--m": v(40) } as React.CSSProperties}>
                  <Link href={s.href} className="hover:text-menta">
                    {s.titulo}
                  </Link>
                </h3>
                <p className="t-servico mt-[5px] tab:mt-[var(--m2)]" style={{ "--m2": v(9) } as React.CSSProperties}>
                  {s.texto}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Nossas Especialidades */}
      <section
        className="degrade-base pb-[51px] pt-[31px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]"
        style={{ "--pt": v(86), "--pb": v(106), "--inicio": "74%", "--fim": "#245f53" } as React.CSSProperties}
      >
        <div className="caixa">
          <div className="tab:flex tab:items-end tab:justify-between">
            <div>
              <h2 className="t-h2">Nossas Especialidades</h2>
              <p className="t-lead mt-[9px] tab:mt-[var(--m)] tab:max-w-[var(--w)]" style={{ "--m": v(17), "--w": v(714) } as React.CSSProperties}>
                Do projeto à entrega, cada obra carrega a nossa assinatura a precisão de quem projeta com cuidado, constrói com técnica e
                entrega com orgulho.
              </p>
            </div>
            <div className="mt-[37px] flex justify-end tab:mb-[var(--mb)] tab:mt-0" style={{ "--mb": v(0) } as React.CSSProperties}>
              <BotaoSeta href={whatsappUrl("Olá! Gostaria de falar com um especialista da Concretiza.")} externo variante="cheio" largura={[175, 191]} escuro>
                Especialistas
              </BotaoSeta>
            </div>
          </div>
          <ul className="mt-[45px] grid gap-[25px] tab:-mx-[var(--mx)] tab:mt-[var(--mt)] tab:grid-cols-3 tab:gap-[var(--gap)]" style={{ "--mt": v(66), "--gap": v(25), "--mx": v(4) } as React.CSSProperties}>
            {ESPECIALIDADES.map((e) => (
              <li
                key={e.titulo}
                className="group relative overflow-hidden rounded-[20px] border border-white/0 bg-teal pb-[30px] tab:pb-[var(--pb)]"
                style={{ "--pb": v(56) } as React.CSSProperties}
              >
                <div className="relative aspect-[351/232] overflow-hidden rounded-t-[20px] tab:aspect-square">
                  <Foto nome={e.foto.nome} alt={e.foto.alt} fill sizes="(min-width: 751px) 29vw, 351px" className="object-cover" />
                </div>
                <h3 className="t-card-titulo mt-[21px] px-[20px] tab:mt-[var(--m)]" style={{ "--m": v(19) } as React.CSSProperties}>
                  <Link href={e.href} className="after:absolute after:inset-0 hover:text-lima">
                    {e.titulo}
                  </Link>
                </h3>
                <p className="t-card-texto mt-[12px] px-[20px] tab:mt-[var(--m2)]" style={{ "--m2": v(12) } as React.CSSProperties}>
                  {e.texto}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Vídeo institucional (trecho em loop, sem áudio, carregado só quando aparece na tela) */}
      <section
        className="degrade-base pb-[39px] pt-[39px] tab:pb-[var(--p)] tab:pt-[var(--p)]"
        style={{ "--p": v(101), "--inicio": "88%", "--fim": "#153b33" } as React.CSSProperties}
      >
        <div className="caixa">
          <div className="relative aspect-[351/288] overflow-hidden rounded-[12px] bg-black tab:aspect-[1296/540]">
            <VideoAoVer
              poster="equipe-em-obra"
              webm="/video/institucional-loop.webm"
              mp4="/video/institucional-loop.mp4"
              titulo="Trecho do vídeo institucional do Grupo Concretiza"
            />
          </div>
        </div>
      </section>

      {/* 6. Nossos Clientes */}
      <section id="clientes" className="scroll-mt-[20px] bg-black pb-[60px] pt-[17px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]" style={{ "--pt": v(64), "--pb": v(40) } as React.CSSProperties}>
        <div className="px-[25px] tab:px-[var(--px)]" style={{ "--px": v(92) } as React.CSSProperties}>
          <h2 className="t-h2">Nossos Clientes</h2>
          <p className="t-lead mt-[9px] tab:mt-[var(--m)]" style={{ "--m": v(17) } as React.CSSProperties}>
            Grandes marcas e histórias reais que confiam na Concretiza para construir o que importa.
          </p>
        </div>
        <ul className="mt-[24px] grid grid-cols-5 items-center gap-y-[14px] px-[16px] tab:mt-[var(--mt)] tab:gap-y-0 tab:px-[var(--px)]" style={{ "--mt": v(31), "--px": v(76) } as React.CSSProperties}>
          {CLIENTES.map((c) => (
            <li key={c.nome} className="flex h-[44px] items-center justify-center tab:h-[var(--lh)]" style={{ "--lh": v(130) } as React.CSSProperties}>
              <div className="w-[var(--wm)] tab:w-[var(--wd)]" style={{ "--wm": `${Math.round(c.w * 0.3)}px`, "--wd": v(c.w) } as React.CSSProperties}>
                <Foto nome={c.logo} alt={c.nome} largura={c.w} className="h-auto w-full object-contain" />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 7. Presença em todo o Brasil */}
      <section
        className="relative overflow-hidden bg-[linear-gradient(to_bottom,#0b2e27,#0f1208)] pb-[52px] pt-[28px] tab:pb-0 tab:pt-[var(--pt)]"
        style={{ "--pt": v(76) } as React.CSSProperties}
      >
        <div className="caixa relative tab:flex tab:h-[var(--h)] tab:justify-between" style={{ "--h": v(485) } as React.CSSProperties}>
          <div className="tab:mt-[var(--mt)] tab:max-w-[var(--w)] tab:pl-[var(--pl)] tab:pr-0" style={{ "--mt": v(96), "--w": v(770), "--pl": v(7) } as React.CSSProperties}>
            <h2 className="t-h2">Presença que constrói confiança em todo o Brasil</h2>
            <p className="t-lead mt-[9px] tab:mt-[var(--m)]" style={{ "--m": v(18) } as React.CSSProperties}>
              Obras realizadas em diversas cidades comprovam a solidez e a credibilidade da Concretiza.
            </p>
          </div>
          <div className="absolute right-[19px] top-[-26px] w-[115px] tab:static tab:mr-[var(--mr)] tab:w-[var(--w2)]" style={{ "--w2": v(423), "--mr": v(-2) } as React.CSSProperties}>
            <Foto nome="mapa-recorte" alt="Mapa do Brasil com marcações das cidades onde a Concretiza realizou obras" sizes="(min-width: 751px) 30vw, 115px" className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* 8. Instagram */}
      <section
        className="degrade-base pb-[40px] pt-[39px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]"
        style={{ "--pt": v(101), "--pb": v(60), "--inicio": "80%", "--fim": "#143931" } as React.CSSProperties}
      >
        <div className="caixa">
          <h2 className="t-h2">Conecte-se com a Concretiza</h2>
          <p className="t-lead mt-[9px] tab:mt-[var(--m)]" style={{ "--m": v(17) } as React.CSSProperties}>
            Siga nosso Instagram e acompanhe de perto cada etapa das nossas obras.
          </p>
          <div className="mt-[30px] tab:mt-[var(--mt)]" style={{ "--mt": v(40) } as React.CSSProperties}>
            <CarrosselInstagram />
          </div>
        </div>
      </section>

      {/* 9. Vamos Construir Juntos? (formulário) */}
      <section
        id="contato"
        className="scroll-mt-[20px] bg-[linear-gradient(to_bottom,#0b2e27_0%,#0c231a_37%,#0f1309_100%)] pb-[32px] pt-[31px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]"
        style={{ "--pt": v(87), "--pb": v(107) } as React.CSSProperties}
      >
        <div className="caixa">
          <div className="tab:flex tab:items-end tab:justify-between">
            <div>
              <h2 className="t-h2">Vamos Construir Juntos?</h2>
              <p className="t-lead mt-[9px] tab:mt-[var(--m)] tab:max-w-[var(--w)]" style={{ "--m": v(16), "--w": v(675) } as React.CSSProperties}>
                Conte-nos sobre o seu projeto e entraremos em contato para transformar a sua ideia em realidade.
              </p>
            </div>
            <div className="mt-[36px] tab:mb-[var(--mb)] tab:mt-0" style={{ "--mb": v(8) } as React.CSSProperties}>
              <BotaoSeta href={WHATSAPP_ORCAMENTO} externo variante="cheio" largura={[175, 191]} escuro>
                WhatsApp
              </BotaoSeta>
            </div>
          </div>
          <div className="mt-[46px] tab:mt-[var(--mt)]" style={{ "--mt": v(48) } as React.CSSProperties}>
            <FormContato />
          </div>
        </div>
      </section>
    </>
  );
}
