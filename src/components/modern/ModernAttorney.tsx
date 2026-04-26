export default function ModernAttorney() {
  return (
    <section
      id="attorneys"
      className="border-y border-[#d8d8d6] bg-white px-8 py-24 md:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#68aeb7]">
            Attorneys
          </p>

          <h2 className="max-w-xl text-5xl font-light leading-[1] tracking-[-0.05em] md:text-7xl">
            Practical counsel with a personal approach.
          </h2>
        </div>

        <div className="border-l border-[#d8d8d6] pl-8 md:pl-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#68aeb7]">
            Managing Attorney
          </p>

          <h3 className="mt-5 text-4xl font-light tracking-[-0.04em] md:text-5xl">
            Amelia Hart
          </h3>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555555]">
            Amelia Hart advises individuals, families, and business owners
            through sensitive legal decisions with a focus on clarity,
            preparation, and steady communication.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="border border-[#d8d8d6] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#68aeb7]">
                Focus
              </p>
              <p className="mt-3 text-sm leading-6 text-[#555555]">
                Family Law & Civil Matters
              </p>
            </div>

            <div className="border border-[#d8d8d6] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#68aeb7]">
                Style
              </p>
              <p className="mt-3 text-sm leading-6 text-[#555555]">
                Clear, calm, strategic
              </p>
            </div>

            <div className="border border-[#d8d8d6] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#68aeb7]">
                Clients
              </p>
              <p className="mt-3 text-sm leading-6 text-[#555555]">
                Individuals & small businesses
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex border border-[#d8d8d6] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#111111] transition hover:border-[#68aeb7] hover:text-[#68aeb7]"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
}