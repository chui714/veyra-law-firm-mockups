const approachItems = [
  {
    number: "01",
    title: "Understand the matter",
    description:
      "We begin by identifying your goals, risks, timeline, and the legal decisions that matter most.",
  },
  {
    number: "02",
    title: "Build the strategy",
    description:
      "We create a clear legal plan with practical next steps, expected milestones, and communication expectations.",
  },
  {
    number: "03",
    title: "Move with precision",
    description:
      "We execute with discipline, keeping your matter organized, documented, and aligned with your desired outcome.",
  },
];

export default function ModernApproach() {
  return (
    <section
      id="approach"
      className="bg-white px-8 py-24 md:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#68aeb7]">
              Approach
            </p>

            <h2 className="max-w-xl text-5xl font-light leading-[1] tracking-[-0.05em] md:text-7xl">
              A calmer process for complex legal decisions.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#555555]">
              Clients come to Ashwood Legal when they need more than paperwork.
              They need structure, communication, and a strategy they can
              understand.
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