import Link from "next/link";
import Image from "next/image";

export default function TraditionalHero() {
  return (
    <section className="min-h-screen border border-[#d8d8d6] bg-[#f8f7f4]">
     <header className="flex min-h-24 items-center justify-between gap-6 border-b border-[#d8d8d6] px-5 py-5 md:px-10">
  <div className="logo-serif text-xl leading-none tracking-[0.28em] md:text-2xl md:tracking-[0.35em]">
    BLACKWELL
    <br />
    SLOANE
  </div>

  <div className="flex items-center gap-4 md:gap-10">
    <nav className="hidden items-center gap-10 text-xs font-semibold uppercase tracking-[0.25em] md:flex">
      <a href="#about">About</a>
      <a href="#practice-areas">Practice Areas</a>
      <a href="#people">People</a>
      <a href="#notable-cases">Notable Cases</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </nav>

    <span className="hidden border-l border-[#d8d8d6] pl-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6f7275] xl:inline-flex">
      Veyra Digital Concept
    </span>

    <Link
      href="/"
      className="inline-flex border border-[#d8d8d6] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#111111] transition hover:border-[#111111] md:px-4 md:py-3 md:text-[10px]"
    >
      Back
      <span className="hidden sm:inline">&nbsp;to Concepts</span>
    </Link>
  </div>
</header>

      <div className="border-b border-[#d8d8d6] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6f7275] md:hidden">
        Veyra Digital Concept
      </div>

      <div className="grid min-h-[650px] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-10 py-20 md:px-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-[#0f1d2b]">
            Trial Lawyers. Strategic Advocates.
          </p>

          <h1 className="max-w-xl text-6xl font-light leading-[0.95] tracking-[-0.04em] md:text-8xl">
            Dedicated to Your Case.
          </h1>

          <div className="my-8 h-px w-10 bg-[#b89b5e]" />

          <p className="max-w-md text-lg leading-7 text-[#3f3f3f]">
            Blackwell Sloane is a premier trial law firm representing individuals
            and businesses in complex criminal defense and civil litigation
            matters.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#0f1d2b] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white"
            >
              Schedule a Consultation
            </a>

            <a
              href="#notable-cases"
              className="inline-flex items-center justify-center px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#111111]"
            >
              View Case Results
            </a>
          </div>
        </div>

        <div className="relative min-h-[500px] bg-[#d8d8d6]">
          <Image
            src="/images/traditional/traditional-hero.jpg"
            alt="Black and white legal office image"
            fill
            priority
            className="object-cover grayscale"
          />

        <div className="absolute inset-0 bg-black/10" />
      </div>
      </div>
    </section>
  );
}