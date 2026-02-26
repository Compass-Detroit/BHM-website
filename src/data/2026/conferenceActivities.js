/**
 * Conference activities (non-speaker events) shown in track schedules.
 * Use 24-hour time format (e.g. "08:00", "13:00") for sorting.
 * Track names must match SessionsSection tracks exactly.
 */
export const conferenceActivities = [
  {
    id: 'level-up-checkin',
    track: 'Level Up',
    title: 'Check-In & Breakfast',
    time: '08:00',
    timeEnd: '09:00',
  },
  {
    id: 'level-up-yoga',
    track: 'Level Up',
    title: 'Morning Mindfulness & Meditative Yoga',
    time: '08:15',
    timeEnd: '08:45',
  },
  {
    id: 'level-up-welcome',
    track: 'Level Up',
    title: 'Welcome & Opening Remarks',
    time: '09:00',
    timeEnd: '09:10',
  },
  {
    id: 'level-up-closing',
    track: 'Level Up',
    title: 'Closing Remarks & Scholarships',
    time: '16:00',
    timeEnd: '16:30',
  },
  // Add more activities for Level Up or other tracks as needed:
  // {
  //   id: 'level-up-lunch',
  //   track: 'Level Up',
  //   title: 'Lunch',
  //   time: '12:00',
  //   timeEnd: '13:00',
  // },
]
