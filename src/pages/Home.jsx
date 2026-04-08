import { PageLayout } from '@/layouts/PageLayout'
import TeamSection from '@/layouts/TeamSection'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import MembersSection from '@/layouts/MembersSection'
import PartnersSection from '@/layouts/PartnersSection'
import JobBoardSection from '@/layouts/JobBoardSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'
import AttendeeSection from '@/layouts/AttendeeSection'
import ScholarshipsSection from '@/layouts/ScholarshipsSection'

import { partnersData } from '@/data/2026/partners'
import {
  scholarshipOrganizations,
  scholarshipWinners,
} from '@/data/2026/scholarships'
import { SpeakersData as Speakers2026 } from '@/data/2026/speakers'
import { teamData } from '@/data/2026/team'

function Home() {
  const currentYear = new Date().getFullYear()
  return (
    <PageLayout>
      <h1 id="main-heading" className="sr-only">
        Compass Detroit {currentYear}
      </h1>
      <LandingSection />
      <AttendeeSection />
      <LocationSection />
      <SessionsSection
        year={currentYear}
        speakersData={Speakers2026}
        tracks={[
          'Map',
          'Build with AI',
          'Level Up',
          'Leadership',
          'Breakout Sessions',
          'Innovation',
          'AI Foundations',
          'Careers',
        ]}
      />

      <SpeakersSection year={currentYear} speakersData={Speakers2026} />

      <MembersSection />

      <JobBoardSection year={currentYear} />

      <PartnersSection year={currentYear} partnersData={partnersData} />

      <ScholarshipsSection
        winners={scholarshipWinners}
        organizations={scholarshipOrganizations}
      />

      <TeamSection year={currentYear} teamData={teamData} />
    </PageLayout>
  )
}

export default Home
