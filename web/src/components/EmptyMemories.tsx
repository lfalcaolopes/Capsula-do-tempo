import React from "react";

function EmptyMemories() {
  return (
    <p className="w-[360px] text-center leading-relaxed">
      Você ainda não registrou nenhuma lembrança, Comece a{" "}
      <a href="" className="underline hover:text-gray-50">
        criar agora
      </a>
      !
    </p>
  );
}

export default EmptyMemories;
