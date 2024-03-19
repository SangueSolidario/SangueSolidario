import {
  Activity,
  ArrowRight,
  Github,
  Quote,
  UserRound,
  Video,
} from "lucide-react";
import Pacient from "@/assets/pacient.svg";
import Goncalo from "@/assets/goncalo.jpg";
import Joao from "@/assets/joao.jpg";
import Medic from "@/assets/medic.svg";
import Tiago from "@/assets/tiago.jpg";

import { NavBar } from "../components/navbar";

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
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                Explore
              </button>
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
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
              SangueSolidario
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Testemunhos
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <UserRound />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Teste #1
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Very good product, I recommend it to everyone. It's very
                  </p>
                  <a className="mt-3 text-red-500 inline-flex items-center">
                    Learn More
                    <ArrowRight size={20} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <UserRound />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Teste #2
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Very good product, I recommend it to everyone. It's very
                    good
                  </p>
                  <a className="mt-3 text-red-500 inline-flex items-center">
                    Learn More
                    <ArrowRight size={20} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <UserRound />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Teste #3
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Very good product, I recommend it to everyone. It's very
                    good
                  </p>
                  <a className="mt-3 text-red-500 inline-flex items-center">
                    Learn More
                    <ArrowRight size={20} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
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
                <Activity />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Raspberry PI
                </h2>
                <p className="leading-relaxed text-base">
                  Enhance pedestrian safety with Raspberry Pi. Detect crosswalks
                  using advanced algorithms, integrating seamlessly into IoT
                  solutions for real-time monitoring and urban mobility
                  improvements.
                </p>
                <a className="mt-3 text-red-500 inline-flex items-center">
                  Learn More
                  <ArrowRight size={20} className="ml-1" />
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5">
                <Video />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  160º Wide Angle Camera
                </h2>
                <p className="leading-relaxed text-base">
                  Experience enhanced perspectives with our 160º Wide Angle
                  Camera. Capture stunning vistas and dynamic scenes
                  effortlessly for unparalleled visual impact.
                </p>
                <a className="mt-3 text-red-500 inline-flex items-center">
                  Learn More
                  <ArrowRight size={20} className="ml-1" />
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5">
                <UserRound />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  GPS Module
                </h2>
                <p className="leading-relaxed text-base">
                  Seamlessly integrate into systems for accurate geolocation,
                  enhancing safety measures by facilitating prompt repairs and
                  maintenance.
                </p>
                <a className="mt-3 text-red-500 inline-flex items-center">
                  Learn More
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
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Introducing our dynamic team dedicated to innovation and
              excellence. With diverse expertise and a passion for
              problem-solving, we're committed to delivering cutting-edge
              solutions tailored to your needs.
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
      <section className="text-gray-700 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            title="IPCB"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av.%20Pedro%20Alvares%20Cabral%2012,%206000-084%20Castelo%20Branco+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Send us your feedback and help us improve our product.
            </p>
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mb-4"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-red-500 text-base px-4 py-2 mb-4 resize-none"
              placeholder="Message"
            ></textarea>
            <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Send
            </button>
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
        href="https://github.com/GoncalojmRosa/SangueSolidario"
        className="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border"
        target="_blank"
      >
        <Github />
      </a>
    </div>
  );
}
