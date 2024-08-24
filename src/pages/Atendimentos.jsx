import Navbar from "../components/Navbar";
import { IconMessageFilled } from "@tabler/icons-react";

const atendimentosProfissionais = [
  {
    id: 1,
    titulo: "Dados financeiros não atualizam",
    descricao: "Os dados financeiros não atualizam mais no aplicativo.",
    categoria: "Financeiro",
    prioridade: "Media prioridade",
  },
  {
    id: 2,
    titulo: "Cobrança indevida",
    descricao: "Estou sendo cobrado indevidamente.",
    categoria: "Financeiro",
    prioridade: "Alta prioridade",
  },
  {
    id: 3,
    titulo: "Cor do saldo financeiro errada",
    descricao: "A cor do saldo financeiro está errada.",
    categoria: "Aplicativo",
    prioridade: "Baixa prioridade",
  },
];

const atendimentosHumanos = [
  {
    id: 5,
    titulo: "Erro 404 ao entrar no site",
    descricao: "Ao tentar entrar no aplicativo, aparece um erro 404.",
    categoria: "Website",
    prioridade: "Alta prioridade",
  },
  {
    id: 7,
    titulo: "Notificações repetidas",
    descricao: "As notificações estão sendo repetidas.",
    categoria: "Aplicativo",
    prioridade: "Baixa prioridade",
  },
];

export default function Atendimentos() {
  function getPrioridade(prioridade) {
    switch (prioridade) {
      case "Alta prioridade":
        return "bg-red-600/10 text-red-600";
      case "Media prioridade":
        return "bg-yellow-600/10 text-yellow-600";
      case "Baixa prioridade":
        return "bg-green-600/10 text-green-600";
      default:
        return "bg-gray-600/10 text-gray-600";
    }
  }

  return (
    <div className="flex flex-col px-5 py-5 h-screen">
      <Navbar />

      <main className="flex flex-col flex-grow">
        <h2 className="font-bold py-5 text-center">Atendimentos pendentes</h2>

        {/* grids */}
        <div className="grid lg:grid-cols-2 gap-5 flex-grow pb-5 lg:pb-0">
          {/* geral */}
          <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col items-center gap-5">
            <span className="text-sm opacity-25">
              Aguardando atendimento geral
            </span>

            <ul className="flex flex-col gap-3 w-full">
              {atendimentosHumanos.map((atendimento) => (
                <li
                  key={atendimento.id}
                  className="p-5 bg-neutral-100 rounded-xl flex justify-between items-center"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-5">
                      <div>
                        <h3 className="font-bold text-lg">
                          {atendimento.titulo}
                        </h3>
                        <p className="text-sm">{atendimento.descricao}</p>
                      </div>

                      <div className="flex items-center gap-5">
                        <p
                          className={`text-xs ${getPrioridade(
                            atendimento.prioridade
                          )} rounded-full px-3 py-1`}
                        >
                          {atendimento.prioridade}
                        </p>
                        <p className="text-xs">{atendimento.categoria}</p>
                      </div>
                    </div>

                    <a
                      href="/chat"
                      target="_blank"
                      className="hover:opacity-75"
                    >
                      <IconMessageFilled stroke={1.25} />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* especialista */}
          <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col items-center gap-5">
            <span className="text-sm opacity-25">
              Aguardando atendimento profissional
            </span>

            <ul className="flex flex-col gap-3 w-full">
              {atendimentosProfissionais.map((atendimento) => (
                <li
                  key={atendimento.id}
                  className="p-5 bg-neutral-100 rounded-xl flex justify-between items-center"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-5">
                      <div>
                        <h3 className="font-bold text-lg">
                          {atendimento.titulo}
                        </h3>
                        <p className="text-sm">{atendimento.descricao}</p>
                      </div>

                      <div className="flex items-center gap-5">
                        <p
                          className={`text-xs ${getPrioridade(
                            atendimento.prioridade
                          )} rounded-full px-3 py-1`}
                        >
                          {atendimento.prioridade}
                        </p>
                        <p className="text-xs">{atendimento.categoria}</p>
                      </div>
                    </div>

                    <a
                      href="/chat"
                      target="_blank"
                      className="hover:opacity-75"
                    >
                      <IconMessageFilled stroke={1.25} />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
