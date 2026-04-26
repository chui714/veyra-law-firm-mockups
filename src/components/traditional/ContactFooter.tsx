import Link from "next/link";

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#f8f7f4] text-[#111111]">
      <section className="grid grid-cols-1 border-b border-[#d8d8d6] md:grid-cols-[1.2fr_0.8fr]">
        <div className="border-b border-[#d8d8d6] px-10 py-20 md:border-b-0 md:border-r md:px-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#6f7275]">
            Consultation
          </p>

          <h2 className="max-w-3xl text-5xl font-light leading-[1] tracking-[-0.04em] md:text-7xl">
            When the stakes are high, preparation matters.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4a4a4a]">
            Speak with a trial-focused legal team about your matter, your risks,
            and the strategy required to move forward with confidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#0f1d2b] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#111111]"
            >
              Schedule Consultation
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center border border-[#d8d8d6] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#111111] transition hover:border-[#111111]"
            >
              Back to Concepts
            </Link>
          </div>
        </div>

        <div className="px-10 py-20 md:px-14">
          <div className="border-b border-[#d8d8d6] pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7275]">
              Office
            </p>

            <p className="mt-5 text-lg leading-7">
              400 Grand Avenue
              <br />
              Suite 1800
              <br />
              Los Angeles, CA 90071
            </p>
          </div>

          <div className="border-b border-[#d8d8d6] py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7275]">
              Contact
            </p>

            <p className="mt-5 text-lg leading-8">
              (213) 555-0188
              <br />
              intake@blackwellsloane.com
            </p>
          </div>

          <div className="pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7275]">
              Practice Focus
            </p>

            <p className="mt-5 text-lg leading-8">
              Criminal Defense
              <br />
              White Collar Defense
              <br />
              Civil Litigation
              <br />
              Appeals
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 px-10 py-8 text-xs uppercase tracking-[0.2em] text-[#6f7275] md:flex-row md:items-center md:justify-between md:px-20">
        <p>© 2026 Blackwell Sloane LLP. Concept website.</p>

        <div className="flex flex-wrap gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Disclaimer</a>
          <a href="#">LinkedIn</a>
        </div>
      </section>
      
    </footer>
  );
}