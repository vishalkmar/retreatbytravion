import { Hero } from "@/components/site/Hero";
import { PillarsGrid } from "@/components/site/PillarsGrid";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { listPackages } from "@/lib/seed";
import { PackageCard } from "@/components/site/PackageCard";
import Link from "next/link";
import { Testimonials } from "@/components/site/Testimonials";
import ClientsSection from "@/components/site/ClientsSection";
import WellnessRetreats from "@/components/site/WellnessRetreat";
import CorporateRetreats from "@/components/site/CorporateRetreats";

export default function HomePage() {
  const featured = listPackages().slice(0, 3);

  return (
    <main>
      <Hero />

      <ClientsSection />
      <WellnessRetreats />
      <CorporateRetreats />

      {/* Pillars */}
      {/* <section className="py-24 bg-gradient-subtle">
        <div className="container">
          <PillarsGrid />
        </div>
      </section> */}

      {/* Featured Experiences */}
      <section className="container py-12">
        <div className="relative text-center mb-8 px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <h2
            className="
      text-3xl sm:text-4xl md:text-5xl font-bold 
      bg-gradient-to-r 
      from-[hsl(182_45%_48%_/_0.9)] 
      to-[hsl(130_45%_58%_/_0.9)] 
      bg-clip-text text-transparent
    "
          >
            Featured Experiences
          </h2>

          {/* Right-aligned link */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 sm:right-6 lg:right-8">
            <Link
              href="/retreats/all"
              className="
        text-primary underline 
        text-lg sm:text-base 
        hover:opacity-80 transition
      "
            >
              Explore all
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PackageCard key={p.slug} pkg={p} />
          ))}
        </div>
      </section>

      <Testimonials />
      <WhyChooseUs />
    </main>
  );
}
