const services = [
  {
    title: "Family Law",
    description:
      "Clear legal support for divorce, custody, support, and sensitive family matters.",
  },
  {
    title: "Civil Litigation",
    description:
      "Strategic representation for disputes involving individuals, businesses, and contracts.",
  },
  {
    title: "Business Counsel",
    description:
      "Practical legal guidance for owners, professionals, and growing organizations.",
  },
  {
    title: "Estate Planning",
    description:
      "Thoughtful planning for wills, trusts, asset protection, and long-term security.",
  },
];

export default function ModernServices() {
  return (
    <section id="services" className="border-y border-[#d8d8d6] bg-[#f7f8f8] px-8 py-24 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#68aeb7]">
              Services
            </p>

            <h2 className="max-w-xl text-5xl font-light leading-[1] tracking-[-0.05em] md:text-7xl">
              Legal support designed around your next move.
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
                  Learn More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}