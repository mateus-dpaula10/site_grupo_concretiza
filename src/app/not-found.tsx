import type { Metadata } from "next";
import { BotaoSeta } from "@/components/BotaoSeta";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NaoEncontrada() {
  return (
    <section className="caixa py-[96px]">
      <p className="text-[16px] text-menta">Erro 404</p>
      <h1 className="t-h2 mt-[12px] max-w-[800px]">Esta página não existe ou mudou de endereço.</h1>
      <p className="t-lead mt-[16px]">O site foi reorganizado. Use o menu acima ou volte para a página inicial.</p>
      <div className="mt-[32px]">
        <BotaoSeta href="/" variante="cheio" largura={[185, 210]}>
          Página inicial
        </BotaoSeta>
      </div>
    </section>
  );
}
