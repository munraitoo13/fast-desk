export default function MensagemIA({ mensagem }) {
  return (
    <div className="bg-neutral-950 text-neutral-100 rounded-xl px-5 py-2 self-end max-w-[75%]">
      <p>{mensagem}</p>
      <small className="opacity-50">Mensagem fornecida por IA</small>
    </div>
  );
}
