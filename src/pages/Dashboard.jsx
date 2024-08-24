import logo from "../assets/images/logo.png";
import DashboardCard from "../components/DashboardCard";
import DashboardCardAtend from "../components/DashboardCardAtend";
import Navbar from "../components/Navbar";

const cardData = [
  {
    title: "Chamados em aberto",
    dados: 1,
    bgColor: "bg-red-600/10",
    textColor: "text-red-600",
    porcentagem: "-32,3%",
  },
  {
    title: "Chamados em resolução",
    dados: 7,
    bgColor: "bg-yellow-600/10",
    textColor: "text-yellow-600",
    porcentagem: "+89,2%",
  },
  {
    title: "Chamados resolvidos (24h)",
    dados: 33,
    bgColor: "bg-green-600/10",
    textColor: "text-green-600",
    porcentagem: "+47,9%",
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col px-5 py-5 h-screen">
      <Navbar />

      <main className="flex flex-col flex-grow">
        <h2 className="font-bold py-5 text-center">
          Visão geral da plataforma
        </h2>

        {/* grids */}
        <div className="grid lg:grid-rows-3 gap-5 flex-grow pb-5 lg:pb-0">
          <div className="gap-5 grid lg:grid-cols-3">
            {cardData.map((card) => {
              return (
                <DashboardCard
                  title={card.title}
                  dados={card.dados}
                  bgColor={card.bgColor}
                  textColor={card.textColor}
                  porcentagem={card.porcentagem}
                />
              );
            })}
          </div>

          <div className="grid row-span-2 lg:grid-cols-1">
            <DashboardCardAtend />
          </div>
        </div>
      </main>
    </div>
  );
}
