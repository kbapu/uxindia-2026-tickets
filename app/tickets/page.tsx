import { SiteNav } from "@/components/tickets/SiteNav";
import { SummitTrackColumn, ForumTrackColumn } from "@/components/tickets/TrackColumn";
import { BundleBanner } from "@/components/tickets/BundleBanner";
import { TicketsFAQ } from "@/components/tickets/TicketsFAQ";
import { PoliciesSection } from "@/components/tickets/PoliciesSection";
import { FooterCTA, SiteFooter } from "@/components/tickets/SiteFooter";
import { summitTiers, summitAddOn } from "@/data/summitTiers";
import { forumProfessionalTiers, forumAddOn } from "@/data/forumTiers";
import { studentTiers } from "@/data/studentTiers";

export default function TicketsPage() {
  return (
    <>
      <SiteNav />

      <main className="bg-page">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <SummitTrackColumn
            tiers={summitTiers}
            defaultOpenId="summit-seb"
            addOn={summitAddOn}
          />
          <ForumTrackColumn
            professionalTiers={forumProfessionalTiers}
            studentTiers={studentTiers}
            defaultOpenProId="forum-seb-pro"
            defaultOpenStudentId="forum-seb-student"
            addOn={forumAddOn}
          />
        </div>

        <BundleBanner />
        <TicketsFAQ />
        <PoliciesSection />
        <FooterCTA />
      </main>

      <SiteFooter />
    </>
  );
}
