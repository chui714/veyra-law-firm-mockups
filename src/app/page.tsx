import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] px-6 py-20 text-[#111111]">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#6f7275]">
          Website Design Concepts
        </p>

        <h1 className="max-w-3xl text-5xl font-light tracking-[-0.04em] md:text-7xl">
          Law Firm Website Mockups
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4a4a4a]">
          Two professional homepage concepts created for a law firm website
          redesign: one traditional premium litigation style and one modern
          minimal style.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/mockups/traditional"
            className="group border border-[#d8d8d6] bg-white p-8 transition hover:border-[#111111]"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#6f7275]">
              Mockup 01
            </p>
            <h2 className="text-3xl font-light">Traditional Premium</h2>
            <p className="mt-4 leading-7 text-[#555555]">
              A refined, high-stakes trial law firm concept inspired by
              established litigation firms.
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em]">
              View Mockup →
            </p>
          </Link>

          <Link
            href="/mockups/modern"
            className="group border border-[#d8d8d6] bg-white p-8 transition hover:border-[#111111]"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#6f7275]">
              Mockup 02
            </p>
            <h2 className="text-3xl font-light">Modern Minimal</h2>
            <p className="mt-4 leading-7 text-[#555555]">
              A clean white, cement gray, and teal law firm concept with a more
              contemporary professional look.
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em]">
              View Mockup →
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}