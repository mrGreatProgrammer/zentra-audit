import BenefitsOfWorkingWithUs from "@/components/section/BenefitsOfWorkingWithUs";
import Comments from "@/components/section/Comments";
import ContactsSection from "@/components/section/ContactsSection";
import HeroSection from "@/components/section/HeroSection";
import ProcessWorking from "@/components/section/ProcessWorking";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsOfWorkingWithUs />
      <ProcessWorking />
      <Comments />
      <ContactsSection />
    </main>
  );
}
