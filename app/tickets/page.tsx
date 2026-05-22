import { SiteNav } from "@/components/tickets/SiteNav";
import { TicketsArcHero } from "@/components/tickets/layout/TicketsArcHero";
import { SummitTrackColumn } from "@/components/tickets/layout/SummitTrackColumn";
import { ForumTrackColumn } from "@/components/tickets/layout/ForumTrackColumn";
import { BundleBanner } from "@/components/tickets/BundleBanner";
import { TicketsFAQ } from "@/components/tickets/TicketsFAQ";
import { PoliciesSection } from "@/components/tickets/PoliciesSection";
import { SiteFooter } from "@/components/tickets/SiteFooter";
import { summitTiers } from "@/data/summitTiers";
import { forumProfessionalTiers } from "@/data/forumTiers";
import { studentTiers } from "@/data/studentTiers";

export default function TicketsPage() {
  return (
    <div className="bg-page">
      <SiteNav />

      <main className="min-h-screen pb-24">
        <TicketsArcHero />

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-8">
            <SummitTrackColumn tiers={summitTiers} />
            <ForumTrackColumn
              professionalTiers={forumProfessionalTiers}
              studentTiers={studentTiers}
            />
          </div>

          <div className="mt-14">
            <BundleBanner />
          </div>
        </section>

        <PoliciesSection />
        <TicketsFAQ />
      </main>

      <SiteFooter />
    </div>
  );
}
