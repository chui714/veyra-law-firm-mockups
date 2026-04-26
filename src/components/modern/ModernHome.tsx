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
    </main>
  );
}