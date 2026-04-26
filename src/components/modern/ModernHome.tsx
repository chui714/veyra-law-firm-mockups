import Link from "next/link";
import ModernHero from "./ModernHero";
import ModernServices from "./ModernServices";
import ModernApproach from "./ModernApproach";
import ModernAttorney from "./ModernAttorney";
import ModernStats from "./ModernStats";
import ModernContactFooter from "./ModernContactFooter";

export default function ModernHome() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <ModernHero />
      <ModernServices />
      <ModernApproach />
      <ModernAttorney />
      <ModernStats />
      <ModernContactFooter />

      <Link
        href="/"
        className="fixed bottom-5 left-5 z-50 hidden border border-[#d8d8d6] bg-[#f8f7f4]/90 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#111111] shadow-sm backdrop-blur transition hover:border-[#111111] md:inline-flex"
      >
        Veyra Digital Concept
      </Link>

    </main>
  );
}