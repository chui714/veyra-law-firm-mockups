export default function QuoteSection() {
  return (
    <section id="about" className="border-b border-[#d8d8d6] bg-[#111111] px-10 py-24 text-[#f8f7f4] md:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#b89b5e]">
          Firm Philosophy
        </p>

        <blockquote className="max-w-5xl text-4xl font-light leading-[1.12] tracking-[-0.03em] md:text-6xl">
          “Every case deserves preparation, strategy, and the courage to stand
          in the courtroom when the outcome matters most.”
        </blockquote>

        <div className="mt-10 flex flex-col gap-2 border-l border-[#b89b5e] pl-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em]">
            Jonathan Blackwell
          </p>
          <p className="text-sm uppercase tracking-[0.2em] text-[#b8b8b8]">
            Founding Partner
          </p>
        </div>
      </div>
    </section>
  );
}