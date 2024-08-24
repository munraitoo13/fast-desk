import Navbar from "../components/Navbar";
import Problemas from "../components/Problemas";

const problemas = [
  {
    id: 1,
    nomeProblema: "Dados financeiros não atualizam",
    statusProblema: "Pendente",
  },
  {
    id: 2,
    nomeProblema: "Cobrança indevida",
    statusProblema: "Em resolução",
  },
  {
    id: 3,
    nomeProblema: "Cor do saldo financeiro errada",
    statusProblema: "Resolvido",
  },
  {
    id: 4,
    nomeProblema: "Erro 404 ao entrar no site",
    statusProblema: "Pendente",
  },
  {
    id: 5,
    nomeProblema: "Notificações repetidas",
    statusProblema: "Em resolução",
  },
];

export default function Logs() {
  return (
    <div className="flex flex-col px-5 py-5 h-screen">
      <Navbar />

      <main className="flex flex-col flex-grow">
        <h2 className="font-bold py-5 text-center">Todos os chamados</h2>

        {/* grids */}
        <div className="flex flex-col bg-white rounded-xl shadow-sm flex-grow p-5 items-center gap-10">
          <input
            type="search"
            name="searchAtendimentos"
            id="searchAtendimentos"
            className="w-1/3 px-5 py-3 bg-neutral-100 rounded-xl text-center"
            placeholder="Pesquisar problemas..."
          />

          <div className="w-full flex flex-col gap-3">
            {problemas.map((problema) => {
              return (
                <Problemas
                  key={problema.id}
                  nomeProblema={problema.nomeProblema}
                  statusProblema={problema.statusProblema}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
