import Link from "next/link";
import Image from "next/image";

export default function ModernHero() {
  return (
    <section className="min-h-screen bg-white">
      <header className="flex min-h-24 items-center justify-between gap-6 border-b border-[#d8d8d6] px-5 py-5 md:px-10">
  <div className="text-lg font-semibold tracking-[0.22em] text-[#111111] md:text-xl md:tracking-[0.25em]">
    ASHWOOD LEGAL
  </div>

  <div className="flex items-center gap-4 md:gap-8">
    <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#333333] md:flex">
      <a href="#services">Services</a>
      <a href="#approach">Approach</a>
      <a href="#attorneys">Attorneys</a>
      <a href="#insights">Insights</a>
      <a href="#contact">Contact</a>
    </nav>

    <span className="hidden border-l border-[#d8d8d6] pl-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6f7275] xl:inline-flex">
      Veyra Digital Concept
    </span>

          <Link
            href="/"
            className="inline-flex border border-[#d8d8d6] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#111111] transition hover:border-[#68aeb7] hover:text-[#68aeb7] md:px-4 md:py-3 md:text-[10px]"
          >
            Back
            <span className="hidden sm:inline">&nbsp;to Concepts</span>
          </Link>
        </div>
      </header>

      <div className="border-b border-[#d8d8d6] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6f7275] md:hidden">
        Veyra Digital Concept
      </div>

      <div className="grid min-h-[650px] grid-cols-1 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center px-10 py-20 md:px-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#68aeb7]">
            Private Counsel. Strategic Protection.
          </p>

          <h1 className="max-w-2xl text-6xl font-light leading-[1] tracking-[-0.05em] md:text-8xl">
            Protecting what you've built. Securing what comes next.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#555555]">
            Ashwood Legal advises families, founders, and private clients on
            complex wealth, business, and personal legal matters requiring discretion
            and strategic judgement. 
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#68aeb7] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white"
            >
              Schedule a Private Consultation
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center border border-[#d8d8d6] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#111111]"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="relative m-10 min-h-[500px] overflow-hidden bg-[#e5e5e3]">
          <Image
          src="/images/modern/modern-hero.webp"
          alt="Modern attorney portrait"
          fill
          priority
          className="object-cover object-center"
        />

          <div className="absolute inset-0 bg-white/5" />
        </div>
      </div>
    </section>
  );
}