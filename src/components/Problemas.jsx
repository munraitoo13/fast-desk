import {
  IconBulbFilled,
  IconTrashFilled,
  IconPencil,
} from "@tabler/icons-react";

export default function Problemas({
  nomeProblema,
  statusProblema,
  bgColor,
  textColor,
}) {
  return (
    <div className="flex w-full justify-between bg-neutral-100 p-5 rounded-xl">
      <div className="flex gap-3">
        <IconBulbFilled />
        <span>{nomeProblema}</span>
      </div>

      <div className="flex gap-10">
        <span>
          <span
            className={`${bgColor} ${textColor} px-2 py-1 rounded-xl font-medium`}
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
