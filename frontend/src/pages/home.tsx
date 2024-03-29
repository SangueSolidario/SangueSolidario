import { ArrowRight, Github, Quote } from "lucide-react";
import Pacient from "@/assets/pacient.svg";
import Goncalo from "@/assets/goncalo.jpg";
import Joao from "@/assets/joao.jpg";
import Medic from "@/assets/medic.svg";
import Tiago from "@/assets/tiago.jpg";
import salvar from "@/assets/salvarVidas.png";
import paz from "@/assets/pazEspirito.png";
import help from "@/assets/help.png";

import { NavBar } from "../components/navbar";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <NavBar />
      <section className="text-gray-700 body-font h-[90vh] flex justify-center">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Potenciar os esforços de dádiva{" "}
              <br className="hidden lg:inline-block" />
              de sangue através da tecnologia
            </h1>
            <p className="mb-8 leading-relaxed">
              Descubra o potencial revolucionário do Sangue Solidário, a nossa
              inovadora aplicação web concebida para agilizar os processos de
              dádiva de sangue e aumentar o envolvimento da comunidade.
              Simplifique a experiência da dádiva de sangue, tornando mais fácil
              do que nunca para salvar vidas.
            </p>
            <div className="flex justify-center">
              <Link
                to="/campanhas"
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                Explore
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Medic}
            />
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <Quote className="inline-block w-8 h-8 text-gray-400 mb-8" />
            <p className="leading-relaxed text-lg">
              Where creativity meets technology, and innovation knows no bounds.
              Welcome to our digital universe, where every click sparks
              imagination and every scroll unveils possibility.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-red-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              TEAM QUOTE
            </h2>
            <p className="text-gray-500">Team</p>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex flex-wrap justify-center items-center">
            <img alt="feature" className="object-cover" src={Pacient} />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5">
                <img
                  src={salvar}
                  alt="Salvar vidas"
                  className="w-full h-full"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Vem salvar vidas connosco!
                </h2>
                <p className="leading-relaxed text-base">
                  A doação de sangue é um ato de solidariedade que pode salvar
                  vidas em situações de emergência e melhorar a qualidade de
                  vida de muitas pessoas. Através da doação de sangue, é
                  possível ajudar pessoas que necessitam como vítimas de
                  acidentes, pacientes com doenças graves, pessoas submetidas a
                  cirurgias e recém-nascidos.
                </p>
                <a className="mt-3 text-red-500 inline-flex items-center">
                  Mais
                  <ArrowRight size={20} className="ml-1" />
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5">
                <img
                  src={paz}
                  alt="Paz de espírito"
                  className="w-full h-full"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Encontra a tua paz de espírito!
                </h2>
                <p className="leading-relaxed text-base">
                  Os nossos doadores comprovam que após a doação de sangue,
                  sentem-se mais felizes e com uma sensação de bem-estar
                  interior e conexão com os outros.
                </p>
                <a className="mt-3 text-red-500 inline-flex items-center">
                  Mais
                  <ArrowRight size={20} className="ml-1" />
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5">
                <img src={help} alt="Ajuda" className="w-full h-full" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Ajuda a comunidade enquanto te ajudas a ti mesmo!
                </h2>
                <p className="leading-relaxed text-base">
                  Estudos comprovam que a doação de sangue pode ajudar a reduzir
                  o risco de doenças cardíacas, para além disso promove a
                  produção de células sanguíneas bem como a redução do risco de
                  cancro.
                </p>
                <a className="mt-3 text-red-500 inline-flex items-center">
                  Mais
                  <ArrowRight size={20} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"></h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Apresentamos a nossa equipa dinâmica dedicada à inovação e à
              excelência. Com uma experiência diversificada e uma paixão pela
              resolução de problemas, estamos empenhados em fornecer soluções de
              ponta adaptadas às suas necessidades.
            </p>
          </div>
          <div className="flex flex-wrap justify-center -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={Goncalo}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Gonçalo Rosa
                  </h2>
                  <p className="text-gray-500">Full-Stack Developer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={Joao}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    João Louro
                  </h2>
                  <p className="text-gray-500">Software Developer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={Tiago}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Tiago Martins
                  </h2>
                  <p className="text-gray-500">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-gray-700 body-font">
        <div className="bg-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 SangueSolidario
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              Made with ❤️ by Gonçalo, João and Tiago
            </span>
          </div>
        </div>
      </footer>
      <a
        href="https://github.com/SangueSolidario/SangueSolidario"
        className="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border"
        target="_blank"
      >
        <Github />
      </a>
    </div>
  );
}
