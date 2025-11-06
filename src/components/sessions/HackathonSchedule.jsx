// 2025 schedule - grouped by time
const hackathonSchedule = [
  {
    time: '8:00 AM',
    events: [
      {
        title: 'Morning Meditation & Yoga',
        description:
          'Start your day mindfully! Join us for a relaxing meditation and yoga session to energize your body and clear your mind before the hackathon begins. Namaste!',
      },
    ],
  },
  {
    time: '9:00 AM',
    events: [
      {
        title: 'Check-In & Breakfast',
        description:
          'Fuel up for the exciting day! Grab your badge, enjoy a delicious and nutritious breakfast, and mingle with fellow hackers.',
      },
      {
        title: 'AI Hackathon Keynote',
        description:
          'Get inspired! We set the stage for the event. Hear from industry leaders about the latest in AI innovation and what makes a winning hackathon project. Time to dream big!',
      },
    ],
  },
  {
    time: '10:00 AM',
    events: [
      {
        title: 'Office Hours & Workshops',
        description:
          'Level up your skills! Chat with expert mentors and get help turning your ideas into reality. Ask anything!',
      },
    ],
  },
  {
    time: '12:00 PM',
    events: [
      {
        title: 'Lunch Break & Networking',
        description:
          'Recharge and connect! Enjoy a catered lunch while networking with other developers, sponsors, and potential teammates. Great ideas happen over great food!',
      },
    ],
  },
  {
    time: '1:00 PM',
    events: [
      {
        title: 'Office Hours & Workshops',
        description:
          'Keep building! Continue working with mentor support, debug tricky issues, and polish your project. The finish line is in sight!',
      },
    ],
  },
  {
    time: '6:00 PM',
    events: [
      {
        title: 'Presentations & Demos',
        description:
          "Showtime! Present your amazing creations to judges and fellow participants. Time to shine and showcase what you've built!",
      },
    ],
  },
  {
    time: '8:00 PM',
    events: [
      {
        title: 'Judging & Prizes',
        description:
          'The moment of truth! Watch as judges deliberate and winners are announced. Amazing prizes and recognition await the top teams!',
      },
    ],
  },
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
          <div className="space-y-12">
            {hackathonSchedule.map((timeSlot, timeIndex) => (
              <div key={timeSlot.time} className="relative">
                {/* Time badge */}
                <div className="absolute left-0 flex size-16 items-center justify-center rounded-full bg-primary-400 text-sm font-bold text-gray-900 shadow-lg md:left-1/2 md:-translate-x-1/2">
                  <span className="text-center text-xs leading-tight md:text-sm">
                    {timeSlot.time}
                  </span>
                </div>

                {/* Events for this time */}
                <div className="ml-24 space-y-4 md:ml-0">
                  {timeSlot.events.length === 1 ? (
                    // Single event - alternate sides
                    <div
                      className={`group relative w-full cursor-pointer rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl md:w-5/12 ${
                        timeIndex % 2 === 0
                          ? 'md:mr-auto md:pr-12'
                          : 'md:ml-auto md:pl-12'
                      }`}
                    >
                      <h4 className="text-lg font-semibold text-gray-900">
                        {timeSlot.events[0].title}
                      </h4>

                      {/* Tooltip */}
                      <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-lg bg-gray-900 p-3 text-left text-xs font-normal leading-relaxed text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100">
                        <div className="text-gray-300">
                          {timeSlot.events[0].description}
                        </div>
                        {/* Arrow */}
                        <div className="absolute left-1/2 top-full -mt-1 size-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-gray-900" />
                      </div>
                    </div>
                  ) : (
                    // Multiple events for a single time slot - show on both sides
                    <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8">
                      {/* Left */}
                      <div className="group relative w-full cursor-pointer rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl md:w-5/12 md:pr-12">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {timeSlot.events[0].title}
                        </h4>

                        {/* Tooltip */}
                        <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-lg bg-gray-900 p-3 text-left text-xs font-normal leading-relaxed text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100">
                          <div className="text-gray-300">
                            {timeSlot.events[0].description}
                          </div>
                          {/* Arrow */}
                          <div className="absolute left-1/2 top-full -mt-1 size-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-gray-900" />
                        </div>
                      </div>

                      {/* Right */}
                      <div className="group relative w-full cursor-pointer rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl md:w-5/12 md:pl-12">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {timeSlot.events[1].title}
                        </h4>

                        {/* Tooltip */}
                        <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-lg bg-gray-900 p-3 text-left text-xs font-normal leading-relaxed text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100">
                          <div className="text-gray-300">
                            {timeSlot.events[1].description}
                          </div>
                          {/* Arrow */}
                          <div className="absolute left-1/2 top-full -mt-1 size-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-gray-900" />
                        </div>
                      </div>
                    </div>
                  )}
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
