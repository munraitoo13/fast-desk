import ChatNav from "../components/ChatNav";
import ChatAside from "../components/ChatAside";
import {
  IconSparkles,
  IconPaperclip,
  IconMoodSmile,
  IconSend2,
} from "@tabler/icons-react";
import MensagemIA from "../components/MensagemIA";
import MensagemUser from "../components/MensagemUser";
import MensagemAtendente from "../components/MensagemAtendente";

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row px-5 py-5 h-screen gap-10">
      <div className="order-2 lg:order-1">
        <ChatAside />
      </div>

      <main className="w-full flex flex-grow flex-col order-1 lg:order-2 gap-10 max-h-full">
        <ChatNav />

        <div className="bg-white rounded-xl flex flex-grow flex-col overflow-y-auto drop-shadow-lg">
          {/* chat */}
          <div className="flex flex-grow flex-col items-center gap-3 p-5">
            <MensagemIA
              mensagem="Olá, John Doe tudo bem? Me chamo Softy, o assistente digital da
                    Softtek. Como posso te ajudar?"
            />

            <MensagemUser mensagem="Olá, estou com problemas no aplicativo. O saldo da minha conta não está atualizando. ☹️" />

            <MensagemIA mensagem="De acordo com minha base de conhecimento, este problema se dá por um problema de cache no seu aplicativo. Peço que vá nas configurações do seu dispositivo e limpe o cache do nosso aplicativo." />

            <MensagemIA mensagem="Isso resolveu seu problema?" />

            <MensagemUser mensagem="Tentei fazer isso, porém não resolveu." />

            <MensagemIA mensagem="Entendi, neste caso, irei transferir esse atendimento para uma resolução humanizada. Obrigado pela paciência!" />

            <MensagemAtendente mensagem="Olá! Me chamo Bruno Marinho de Souza, agora vou continuar com nosso atendimento. Você pode detalhar melhor qual o seu problema?" />
          </div>
        </div>

        {/* chatbox */}
        <div className="flex items-center justify-center p-5 gap-3 bg-white rounded-xl drop-shadow-lg">
          <div className="flex gap-1">
            <IconSparkles stroke={1.25} />
            <IconPaperclip stroke={1.25} />
          </div>

          <input
            className="px-5 py-2 w-full rounded-xl bg-white"
            placeholder="Digite sua mensagem..."
            type="text"
            name="messageBox"
            id="messageBox"
          />

          <div className="flex gap-1">
            <IconMoodSmile stroke={1.25} />
            <IconSend2 stroke={1.25} />
          </div>
        </div>
      </main>
    </div>
  );
}
