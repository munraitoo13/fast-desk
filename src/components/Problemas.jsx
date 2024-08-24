import { IconBulbFilled, IconTrash, IconPencil } from "@tabler/icons-react";

export default function Problemas({
  nomeProblema,
  statusProblema,
  categoriaProblema,
}) {
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
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between flex-grow w-full items-center bg-neutral-100 p-5 rounded-xl gap-5">
      <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 items-center justify-center">
        <IconBulbFilled stroke={1.25} />
        <span>{nomeProblema}</span>
        <span className="opacity-25">{categoriaProblema}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
        <span
          className={`${getStatus(
            statusProblema
          )} px-2 py-1 rounded-xl font-medium`}
        >
          {statusProblema}
        </span>

        <div className="flex gap-3">
          <IconTrash stroke={1.25} className="cursor-pointer" />
          <IconPencil stroke={1.25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
