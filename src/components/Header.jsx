import React from "react";
import Link from "./Link";
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router";

function Header({ bg_color = "bg-slate-800/60" }) {
  const style = `flex justify-between ${bg_color} text-white w-full h-15 px-4`;
  const navigate = useNavigate()
  return (
    <header className={style}>
      <img src="/money.png" className="p-1" />
      <nav className="flex items-center font-bold gap-10 text-[18px]">
        <Link path="/">Home</Link>
        <Link path="/teste">Investidor</Link>
        <Link path="/contato">Contato</Link>
        <Link path="/sobre">Sobre</Link>
      </nav>
      <button className="flex gap-2 border-2 border-white px-5 py-1.5 rounded-2xl hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer my-auto font-bold text-[18px]" onClick={() => navigate("/profile")}>
        <UserRound />
        Login
      </button>
    </header>
  );
}

export default Header;
