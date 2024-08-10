export default function App() {
  return (
    <>
      <nav className="w-full p-5 flex justify-between h-24">
        <img src="/logo.png" alt="logo" />

        <div className="flex gap-3 justify-center items-center">
          <a
            className="px-5 py-2 bg-neutral-950 rounded-xl text-neutral-100 hover:opacity-90"
            href="/signin"
          >
            Entrar
          </a>
        </div>
      </nav>

      <main className="flex flex-col justify-center items-center gap-10 p-5 mt-24">
        {/* embeds */}
        <div className="flex items-center lg:flex-row max-w-screen-xl flex-col justify-center w-full gap-5">
          {/* vp1 */}
          <div className=" w-full flex items-center flex-col gap-1">
            <h2 className="font-medium">Video Pitch 1</h2>
            <embed
              className="h-80 w-full rounded-xl shadow-lg"
              src="youtube.com"
              type=""
            />
          </div>

          {/* vp2 */}
          <div className=" w-full flex items-center flex-col gap-1">
            <h2 className="font-medium">Video Pitch 2</h2>
            <embed
              className="h-80 w-full rounded-xl shadow-lg"
              src="youtube.com"
              type=""
            />
          </div>
        </div>

        {/* info */}
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-center">
            Quer saber mais sobre quem somos?
            <br />
            Clique no botão abaixo.
          </p>

          <a
            className="px-5 py-2 bg-neutral-950 text-neutral-100 rounded-xl hover:opacity-90"
            href="/about"
          >
            Sobre o projeto
          </a>
        </div>
      </main>
    </>
  );
}
