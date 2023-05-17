import { User2 } from "lucide-react";
import React from "react";

function User() {
  return (
    <a href="" className="flex items-center space-x-3 hover:text-gray-50">
      <div className="rounded-full bg-white/20 p-3">
        <User2 size={24} />
      </div>
      <p className="w-36 text-sm">
        <span className="underline ">Crie sua conta</span> e salve suas
        memórias!
      </p>
    </a>
  );
}

export default User;
