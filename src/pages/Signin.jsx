export default function Signin() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <section className="flex flex-col items-center p-10 bg-white shadow-sm rounded-xl gap-3">
        <a href="/">
          <img src="/logo.png" alt="FastDesk logo" />
        </a>

        <div>
          <h1 className="text-xl font-bold text-neutral-900">Login</h1>
        </div>

        <div>
          <form className="flex flex-col gap-3">
            {/* email */}
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              className="px-5 py-2 rounded-xl bg-neutral-100"
            />

            {/* pass */}
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              className="px-5 py-2 rounded-xl bg-neutral-100"
            />

            {/* stay connected */}
            <div className="flex items-center gap-1">
              <input type="checkbox" name="stayconnected" id="stayconnected" />
              <label htmlFor="stayconnected">Lembre-se de mim</label>
            </div>

            {/* submit */}
            <a
              type="submit"
              href="/dashboard"
              className="px-5 py-2 bg-neutral-950 text-white rounded-xl text-center hover:opacity-90"
            >
              Entrar
            </a>
          </form>
        </div>

        <a className="hover:opacity-90" href="#">
          Esqueci minha senha
        </a>
      </section>
    </main>
  );
}
