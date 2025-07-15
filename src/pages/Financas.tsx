const Financas = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-center text-3xl font-bold my-4">Finanças</h1>
      <hr className="mb-4 w-1/2 self-center" />
      <p className="text-neutral-600">No momento, não há nada por aqui.</p>
        {
            //TODO: implementar renderização dos dados de @src/content/financas.ts
            // Indico utilizar o componente Table, documentado em https://ui.shadcn.com/docs/components/table
        }
    </div>
  );
};

export default Financas;
