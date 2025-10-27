import ContactCTASectionLanding from "@/components/oman/ContactCTASectionLanding";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import OmanVisaFullPage from "@/components/oman/omanVisaSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
           <SiteHeader />
           
            <OmanVisaFullPage/>
           <ContactCTASectionLanding />
           <SiteFooter />
    </div>
  );
}
