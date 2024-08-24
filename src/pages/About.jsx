import logo from "../assets/images/logo.png";
import bruno from "../assets/images/bruno.png";
import augusto from "../assets/images/augusto.png";
import hermann from "../assets/images/hermann.png";

const tecnologias = [
  {
    nome: "HTML",
    descricao:
      "A base estrutural do sistema, garantindo uma marcação semântica e acessível.",
  },
  {
    nome: "CSS",
    descricao:
      "Utilizado para estilizar e dar vida aos elementos visuais do sistema.",
  },
  {
    nome: "JavaScript",
    descricao:
      "A linguagem de programação essencial para a interatividade e dinamismo do sistema.",
  },
  {
    nome: "React",
    descricao:
      "A biblioteca JavaScript para construir interfaces de usuário reativas e componentizadas.",
  },
  {
    nome: "Tailwindcss",
    descricao:
      "O framework CSS utilizado para estilizar o site e criar um design responsivo.",
  },
  {
    nome: "Vite",
    descricao:
      "O bundler utilizado para compilar e otimizar o código do sistema de forma rápida e eficiente.",
  },
  {
    nome: "React Router",
    descricao:
      "A biblioteca utilizada para gerenciar as rotas do sistema e a navegação entre páginas.",
  },
  {
    nome: "Tabler Icons",
    descricao:
      "A biblioteca de ícones utilizada para adicionar ícones ao sistema de forma simples e elegante.",
  },
];

const membros = [
  {
    nome: "Bruno Raniere",
    foto: bruno,
    github: "https://github.com/brunoraniere",
    funcao: "Apresentação",
  },
  {
    nome: "Augusto Mendes",
    foto: augusto,
    github: "https://github.com/munraitoo13",
    funcao: "Design e Desenvolvimento",
  },
  {
    nome: "Hermann Marinho",
    foto: hermann,
    github: "https://github.com/HermannMarinho",
    funcao: "Design e Brainstorming",
  },
];

export default function About() {
  return (
    <>
      <main className="m-5 p-5 bg-white rounded-xl flex flex-col items-center justify-center gap-10 shadow-sm">
        {/* logo */}
        <div>
          <a href="/">
            <img src={logo} alt="FastDesk logo" />
          </a>
        </div>

        {/* quem somos */}
        <section className="space-y-2 text-center max-w-lg">
          <h2 className="font-bold text-3xl">Quem somos?</h2>

          <p>
            Somos um grupo de alunos dedicados e apaixonados por tecnologia.
            Nosso objetivo é criar um sistema de alta qualidade, usabilidade e
            beleza. Combinando nossa paixão pela inovação com nossas habilidades
            técnicas, estamos empenhados em desenvolver soluções eficientes e
            confiáveis para nosso cliente.
          </p>
        </section>

        {/* membros */}
        <section className="w-full flex-col gap-10 lg:flex-row flex lg:justify-evenly">
          {membros.map((membro) => (
            <div
              className="flex flex-col justify-center items-center text-center"
              key={membro.nome}
            >
              <img
                className="rounded-full h-40 w-40"
                src={membro.foto}
                alt={`Membro ${membro.nome}`}
              />

              <a
                href={membro.github}
                className="font-bold text-xl"
                target="_blank"
              >
                {membro.nome}
              </a>

              <p>{membro.funcao}</p>
            </div>
          ))}
        </section>

        {/* tecnologias */}
        <section className="flex flex-col items-center w-full gap-5 text-center">
          <h2 className="text-3xl font-bold">
            Principais tecnologias utilizadas
          </h2>

          <p className="max-w-lg">
            O sistema <b>FastDesk</b> foi desenvolvido com uma combinação de
            tecnologias modernas e poderosas. Nossa equipe utilizou as seguintes
            tecnologias para criar uma experiência eficiente e amigável para os
            usuários:
          </p>

          <ul className="text-left grid grid-cols-1 lg:grid-cols-2 max-w-xl gap-3">
            {tecnologias.map((tecnologia) => (
              <li
                className="p-5 bg-neutral-100 rounded-xl"
                key={tecnologia.nome}
              >
                <b>{tecnologia.nome}</b>: {tecnologia.descricao}
              </li>
            ))}
          </ul>

          <p className="max-w-lg">
            Com essa combinação de tecnologias, estamos confiantes de que o
            sistema <b>FastDesk</b> oferece uma solução robusta e eficaz para
            gerenciamento de ativos e suporte.
          </p>
        </section>

        {/* botão voltar */}
        <a
          className="py-2 px-5 bg-neutral-950 text-neutral-100 rounded-xl hover:opacity-90"
          href="/"
        >
          Página inicial
        </a>
      </main>
    </>
  );
}
