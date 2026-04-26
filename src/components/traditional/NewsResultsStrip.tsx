export default function NewsResultsStrip() {
  return (
    <section id="news" className="border-b border-[#d8d8d6] bg-[#eeeeec]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
        <div className="border-b border-[#d8d8d6] px-10 py-8 md:border-b-0 md:border-r md:px-20">
          <p className="text-xs font-semibold uppercase leading-6 tracking-[0.35em] text-[#111111]">
            Breaking News
          </p>

          <div className="mt-4 h-px w-10 bg-[#b89b5e]" />

          <a
            href="#"
            className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.25em] text-[#111111]"
          >
            View All News →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
          <article className="border border-[#d8d8d6] bg-[#f8f7f4] p-6">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6f7275]">
              May 16, 2024
            </p>

            <h3 className="text-xl font-light leading-6 text-[#111111]">
              Not Guilty Verdict in Federal Racketeering Trial
            </h3>

            <a
              href="#"
              className="mt-6 inline-flex text-[10px] font-semibold uppercase tracking-[0.25em] text-[#111111]"
            >
              Read More →
            </a>
          </article>

          <article className="border border-[#d8d8d6] bg-[#f8f7f4] p-6">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6f7275]">
              April 30, 2024
            </p>

            <h3 className="text-xl font-light leading-6 text-[#111111]">
              Confidential Settlement in High-Stakes Commercial Dispute
            </h3>

            <a
              href="#"
              className="mt-6 inline-flex text-[10px] font-semibold uppercase tracking-[0.25em] text-[#111111]"
            >
              Read More →
            </a>
          </article>

          <article className="border border-[#d8d8d6] bg-[#f8f7f4] p-6">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6f7275]">
              April 12, 2024
            </p>

            <h3 className="text-xl font-light leading-6 text-[#111111]">
              Court of Appeals Affirms Complete Victory for Client
            </h3>

            <a
              href="#"
              className="mt-6 inline-flex text-[10px] font-semibold uppercase tracking-[0.25em] text-[#111111]"
            >
              Read More →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}