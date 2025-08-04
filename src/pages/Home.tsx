import CalendarWidget from "@/components/custom/calendarWidget.tsx";
import FooterRights from "@/components/custom/footerRights";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BusIcon, InfoIcon } from "lucide-react";

const Home = () => {
  return (
    <div className="items-center justify-center w-full flex flex-col">
      <h1 className="font-bold text-3xl mt-4 text-center text-green-600">
        Control Z
      </h1>
      <h2 className="font-medium text-l mb-4 text-center">
        Grêmio Estudantil - Etec MAM
      </h2>
      <main className="grid grid-cols-[1fr_auto] w-full mt-4 max-w-screen-xl mb-8">
        <div className="flex flex-col gap-2 items-center w-full">
          <div className="main-banner w-4/5 rounded-xl">
            <span></span>
          </div>
          <div className="w-4/5 mt-6 flex flex-col gap-8 text-justify">
            <Alert>
              <BusIcon className="h-4 w-4" />
              <AlertTitle>Visita à Unesp</AlertTitle>
              <AlertDescription>
                Os documentos necessários para inscrição na visita monitorada à Unesp Marília podem ser encontrados  <a href="/links" className="text-green-500 font-semibold underline">neste link</a>
              </AlertDescription>
            </Alert>
            <section>
              <h2 className="text-2xl font-bold mb-2">
                O que é o Grêmio Estudantil?
              </h2>
              <hr className="border-green-500 border-2 w-1/6" />
              <p className="text-lg leading-relaxed indent-4 my-2">
                O Grêmio Estudantil é a organização que representa os interesses
                dos estudantes na escola. Ele permite que os alunos discutam,
                criem e fortaleçam inúmeras possibilidades de ação tanto no
                próprio ambiente escolar como na comunidade. O Grêmio é também
                um importante espaço de aprendizagem, cidadania, convivência,
                responsabilidade e de luta por direitos.
              </p>
              <p className="text-lg leading-relaxed indent-4">
                Por isso, é importante deixar claro que um de seus principais
                objetivos é contribuir para aumentar a participação dos alunos
                nas atividades escolares, organização de campeonatos, palestras,
                projetos e discussões, fazendo com que eles tenham voz ativa e
                participem – junto com pais, funcionários, professores,
                coordenadores e diretores – da programação e da construção das
                regras dentro da escola.
              </p>
            </section>

            <div>
              <h2 className="text-2xl font-bold mb-2">Participe!</h2>
              <hr className="border-green-500 border-2 w-1/6" />
              <p className="text-lg indent-4 leading-relaxed my-2">
                O Grêmio é feito por e para os estudantes. Sua participação é
                essencial para que nossas ações tenham impacto real. Traga suas
                ideias, sugestões e venha construir com a gente uma escola ainda
                melhor!
              </p>
            </div>
          </div>
        </div>
        <aside className="flex-col gap-2 pr-2 w-full hidden md:flex items-center">
          <CalendarWidget />
        </aside>
      </main>
      <FooterRights />
    </div>
  );
};

export default Home;
