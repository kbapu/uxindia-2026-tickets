import { SiteNav } from "@/components/tickets/SiteNav";
import { TicketsHero } from "@/components/tickets/TicketsHero";
import { SummitTrackColumn, ForumTrackColumn } from "@/components/tickets/TrackColumn";
import { BundleBanner } from "@/components/tickets/BundleBanner";
import { TicketsFAQ } from "@/components/tickets/TicketsFAQ";
import { PoliciesSection } from "@/components/tickets/PoliciesSection";
import { FooterCTA, SiteFooter } from "@/components/tickets/SiteFooter";
import { summitTiers } from "@/data/summitTiers";
import { forumProfessionalTiers } from "@/data/forumTiers";
import { studentTiers } from "@/data/studentTiers";

export default function TicketsPage() {
  return (
    <>
      <SiteNav />

      <main className="bg-page">
        <TicketsHero />

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
            <SummitTrackColumn tiers={summitTiers} defaultOpenId="summit-seb" />
            <ForumTrackColumn
              professionalTiers={forumProfessionalTiers}
              studentTiers={studentTiers}
              defaultOpenProId="forum-seb-pro"
              defaultOpenStudentId="forum-seb-student"
            />
          </div>
        </section>

        <BundleBanner />
        <PoliciesSection />
        <TicketsFAQ />
        <FooterCTA />
      </main>

      <SiteFooter />
    </>
  );
}
