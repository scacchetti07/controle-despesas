import React from "react";
import Link from "./Link";
import { UserRound } from "lucide-react";
import Hero from "./Hero";

function Header() {
  return (
    <Hero>
      <header className="flex justify-between bg-slate-800/60 text-white w-full h-15 px-4">
        <img src="../src/assets/money.png" className="p-1"/>
        <nav className="flex items-center font-bold gap-10 text-[18px]">
          <Link path="/">Home</Link>
          <Link path="/teste">Investidor</Link>
          <Link path="/contato">Contato</Link>
          <Link path="/sobre">Sobre</Link>
        </nav>
        <button className="flex gap-2 border-2 border-white px-5 py-1.5 rounded-2xl hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer my-auto font-bold text-[18px]">
            <UserRound />
            Login
        </button>
      </header>
    </Hero>
  );
}

export default Header;
