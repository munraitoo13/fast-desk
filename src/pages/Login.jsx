export default function Login() {
  return (
    <>
      <main className="h-full flex flex-col items-center justify-center">
        <section className="flex flex-col items-center p-5 bg-neutral-100 shadow-md rounded-xl gap-3">
          <div>
            <img src="/logo.png" alt="FastDesk logo" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-neutral-900">Login</h1>
          </div>

          <div>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                className="p-2 rounded-md"
              />

              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                className="p-2 rounded-md"
              />

              <div className="flex flex-col justify-center gap-3">
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="stayconnected"
                    id="stayconnected"
                  />
                  <label htmlFor="stayconnected">Lembre-se de mim</label>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2 bg-neutral-950 text-white rounded-xl"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
