const approachItems = [
  {
    number: "01",
    title: "Assess the full picture",
    description:
      "We begin by understanding the assets, relationships, business interests, and risks surrounding the matter.",
  },
  {
    number: "02",
    title: "Protect privacy and leverage",
    description:
      "We develop a strategy designed to preserve discretion, reduce exposure, and support long-term decision-making.",
  },
  {
    number: "03",
    title: "Execute with judgment",
    description:
      "We move carefully and deliberately, balancing legal action with reputation, timing, and practical consequences.",
  },
];

export default function ModernApproach() {
  return (
    <section id="approach" className="bg-white px-8 py-24 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#68aeb7]">
              Approach
            </p>

            <h2 className="max-w-xl text-5xl font-light leading-[1] tracking-[-0.05em] md:text-7xl">
              Discreet strategy for matters that cannot be handled casually.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#555555]">
              Private clients often face legal decisions where money, family,
              reputation, and control intersect. Our process is built around
              preparation, discretion, and strategic judgment.
            </p>
          </div>

          <div className="border-t border-[#d8d8d6]">
            {approachItems.map((item) => (
              <article
                key={item.number}
                className="grid gap-6 border-b border-[#d8d8d6] py-10 md:grid-cols-[100px_1fr]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#68aeb7]">
                  {item.number}
                </p>

                <div>
                  <h3 className="text-3xl font-light tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-[#555555]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}