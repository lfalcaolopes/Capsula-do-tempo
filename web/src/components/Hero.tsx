import React from "react";
import Logo from "./../assets/logo.svg";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-[420px] space-y-5">
      <Image src={Logo} alt="Logo" />
      <div>
        <h1 className="text-[2.5rem] font-bold text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <button className="rounded-full bg-green-600 px-5 py-3 font-jamjuree text-sm text-gray-900">
        CADASTRAR LEMBRANÇA
      </button>
    </div>
  );
}

export default Hero;
