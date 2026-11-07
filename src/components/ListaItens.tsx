// Lista de itens de serviço em grade, separada por linhas finas.
export function ListaItens({ itens, rotulo }: { itens: string[]; rotulo: string }) {
  return (
    <ul aria-label={rotulo} className="grid border-t border-linha sm:grid-cols-2 lg:grid-cols-3">
      {itens.map((item) => (
        <li key={item} className="flex items-center gap-4 border-b border-linha py-5 text-lg font-semibold sm:pr-6">
          <span aria-hidden className="h-px w-6 shrink-0 bg-marca" />
          {item}
        </li>
      ))}
    </ul>
  );
}
