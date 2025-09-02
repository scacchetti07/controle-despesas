import React from "react";
import Link from "./Link";
import { UserRound } from "lucide-react";

function Header() {
  return (
    <header className="bg-gray-800 text-white w-full h-15">
      <nav className="flex items-center justify-between font-bold mx-3 py-2">
        <div className="space-x-6">
          <Link path="/">Home</Link>
          <Link path="/teste">Teste investidor</Link>
          <Link path="/contato">Contato</Link>
          <Link path="/sobre">Sobre</Link>
        </div>
        <button className="flex gap-1.5 border-2 border-white p-2 rounded-2xl px-4 py-2 hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer">
          <UserRound />
          LOGIN
        </button>
      </nav>
    </header>
  );
}

export default Header;
