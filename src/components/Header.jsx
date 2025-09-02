import React from "react";
import Link from "./Link";

function Header() {
  return (
    <header className="flex space-x-1 bg-gray-800 text-white w-full h-13 p-4">
      <nav className="flex gap-5 font-bold">
        <Link path="/">Home</Link>
        <Link path="/teste">Teste investidor</Link>
        <Link path="/contato">Contato</Link>
        <Link path="/sobre">Conheça-nos</Link>
        <Link path="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
