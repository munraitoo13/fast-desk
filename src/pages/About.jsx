export default function About() {
  return (
    <>
      <main className="px-10 py-20 w-full flex flex-col items-center justify-center gap-10">
        {/* logo */}
        <a href="/">
          <img src="/logo.png" alt="FastDesk logo" />
        </a>

        {/* quem somos */}
        <section className="space-y-2 text-center">
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
          {/* Augusto */}
          <div className="flex flex-col justify-center items-center text-center">
            <img
              className="rounded-full h-40 w-40"
              src="/augusto.png"
              alt="Membro Augusto"
            />

            <a
              href="https://github.com/munraitoo13"
              className="font-bold text-xl"
              target="_blank"
            >
              Augusto
              <br />
              Mendes
            </a>

            <p>Desenvolvimento</p>
          </div>

          {/* Bruno */}
          <div className="flex flex-col justify-center items-center text-center">
            <img
              className="rounded-full h-40 w-40"
              src="/bruno.png"
              alt="Membro Bruno"
            />

            <a
              href="https://github.com/brunoraniere"
              className="font-bold text-xl"
              target="_blank"
            >
              Bruno
              <br />
              Raniere
            </a>

            <p>Apresentação</p>
          </div>

          {/* Hermann */}
          <div className="flex flex-col justify-center items-center text-center">
            <img
              className="rounded-full h-40 w-40"
              src="/hermann.png"
              alt="Membro Hermann"
            />

            <a
              href="https://github.com/HermannMarinho"
              target="_blank"
              className="font-bold text-xl"
            >
              Hermann
              <br />
              Marinho
            </a>

            <p>Brainstorming</p>
          </div>
        </section>

        {/* tecnologias */}
        <section className="flex flex-col w-full gap-5 text-center">
          <h2 className="text-3xl font-bold">
            Principais tecnologias utilizadas
          </h2>

          <p>
            O sistema <b>FastDesk</b> foi desenvolvido com uma combinação de
            tecnologias modernas e poderosas. Nossa equipe utilizou as seguintes
            tecnologias para criar uma experiência eficiente e amigável para os
            usuários:
          </p>

          <ul className="text-left">
            <li>
              <b>HTML</b>: A base estrutural do sistema, garantindo uma marcação
              semântica e acessível.
            </li>

            <li>
              <b>CSS</b>: Utilizado para estilizar e dar vida aos elementos
              visuais do sistema.
            </li>

            <li>
              <b>JavaScript</b>: A linguagem de programação essencial para a
              interatividade e dinamismo do sistema.
            </li>

            <li>
              <b>React</b>: A biblioteca JavaScript para construir interfaces de
              usuário reativas e componentizadas.
            </li>

            <li>
              <b>Tailwindcss</b>: O framework CSS utilizado para estilizar o
              site e criar um design responsivo.
            </li>

            <li>
              <b>Vite</b>: O bundler utilizado para compilar e otimizar o código
              do sistema de forma rápida e eficiente.
            </li>

            <li>
              <b>React Router</b>: A biblioteca utilizada para gerenciar as
              rotas do sistema e a navegação entre páginas.
            </li>

            {/* tabler */}
            <li>
              <b>Tabler Icons</b>: A biblioteca de ícones utilizada para
              adicionar ícones ao sistema de forma simples e elegante.
            </li>
          </ul>

          <p className="">
            Com essa combinação de tecnologias, estamos confiantes de que o
            sistema <b>FastDesk</b> oferece uma solução robusta e eficaz para
            gerenciamento de ativos e suporte.
          </p>
        </section>

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
