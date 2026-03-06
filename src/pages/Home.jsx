import PropTypes from 'prop-types'

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

import { partnersData } from '@/data/2026/partners'
import { SpeakersData as Speakers2026 } from '@/data/2026/speakers'
import { teamData } from '@/data/2026/team'

function Home({ mySchedule = [], onToggleSchedule = () => {} }) {
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
        mySchedule={mySchedule}
        onToggleSchedule={onToggleSchedule}
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
      <TeamSection year={currentYear} teamData={teamData} />
    </PageLayout>
  )
}

Home.propTypes = {
  mySchedule: PropTypes.arrayOf(PropTypes.object),
  onToggleSchedule: PropTypes.func,
}

export default Home
