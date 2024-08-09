import { IconMenu2, IconMenu3 } from "@tabler/icons-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* navbar */}
      <div className="bg-neutral-100 rounded-xl flex justify-between items-center px-5 py-2">
        {/* esquerda */}
        <div className="flex justify-center items-center gap-10">
          {/* logo */}
          <img
            className="w-16 object-contain"
            src="/logo.png"
            alt="FastDesk logo"
          />

          <span className="hover:text-green-600">
            <b>Servidores</b>: Estáveis
          </span>
        </div>

        {/* direita */}
        {menuOpen ? (
          <IconMenu3
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          />
        ) : (
          <IconMenu2
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer"
          />
        )}
      </div>

      {/* menu */}
      {menuOpen && (
        <div className="bg-neutral-100 rounded-xl gap-5 mt-5 mx-5 flex flex-col items-center py-10 absolute left-0 right-0 z-50 shadow-md">
          {/* funcionário */}
          <div className="flex flex-col justify-center items-center gap-1">
            {/* perfil */}
            <img
              className="rounded-full w-16 object-contain"
              src="/perfil.png"
              alt="Foto de perfil"
            />

            {/* texto */}
            <span className="flex flex-col gap items-center">
              <span className="font-bold">Bruno Marinho de Souza</span>
              <small className="text-red-600">Engenheiro</small>
            </span>
          </div>

          <a href="/" className="cursor-pointer ">
            Home
          </a>

          <a href="/dashboard" className="cursor-pointer">
            Dashboard
          </a>

          <a href="/atendimentos" className="cursor-pointer">
            Atendimentos
          </a>

          <a href="/signin" className="cursor-pointer">
            Sair
          </a>
        </div>
      )}
    </nav>
  );
}
