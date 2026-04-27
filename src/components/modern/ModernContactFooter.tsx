import Link from "next/link";

export default function ModernContactFooter() {
  return (
    <footer id="contact" className="bg-white text-[#111111]">
      <section className="grid grid-cols-1 border-b border-[#d8d8d6] md:grid-cols-[1.15fr_0.85fr]">
        <div className="px-8 py-20 md:px-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#68aeb7]">
            Private Consultation
          </p>

          <h2 className="max-w-3xl text-5xl font-light leading-[1] tracking-[-0.05em] md:text-7xl">
            Discuss a sensitive matter with discretion.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555555]">
            Schedule a private consultation to discuss your matter, evaluate your
            options, and determine the right path forward with confidentiality
            and strategic judgement.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="mailto:intake@ashwoodlegal.com"
              className="inline-flex items-center justify-center bg-[#68aeb7] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#4f9aa3]"
            >
              Schedule Private Consultation
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center border border-[#d8d8d6] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#111111] transition hover:border-[#68aeb7] hover:text-[#68aeb7]"
            >
              Back to Concepts
            </Link>
          </div>
        </div>

        <div className="border-t border-[#d8d8d6] bg-[#f7f8f8] px-8 py-20 md:border-l md:border-t-0 md:px-14">
          <div className="border-b border-[#d8d8d6] pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#68aeb7]">
              Office
            </p>

            <p className="mt-5 text-lg leading-8 text-[#333333]">
              2100 Pacific Avenue
              <br />
              Suite 420
              <br />
              Newport Beach, CA 92660
            </p>
          </div>

          <div className="border-b border-[#d8d8d6] py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#68aeb7]">
              Contact
            </p>

            <p className="mt-5 text-lg leading-8 text-[#333333]">
              (949) 555-0142
              <br />
              intake@ashwoodlegal.com
            </p>
          </div>

          <div className="pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#68aeb7]">
              Hours
            </p>

            <p className="mt-5 text-lg leading-8 text-[#333333]">
              Monday–Friday
              <br />
              8:30 AM–5:30 PM
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 px-8 py-8 text-xs uppercase tracking-[0.2em] text-[#6f7275] md:flex-row md:items-center md:justify-between md:px-20">
        <p>© 2026 Ashwood Legal. Concept website.</p>

        <div className="flex flex-wrap gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Disclaimer</a>
          <a href="#">LinkedIn</a>
        </div>
      </section>

      <section className="border-t border-[#d8d8d6] px-8 py-5 text-[10px] uppercase tracking-[0.25em] text-[#8a8a8a] md:px-20">
        Designed as a portfolio concept by Veyra Digital.
      </section>
    </footer>
  );
}