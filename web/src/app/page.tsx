import Blur from "@/components/Blur";
import Hero from "@/components/Hero";
import Ruler from "@/components/Ruler";
import User from "@/components/User";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-2 ">
      <div className="relative overflow-hidden border-r-2 border-white/10 bg-[url('./../assets/stars.svg')] bg-cover">
        <Blur />
        <Ruler />

        <div className="flex h-screen flex-col justify-between px-28 py-16">
          <User />
          <Hero />
          <p>Feito por Lucas Falcão Lopes</p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[url('./../assets/stars.svg')] bg-cover">
        <p className="w-[360px] text-center leading-relaxed">
          Você ainda não registrou nenhuma lembrança, Comece a{" "}
          <a href="" className="underline hover:text-gray-50">
            criar agora
          </a>
          !
        </p>
      </div>
    </div>
  );
}
