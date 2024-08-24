import { IconUserFilled } from "@tabler/icons-react";

const atendimentos = [
  {
    cliente: "John Doe",
    problema: "Problema com a internet",
    status: "Pendente",
    responsavel: "Aguardando",
    horario: "10:30",
  },
  {
    cliente: "Bruna",
    problema: "Problema com o aplicativo",
    status: "Resolvido",
    responsavel: "Bruno",
    horario: "10:24",
  },
  {
    cliente: "Hermano",
    problema: "Problema judiciário",
    status: "Em resolução",
    responsavel: "Bruno",
    horario: "10:02",
  },
];

export default function DashboardCardAtend() {
  function getStatus(status) {
    switch (status) {
      case "Pendente":
        return "bg-red-600/10 text-red-600";
      case "Em resolução":
        return "bg-yellow-600/10 text-yellow-600";
      case "Resolvido":
        return "bg-green-600/10 text-green-600";
      default:
        return "bg-gray-600/10 text-gray-600";
    }
  }

  return (
    <div className="bg-white p-5 rounded-xl flex flex-col shadow-sm gap-10">
      <div className="flex justify-between flex-col items-center gap-3">
        <h3 className="font-bold text-xl">Atendimentos recentes</h3>

        <input
          className="bg-neutral-100 rounded-xl w-1/3 p-3 text-center"
          type="search"
          name="searchAtend"
          id="searchAtend"
          placeholder="Buscar atendimento"
        />
      </div>

      {/* tabela com atendimentos */}
      <table className="">
        <thead>
          <tr className="text-left">
            <th>Cliente</th>
            <th>Problema</th>
            <th>Status</th>
            <th>Responsável</th>
            <th>Horário</th>
          </tr>
        </thead>

        <tbody>
          {atendimentos.map((atendimento, index) => {
            return (
              <tr key={index} className="odd:bg-neutral-100 ">
                <td className="font-medium flex items-center gap-1 p-5">
                  <IconUserFilled stroke={1.25} />
                  {atendimento.cliente}
                </td>
                <td>{atendimento.problema}</td>
                <td>
                  <span
                    className={`${getStatus(
                      atendimento.status
                    )} px-2 py-1 rounded-xl font-medium`}
                  >
                    {atendimento.status}
                  </span>
                </td>
                <td>{atendimento.responsavel}</td>
                <td>{atendimento.horario}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
