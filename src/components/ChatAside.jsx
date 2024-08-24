import { IconChevronRight } from "@tabler/icons-react";
import InsightIA from "./InsightIA";
import logo from "../assets/images/logo.png";

export default function ChatAside() {
  return (
    <aside className="bg-white rounded-xl p-5 h-full flex flex-col items-center lg:max-w-sm gap-10 max-h-full shadow-sm">
      <div className="gap-5 flex flex-col justify-center items-center">
        <img src={logo} alt="FastDesk logo" className="w-16" />

        <div>
          <h3 className="font-medium text-center">Olá, Bruno</h3>
          <p className="text-center">Aqui estão seu insights personalizados.</p>
        </div>
      </div>

      {/* insights */}
      <div className="flex flex-col gap-3 items-center overflow-auto">
        <InsightIA mensagem="Sugirir reiniciar o aparelho após ter feito a limpeza do cache é uma aproximação sólida." />

        <InsightIA mensagem="Tentar novamente acessar o aplicativo com uma conexão de internet diferente pode alterar o resultado." />

        <InsightIA mensagem="Peça prints do estado atual do aplicativo, talvez haja algo despercebido." />

        <IconChevronRight stroke={1.25} className="cursor-pointer" />
      </div>
    </aside>
  );
}
