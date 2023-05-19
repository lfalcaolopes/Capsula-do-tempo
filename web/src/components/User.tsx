import Image from "next/image";
import { getUser } from "@/lib/auth";
import React from "react";

function User() {
  const { name, avatarUrl } = getUser();

  return (
    <div className="flex items-center space-x-3">
      <Image
        src={avatarUrl}
        width={48}
        height={48}
        alt=""
        className="rounded-full"
      />
      <div className="flex flex-col">
        <p className="w-36 text-sm">{name}</p>
        <a href="" className="w-36 text-sm text-red-500 hover:text-red-400">
          Sair
        </a>
      </div>
    </div>
  );
}

export default User;
