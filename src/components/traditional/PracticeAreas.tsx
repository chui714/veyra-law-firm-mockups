const practiceAreas = [
  {
    title: "Criminal Defense",
    description:
      "Aggressive defense in federal and state criminal matters at every stage.",
    icon: "▥",
  },
  {
    title: "White Collar Defense",
    description:
      "Strategic representation in investigations and prosecutions involving business and finance.",
    icon: "◇",
  },
  {
    title: "Civil Litigation",
    description:
      "A relentless pursuit of justice in complex commercial and tort litigation.",
    icon: "⚖",
  },
  {
    title: "Appellate Practice",
    description:
      "Skilled advocacy in appeals and dispositive motions nationwide.",
    icon: "▤",
  },
  {
    title: "Corporate Investigations",
    description:
      "Internal investigations and compliance guidance for organizations.",
    icon: "⌕",
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="border-b border-[#d8d8d6] bg-[#f8f7f4]">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_4fr]">
        <div className="border-b border-[#d8d8d6] px-10 py-8 md:border-b-0 md:border-r md:px-20">
          <p className="text-xs font-semibold uppercase leading-6 tracking-[0.35em] text-[#111111]">
            Highly Focused.
            <br />
            Relentless Advocacy.
          </p>

          <div className="mt-4 h-px w-10 bg-[#b89b5e]" />

          <p className="mt-5 max-w-xs text-sm leading-6 text-[#555555]">
            We handle the most complex, high-stakes matters with precision,
            discretion, and intensity.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.25em] text-[#111111]"
          >
            Our Practice Areas →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5">
          {practiceAreas.map((area) => (
            <article
              key={area.title}
              className="border-b border-[#d8d8d6] px-6 py-8 text-center md:border-b-0 md:border-r last:md:border-r-0"
            >
              <div className="mb-5 text-4xl text-[#6f7275]">{area.icon}</div>

              <h3 className="text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-[#111111]">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#555555]">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}