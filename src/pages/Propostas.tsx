import { propostas } from "@/content/propostas.ts";
import { Card, CardHeader } from "@/components/ui/card.tsx";

const Propostas = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-center text-3xl font-bold my-4">Propostas</h1>
      <hr className="mb-4 w-1/2 self-center" />
      <main className="w-full flex flex-col space-y-4 my-4">
        {Object.entries(propostas).map(
          ([categoria, { lista, icon: IconComponent }], idx) => (
            <section
              className="flex items-center flex-col"
              key={idx}
            >
              <Card className="p-4 w-[95%] max-w-2xl mx-4">
                <CardHeader className="p-0 flex flex-row items-center gap-2 mb-2">
                  <div className="flex items-center flex-row gap-2">
                    <IconComponent
                      className="text-green-500"
                      size={24}
                    />
                    <h2 className="text-xl font-bold text-green-500">
                      {categoria}
                    </h2>
                  </div>
                </CardHeader>
                <ul className="ml-4 list-disc list-inside space-y-1">
                  {lista.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card>
            </section>
          )
        )}
      </main>
      <hr className="mb-4 w-1/2 self-center" />
      <span className="text-center text-neutral-500 mb-4">
        (*) Proposta em análise
      </span>
    </div>
  );
};

export default Propostas;
