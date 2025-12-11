import Logo from "../shared/Logo";

export default async function DashboardPage() {
  return (
    <main className="p-8 min-h-screen flex flex-col items-center justify-center">
      <div className="flex mb-5">
        <Logo />
      </div>
      <h1 className="text-3xl font-bold mb-4">Administrační sekce</h1>

      <p className="mb-6">Vítejte v administrační sekci. K navigaci používejte postranní panel.</p>
    </main>
  );
}
