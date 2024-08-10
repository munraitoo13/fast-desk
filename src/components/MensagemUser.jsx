export default function MensagemUser({ mensagem }) {
  return (
    <div className="bg-neutral-200/50 text-neutral-950 rounded-xl px-5 py-2 self-start max-w-[75%]">
      <p>{mensagem}</p>
    </div>
  );
}
