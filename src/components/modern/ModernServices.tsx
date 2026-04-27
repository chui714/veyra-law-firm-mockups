const services = [
  {
    title: "Wealth Preservation & Trusts",
    description:
      "Sophisticated planning for families seeking to protect assets, preserve privacy, and prepare for generational transitions.",
  },
  {
    title: "High-Asset Family Matters",
    description:
      "Discreet counsel for divorce, custody, support, and marital agreements involving complex financial interests.",
  },
  {
    title: "Business Succession",
    description:
      "Guidance for founders, owners, and family enterprises navigating ownership transitions and continuity planning.",
  },
  {
    title: "Private Dispute Resolution",
    description:
      "Strategic representation in sensitive disputes where reputation, confidentiality, and long-term outcomes matter.",
  },
];

export default function ModernServices() {
  return (
    <section
      id="services"
      className="border-y border-[#d8d8d6] bg-[#f7f8f8] px-8 py-24 md:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#68aeb7]">
              Private Client Services
            </p>

            <h2 className="max-w-xl text-5xl font-light leading-[1] tracking-[-0.05em] md:text-7xl">
              Counsel for complex personal, financial, and business decisions.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-[#d8d8d6] bg-white p-8 transition hover:border-[#68aeb7]"
              >
                <h3 className="text-2xl font-light tracking-[-0.03em]">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-[#555555]">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-[#68aeb7]"
                >
                  Discuss Your Matter →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}