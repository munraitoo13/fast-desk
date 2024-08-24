import {
  IconBulbFilled,
  IconTrashFilled,
  IconPencil,
} from "@tabler/icons-react";

export default function Problemas({ nomeProblema, statusProblema }) {
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
    <div className="flex w-full justify-between bg-neutral-100 p-5 rounded-xl">
      <div className="flex gap-3">
        <IconBulbFilled />
        <span>{nomeProblema}</span>
      </div>

      <div className="flex gap-10">
        <span>
          <span
            className={`${getStatus(
              statusProblema
            )} px-2 py-1 rounded-xl font-medium`}
          >
            {statusProblema}
          </span>
        </span>

        <div className="flex gap-3">
          <IconTrashFilled className="cursor-pointer" />
          <IconPencil className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
