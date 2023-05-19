import Blur from "@/components/Blur";
import EmptyMemories from "@/components/EmptyMemories";
import Hero from "@/components/Hero";
import Ruler from "@/components/Ruler";
import SingIn from "@/components/SingIn";
import User from "@/components/User";
import { cookies } from "next/headers";

export default function Home() {
  const isAuthenticated = cookies().has("token");

  return (
    <div className="grid min-h-screen grid-cols-2 ">
      <div className="relative overflow-hidden border-r-2 border-white/10 bg-[url('./../assets/stars.svg')] bg-cover">
        <Blur />
        <Ruler />

        <div className="flex h-screen flex-col justify-between px-28 py-16">
          {isAuthenticated ? <User /> : <SingIn />}
          <Hero />
          <p>Feito por Lucas Falcão Lopes</p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[url('./../assets/stars.svg')] bg-cover">
        <EmptyMemories />
      </div>
    </div>
  );
}
