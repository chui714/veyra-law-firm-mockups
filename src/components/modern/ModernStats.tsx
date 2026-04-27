const stats = [
  {
    value: "$20M+",
    label: "Complex estate and business matters advised",
  },
  {
    value: "Multi-State",
    label: "Planning support across family, trust, and business interests",
  },
  {
    value: "Private",
    label: "Discreet counsel for sensitive legal decisions",
  },
];

export default function ModernStats() {
  return (
    <section
      id="insights"
      className="border-y border-[#d8d8d6] bg-[#f7f8f8] px-8 py-20 md:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#68aeb7]">
            Select Signals
          </p>

          <h2 className="max-w-lg text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Built for matters where complexity and discretion matter.
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#666666]">
            Concept metrics shown for portfolio demonstration. Final claims
            should be replaced with verified firm credentials, representative
            matters, and permissible attorney advertising language.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className="border border-[#d8d8d6] bg-white p-8"
            >
              <p className="text-4xl font-light tracking-[-0.05em] text-[#111111] md:text-5xl">
                {stat.value}
              </p>

              <p className="mt-6 text-sm font-semibold uppercase leading-6 tracking-[0.18em] text-[#555555]">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}