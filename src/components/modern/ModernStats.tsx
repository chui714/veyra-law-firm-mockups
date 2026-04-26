const stats = [
  {
    value: "15+",
    label: "Years of combined legal experience",
  },
  {
    value: "300+",
    label: "Clients advised across personal and business matters",
  },
  {
    value: "24hr",
    label: "Initial response goal for new consultation requests",
  },
];

export default function ModernStats() {
  return (
    <section id="insights" className="border-y border-[#d8d8d6] bg-[#f7f8f8] px-8 py-20 md:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#68aeb7]">
            Credibility
          </p>

          <h2 className="max-w-lg text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Focused guidance, measurable confidence.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className="border border-[#d8d8d6] bg-white p-8"
            >
              <p className="text-5xl font-light tracking-[-0.05em] text-[#111111] md:text-6xl">
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