import BlackHistorySummitSchedule from './BlackHistorySummitSchedule'

export const Schedule = () => {
  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="mb-8 text-center text-3xl font-semibold text-bhm-neutral-800">
          Black History Month Tech Summit Schedule
        </h3>
        <p className="mx-auto mb-6 max-w-4xl text-pretty text-lg text-bhm-neutral-700">
          Full-day summit running 8:00 AM to 4:30 PM, featuring wellness,
          keynote fireside chat, breakout sessions, lunch networking, panel
          discussions, and immersive learning experiences.
        </p>
        <BlackHistorySummitSchedule />
      </div>
    </div>
  )
}

export default Schedule
