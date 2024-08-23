import Navbar from "../components/Navbar";
import { IconMessageFilled } from "@tabler/icons-react";

const atendimentosProfissionais = [
  {
    id: 1,
    titulo: "Dados financeiros não atualizam",
    descricao: "Os dados financeiros não atualizam mais no aplicativo.",
    categoria: "Financeiro",
  },
  {
    id: 2,
    titulo: "Cobrança indevida",
    descricao: "Ao tentar entrar no aplicativo, aparece um erro 404.",
    categoria: "Financeiro",
  },
  {
    id: 3,
    titulo: "Cor do saldo financeiro errada",
    descricao: "A cor do saldo financeiro está errada.",
    categoria: "Aplicativo",
  },
];

const atendimentosHumanos = [
  {
    id: 5,
    titulo: "Erro 404 ao entrar no site",
    descricao: "Ao tentar entrar no aplicativo, aparece um erro 404.",
    categoria: "Website",
  },
  {
    id: 7,
    titulo: "Notificações repetidas",
    descricao: "As notificações estão sendo repetidas.",
    categoria: "Aplicativo",
  },
];

export default function Atendimentos() {
  return (
    <div className="flex flex-col px-5 py-5 h-screen">
      <Navbar />

      <main className="flex flex-col flex-grow">
        <h2 className="font-bold py-5 text-center">Atendimentos pendentes</h2>

        {/* grids */}
        <div className="grid lg:grid-cols-2 gap-5 flex-grow pb-5 lg:pb-0">
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <span href="/atendimentos" className="text-sm opacity-25">
              Aguardando atendimento geral
            </span>

            <ul className="">
              {atendimentosHumanos.map((atendimento) => (
                <li
                  key={atendimento.id}
                  className="py-2 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold text-lg">{atendimento.titulo}</h3>
                    <p className="text-sm">{atendimento.descricao}</p>
                    <p className="text-xs">{atendimento.categoria}</p>
                  </div>

                  <a href="/chat" target="_blank" className="hover:opacity-75">
                    <IconMessageFilled />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-10 shadow-sm">
            <span href="/atendimentos" className="text-sm opacity-25">
              Aguardando atendimento profissional
            </span>

            <ul className="">
              {atendimentosProfissionais.map((atendimento) => (
                <li
                  key={atendimento.id}
                  className="py-2 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold text-lg">{atendimento.titulo}</h3>
                    <p className="text-sm">{atendimento.descricao}</p>
                    <p className="text-xs">{atendimento.categoria}</p>
                  </div>

                  <a href="/chat" target="_blank" className="hover:opacity-75">
                    <IconMessageFilled />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
