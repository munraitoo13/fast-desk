import { IconMenu2, IconMenu3 } from "@tabler/icons-react";
import { useState } from "react";

const routes = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Atendimentos", path: "/atendimentos" },
  { name: "Logs", path: "/logs" },
  { name: "Sair", path: "/signin" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* navbar */}
      <div className="bg-white rounded-xl flex justify-between items-center px-5 py-2 drop-shadow-lg">
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
        <div className="max-w-screen-xl relative">
          <div className="bg-white rounded-xl gap-5 mt-5 flex flex-col py-10 absolute  right-0 left-0 z-10 shadow-lg mx-auto px-20">
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

            {/* rotas */}
            <div className="flex flex-col items-center gap-3">
              {routes.map((route) => (
                <a
                  key={route.path}
                  href={route.path}
                  className="hover:font-medium"
                >
                  {route.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
