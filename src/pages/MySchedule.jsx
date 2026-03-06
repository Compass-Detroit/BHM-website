import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import SessionCard from '@/components/sessions/SessionCard'
import { PageLayout } from '@/layouts/PageLayout'
import { sortSessionsByStartTime } from '@/utils/sessionTime'

function MySchedule({ mySchedule = [], onRemoveSession = () => {} }) {
  const sortedSessions = sortSessionsByStartTime(mySchedule)

  return (
    <PageLayout>
      <section className="bg-bhm-gold-50 px-4 pb-24 pt-36 sm:px-10 md:px-14 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <h1
              id="main-heading"
              className="font-biorhyme text-4xl text-bhm-neutral-900 md:text-5xl"
            >
              My Schedule ({sortedSessions.length})
            </h1>
            <Link
              to="/#schedule"
              className="rounded-md border border-sky-900 bg-sky-900 px-4 py-2 text-sm font-semibold text-bhm-gold-50 transition-colors hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
            >
              Back to Sessions
            </Link>
          </div>

          {sortedSessions.length === 0 ? (
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-bhm-neutral-800 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
              <p className="text-lg">
                No saved sessions yet. Add sessions from the schedule to build
                your plan.
              </p>
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-8">
              {sortedSessions.map((session) => (
                <li key={session.id}>
                  <SessionCard
                    speakers={session.speakers || [session.speaker]}
                    speakerAvatars={session.speakerAvatars || []}
                    sessionTitle={session.title}
                    sessionDesc={session.description || ''}
                    sessionTime={session.start}
                    sessionRoom={session.location || ''}
                    sessionDuration={session.sessionDuration || 60}
                    showScheduleAction={true}
                    scheduleActionMode="remove"
                    onToggleSchedule={() => onRemoveSession(session.id)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </PageLayout>
  )
}

MySchedule.propTypes = {
  mySchedule: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      speaker: PropTypes.string,
      start: PropTypes.string,
      end: PropTypes.string,
      track: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
      speakers: PropTypes.arrayOf(PropTypes.string),
      speakerAvatars: PropTypes.arrayOf(PropTypes.string),
      sessionDuration: PropTypes.number,
    })
  ),
  onRemoveSession: PropTypes.func,
}

export default MySchedule
