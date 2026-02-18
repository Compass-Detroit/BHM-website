import { PageLayout } from '@/layouts/PageLayout'
import TeamSection from '@/layouts/TeamSection'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import MembersSection from '@/layouts/MembersSection'
import PartnersSection from '@/layouts/PartnersSection'
import JobBoardSection from '@/layouts/JobBoardSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'

import { partnersData } from '@/data/2026/partners'
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
      <LocationSection />
      <SessionsSection
        year={currentYear}
        speakersData={Speakers2026}
        tracks={[
          'Schedule',
          'Map',
          'Level Up',
          'Build with AI',
          'Leadership',
          'Innovation',
          'AI Foundations',
          'Breakout Sessions',
        ]}
      />

      <MembersSection />

      <SpeakersSection year={currentYear} speakersData={Speakers2026} />
      {/* TODO: Add attendee section */}
      {/* <AttendeeSection /> */}

      <JobBoardSection year={currentYear} />

      <PartnersSection year={currentYear} partnersData={partnersData} />
      <TeamSection year={currentYear} teamData={teamData} />
    </PageLayout>
  )
}

export default Home
