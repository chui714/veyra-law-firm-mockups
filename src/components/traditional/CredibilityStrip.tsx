export default function CredibilityStrip() {
  return (
    <section id="people" className="border-y border-[#d8d8d6] bg-[#f8f7f4]">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr_1fr]">
        <div className="border-b border-[#d8d8d6] px-10 py-8 md:border-b-0 md:border-r md:px-20">
          <p className="text-xs font-semibold uppercase leading-6 tracking-[0.35em] text-[#111111]">
            Tributes from
            <br />
            the Legal Community
          </p>

          <div className="mt-4 h-px w-10 bg-[#b89b5e]" />

          <a
            href="#"
            className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.25em] text-[#111111]"
          >
            View All Tributes →
          </a>
        </div>

        <blockquote className="border-b border-[#d8d8d6] px-10 py-8 md:border-b-0 md:border-r">
          <p className="text-lg leading-7 text-[#111111]">
            “A brilliant advocate with unrivaled trial skills and an unwavering
            commitment to his clients.”
          </p>
          <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#6f7275]">
            — Chambers USA
          </footer>
        </blockquote>

        <blockquote className="border-b border-[#d8d8d6] px-10 py-8 md:border-b-0 md:border-r">
          <p className="text-lg leading-7 text-[#111111]">
            “One of the most formidable litigators of our time. He sees angles
            others simply don’t.”
          </p>
          <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#6f7275]">
            — The National Law Journal
          </footer>
        </blockquote>

        <blockquote className="px-10 py-8">
          <p className="text-lg leading-7 text-[#111111]">
            “Blackwell Sloane sets the standard for excellence in the courtroom
            and beyond.”
          </p>
          <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#6f7275]">
            — Best Lawyers in America
          </footer>
        </blockquote>
      </div>
    </section>
  );
}