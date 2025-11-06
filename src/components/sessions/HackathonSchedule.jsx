// 2025 schedule
const hackathonSchedule = [
  { time: '8:00 AM', title: 'Check-In & Breakfast' },
  { time: '9:00 AM', title: 'Morning Meditation & Yoga' },
  { time: '9:00 AM', title: 'AI Hackathon Keynote' },
  { time: '10:00 AM', title: 'Office Hours & Workshops' },
  { time: '12:00 PM', title: 'Lunch Break & Networking' },
  { time: '1:00 PM', title: 'Office Hours & Workshops' },
  { time: '6:00 PM', title: 'Presentations & Demos' },
  { time: '8:00 PM', title: 'Judging & Prizes' },
]

export const HackathonSchedule = () => {
  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-4xl">
        <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Hackathon Schedule
        </h3>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary-400 via-sky-500 to-primary-400 md:left-1/2" />

          {/* Schedule items */}
          <div className="space-y-8">
            {hackathonSchedule.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center md:justify-center"
              >
                {/* Time badge */}
                <div className="absolute left-0 flex size-16 items-center justify-center rounded-full bg-primary-400 text-sm font-bold text-gray-900 shadow-lg md:left-1/2 md:-translate-x-1/2">
                  <span className="text-center text-xs leading-tight md:text-sm">
                    {item.time}
                  </span>
                </div>

                {/* Content card */}
                <div
                  className={`ml-24 w-full rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? 'md:mr-auto md:pr-12'
                      : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HackathonSchedule
