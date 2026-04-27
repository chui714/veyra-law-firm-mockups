import Link from "next/link";
import TraditionalHero from "./TraditionalHero";
import CredibilityStrip from "./CredibilityStrip";
import NewsResultsStrip from "./NewsResultsStrip";
import PracticeAreas from "./PracticeAreas";
import TraditionalMonogram from "./TraditionalMonogram";
import QuoteSection from "./QuoteSection";
import ContactFooter from "./ContactFooter";

export default function TraditionalHome() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#111111]">
      <TraditionalHero />
      <CredibilityStrip />
      <NewsResultsStrip />
      <PracticeAreas />
      <TraditionalMonogram />
      <QuoteSection />
      <ContactFooter />

      <Link
        href="/"
        className="fixed bottom-5 left-5 z-50 hidden border border-[#d8d8d6] bg-[#f8f7f4]/90 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#111111] shadow-sm backdrop-blur transition hover:border-[#111111] md:inline-flex"
      >
        Veyra Digital Concept
      </Link>

    </main>
  );
}