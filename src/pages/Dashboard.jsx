import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <main className="flex flex-col px-5 py-5 h-screen">
      <Navbar />

      <h2 className="font-bold py-5 text-center">Visão geral da plataforma</h2>

      {/* grids */}
      <div className="grid lg:grid-rows-3 gap-3 flex-grow pb-5 lg:pb-0">
        <div className="gap-3 grid lg:grid-cols-3">
          {/* chamados abertos */}
          <div className="bg-neutral-100 px-5 py-2 rounded-xl flex flex-col items-center border-r-4 border-red-500">
            <a href="/atendimentos" className="text-sm opacity-25 text-center">
              Chamados recentemente abertos (24h)
            </a>

            <h3 className="font-black text-5xl text-red-600 pb-10">12</h3>

            <ul className="text-center">
              <li>Dados financeiros não atualizam</li>
              <li>Erro 404 ao entrar no aplicativo</li>

              <li>...</li>
            </ul>
          </div>

          {/* Chamados em resolução */}
          <div className="bg-neutral-100 px-5 py-2 rounded-xl flex flex-col items-center border-r-4 border-yellow-500">
            <a href="/atendimentos" className="text-sm opacity-25 text-center">
              Chamados em resolução (24h)
            </a>

            <h3 className="font-black text-5xl text-yellow-600 pb-10">7</h3>

            <ul className="text-center">
              <li>Cor do saldo financeiro errada</li>
              <li>Notificações repetidas</li>

              <li>...</li>
            </ul>
          </div>

          {/* Chamados resolvidos */}
          <div className="bg-neutral-100 px-5 py-2 rounded-xl flex flex-col items-center border-r-4 border-green-500">
            <a href="/atendimentos" className="text-sm opacity-25 text-center">
              Últimos chamados resolvidos (24h)
            </a>

            <h3 className="font-black text-5xl text-green-600 pb-10">33</h3>

            <ul className="text-center">
              <li>Nome incorreto no saldo bancário</li>
              <li>Extrato por data não funciona</li>
              <li>...</li>
            </ul>
          </div>
        </div>

        <div className="grid row-span-2 gap-3 lg:grid-cols-2">
          {/* atendimento humano */}
          <div className="bg-neutral-100 px-5 py-2 rounded-xl flex flex-col items-center border-r-4 border-blue-500">
            <a href="/atendimentos" className="text-sm opacity-25 text-center">
              Atendimento humano pendente
            </a>

            <h3 className="font-black text-5xl text-blue-600 pb-10">2</h3>

            <ul className="text-center w-full">
              <li>Erro ao acessar o aplicativo</li>
              <li>Problema na atualização de dados</li>
              <li>...</li>
            </ul>

            <div className="py-10">
              <p
                href="/atendimentos"
                className="text-sm opacity-25 text-center"
              >
                Problema mais comum (1h)
              </p>

              <p className="text-center">Erro ao acessar o aplicativo</p>
            </div>
          </div>

          {/* atendimento profissional */}
          <div className="bg-neutral-100 px-5 py-2 rounded-xl flex flex-col items-center border-r-4 border-blue-500">
            <a href="/atendimentos" className="text-sm opacity-25 text-center">
              Atendimento profissional pendente
            </a>

            <h3 className="font-black text-5xl text-blue-600 pb-10">1</h3>

            <ul className="text-center w-full">
              <li>Canais de atendimento congestionados</li>
              <li>...</li>
            </ul>

            <div className="py-10">
              <p
                href="/atendimentos"
                className="text-sm opacity-25 text-center"
              >
                Problema mais comum (1h)
              </p>

              <p className="text-center">
                Canais de atendimento congestionados
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
