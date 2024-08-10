export default function DashboardCard({
  title,
  dados,
  textColor,
  porcentagem,
  bgColor,
}) {
  return (
    <div className="bg-white rounded-xl p-10 flex flex-col justify-between drop-shadow-lg">
      {/* title */}
      <h3 href="/atendimentos" className="text-xl font-bold">
        {title}
      </h3>

      {/* dados */}
      <div className="flex justify-between items-end">
        <span className="font-medium text-5xl">{dados}</span>
        <span
          className={`${textColor} ${bgColor} px-2 py-1 rounded-xl font-medium text-xl`}
        >
          {porcentagem}
        </span>
      </div>
    </div>
  );
}
