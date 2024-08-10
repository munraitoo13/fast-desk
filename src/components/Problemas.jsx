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
    <div>
      <div>
        <IconBulbFilled />
        <span>{nomeProblema}</span>
      </div>

      <div>
        <span>
          <b>Status</b>:{" "}
          <span
            lassName={`${bgColor} ${textColor} px-2 py-1 rounded-xl font-medium`}
          >
            {statusProblema}
          </span>
        </span>

        <div>
          <IconTrashFilled className="cursor-pointer" />
          <IconPencil className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
