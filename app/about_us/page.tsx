import CompanyHistory from "@/components/section/CompanyHistory";
import OurMissionNPurpose from "@/components/section/OurMissionNPurpose";
import OurTeamSection from "@/components/section/OurTeamSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main>
      <CompanyHistory />
      <OurMissionNPurpose />
      <OurTeamSection />
    </main>
  );
}
