

import HeroLanding from "@/components/seychells-landing/HeroLanding";

import SeychellesExperienceSection from "@/components/seychells-landing/WellnessProgramsLanding";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

// import LandingVenueSection from "@/components/seychells-landing/landingVenueSection";
import CTASectionLanding from "@/components/seychells-landing/CTASectionLanding";
import SeychellesItinerary from "@/components/seychells-landing/ItenaryLanding";
import SeychellesAbout from "@/components/seychells-landing/Aboutus";
import SeychellesPricing from "@/components/seychells-landing/SeychellesPricing";
import Accommodation from "@/components/seychells-landing/Accomodation";
import SeychellesGallery from "@/components/seychells-landing/SeychellesGalary";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
        <SiteHeader />
            <HeroLanding />
            <SeychellesAbout/>
            <Accommodation/>
            <SeychellesPricing/>
            <SeychellesItinerary/>
            <SeychellesGallery/>
            <SeychellesExperienceSection />
            <CTASectionLanding />
            <SiteFooter />
    </div>
  );
}
