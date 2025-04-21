import {Calendar} from "@/components/ui/calendar.tsx";
import { Separator } from "@/components/ui/separator"
import {Evento, eventos} from "@/constants/vestibulares.ts";
import {useEffect, useState} from "react";
import {MainFooter} from "@/components/custom/mainFooter.tsx";

const Home = () => {

    const [eventosProximos, setEventosProximos] = useState<Array<Evento>>();

    useEffect(() => {
        const now = new Date();
        const eventosFiltrados = eventos
            .map((evento) => ({
                ...evento
            }))
            .filter((evento) => new Date(evento.data) >= now)
            .sort(((a:Evento, b:Evento) => new Date(a.data).getTime() - new Date(b.data).getTime()))
            .slice(0, 3);
        setEventosProximos(eventosFiltrados);
    }, []);

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
                      <section>
                          <h2 className="text-2xl font-bold mb-2">O que é o Grêmio Estudantil?</h2>
                          <hr className="border-green-500 border-2 w-1/6" />
                          <p className="text-lg leading-relaxed indent-4 my-2">
                              O Grêmio Estudantil é a organização que representa os interesses dos estudantes na escola.
                              Ele permite que os alunos discutam, criem e fortaleçam inúmeras possibilidades de ação
                              tanto no próprio ambiente escolar como na comunidade. O Grêmio é também um importante
                              espaço de aprendizagem, cidadania, convivência, responsabilidade e de luta por direitos.
                          </p>
                          <p className="text-lg leading-relaxed indent-4">
                              Por isso, é importante deixar claro que um de seus principais objetivos é contribuir
                              para aumentar a participação dos alunos nas atividades escolares, organização de
                              campeonatos, palestras, projetos e discussões, fazendo com que eles tenham voz ativa e
                              participem – junto com pais, funcionários, professores, coordenadores e diretores – da
                              programação e da construção das regras dentro da escola.
                          </p>
                      </section>

                      <div>
                          <h2 className="text-2xl font-bold mb-2">Participe!</h2>
                          <hr className="border-green-500 border-2 w-1/6"/>
                          <p className="text-lg indent-4 leading-relaxed my-2">
                              O Grêmio é feito por e para os estudantes. Sua participação é essencial para que nossas
                              ações tenham impacto real. Traga suas ideias, sugestões e venha construir com a gente uma
                              escola ainda melhor!
                          </p>
                      </div>
                  </div>
              </div>
              <aside className="flex flex-col gap-2 items-end pr-2 w-full hidden md:flex items-center">
                  <Calendar
                      mode="default"
                      className="border rounded-md shadow w-min"
                  />
                  <Separator className="my-2"/>
                  <section className="max-w-72">
                      <h1 className="font-semibold text-left self-start">Próximos eventos</h1>
                      <ul>
                          {eventosProximos && eventosProximos.map((evento, index) => (
                              <li key={index} className="ml-4">
                                  <h3 className="text-justify">
                                      <span style={{color: evento.color}}>• </span>
                                      {evento.nome}
                                  </h3>
                                  <span className="text-neutral-500 text-sm">{new Date(evento.data).toLocaleDateString("pt-BR")}</span>
                              </li>
                          ))}
                      </ul>
                  </section>
              </aside>
          </main>
          <MainFooter />
      </div>
  );
};

export default Home;
