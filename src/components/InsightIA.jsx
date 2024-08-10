import { IconAi } from "@tabler/icons-react";

export default function InsightIA({ mensagem }) {
  return (
    <div className="bg-neutral-100 rounded-xl p-5 flex flex-col items-center gap-1">
      <IconAi size={36} stroke={1.25} />
      <p className="text-center">{mensagem}</p>
    </div>
  );
}
