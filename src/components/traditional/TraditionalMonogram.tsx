export default function TraditionalMonogram() {
  return (
    <section className="border-b border-[#d8d8d6] bg-[#f3f1ed]">
      <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[420px] overflow-hidden border-b border-[#d8d8d6] bg-[#f8f7f4] md:border-b-0 md:border-r">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89b5e]/40 md:h-96 md:w-96" />

          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8d8d6] md:h-72 md:w-72" />

          <div className="absolute left-10 top-10 h-px w-16 bg-[#b89b5e]" />

          <div className="absolute bottom-10 right-10 h-px w-16 bg-[#b89b5e]" />

          <div className="flex h-full min-h-[420px] items-center justify-center">
            <p className="logo-serif text-[11rem] font-light leading-none tracking-[-0.12em] text-[#0f1d2b] md:text-[16rem]">
              BS
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-10 py-20 md:px-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#b89b5e]">
            Blackwell Sloane
          </p>

          <h2 className="max-w-3xl text-5xl font-light leading-[1] tracking-[-0.04em] md:text-7xl">
            Built on preparation, discretion, and courtroom discipline.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4a4a4a]">
            Every matter is approached with a focused strategy, a command of the
            record, and the judgment required when reputations, businesses, and
            freedom are at stake.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="border border-[#d8d8d6] bg-[#f8f7f4] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6f7275]">
                Focus
              </p>
              <p className="mt-3 text-sm leading-6 text-[#333333]">
                High-stakes litigation
              </p>
            </div>

            <div className="border border-[#d8d8d6] bg-[#f8f7f4] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6f7275]">
                Method
              </p>
              <p className="mt-3 text-sm leading-6 text-[#333333]">
                Strategic preparation
              </p>
            </div>

            <div className="border border-[#d8d8d6] bg-[#f8f7f4] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6f7275]">
                Standard
              </p>
              <p className="mt-3 text-sm leading-6 text-[#333333]">
                Relentless advocacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}