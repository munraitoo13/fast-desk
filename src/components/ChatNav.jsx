import { IconX } from "@tabler/icons-react";

export default function Navbar() {
  const confirmExit = () => {
    if (window.confirm("Deseja realmente sair?")) {
      window.close();
    }
  };
  return (
    <nav>
      {/* navbar */}
      <div className="bg-white rounded-xl flex justify-between items-center p-5 drop-shadow-lg">
        {/* esquerda */}
        <div className="flex justify-center items-center gap-10">
          <div className="flex gap-3 items-center">
            <img
              src="/cliente.jpg"
              alt="Cliente"
              className="rounded-full h-8"
            />
            <span>John Doe</span>
          </div>
        </div>

        {/* direita */}
        <div className="flex items-center gap-3">
          <IconX
            className="cursor-pointer"
            onClick={() => {
              confirmExit();
            }}
            stroke={1.25}
          />
        </div>
      </div>
    </nav>
  );
}
