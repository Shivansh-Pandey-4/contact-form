import FormClient from "@/components/FormClient";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-pink-100 to-pink-300 flex flex-col items-center">

      <header className="mt-15 mb-5 text-center">
        <h1 className="text-4xl font-bold">Server actions Demo</h1>

        <p className="text-xl mt-3 text-gray-600">Contact form with Postgresql and revalidation</p>
      </header>

      <section>
        <FormClient />
      </section>
    </div>
  );
}
