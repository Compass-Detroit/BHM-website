/**
 * Conference activities (non-speaker events) shown in track schedules.
 * Use 24-hour time format (e.g. "08:00", "13:00") for sorting.
 * Track names must match SessionsSection tracks exactly.
 * Adding in or at to the room here instead of forcing 'in' in the ActivityCard component.
 * example: room: 'in (WBC 110-112)' or 'at Lumen Detroit'
 */
export const conferenceActivities = [
  {
    id: 'level-up-checkin',
    track: 'Level Up',
    title: 'Check-In & Breakfast',
    content: null,
    time: '08:00',
    timeEnd: '09:00',
    room: 'in Town Square',
  },
  {
    id: 'level-up-networking',
    track: 'Level Up',
    title: 'Techie Hour & Networking',
    content: null,
    time: '16:30',
    timeEnd: '18:00',
    room: 'at Lumen Detroit',
  },
  {
    id: 'careers-review',
    track: 'Careers',
    title: 'Resume Review & Mock Interviews',
    content: 'Sign Up Here:',
    cta: {
      url: 'https://bit.ly/bhm-26-signup',
      text: 'Get an appointment with a professional',
      ariaLabel:
        'Sign up for resume review and mock interviews -- Link opens in new tab',
    },
    time: '10:00',
    timeEnd: '12:00',
    room: 'in (WBC 110-112)',
  },
  {
    id: 'careers-resume-review',
    track: 'Careers',
    title: 'Resume Review & Mock Interviews',
    content: 'Sign Up Here:',
    cta: {
      url: 'https://bit.ly/bhm-26-signup',
      text: 'Get an appointment with a professional',
      ariaLabel:
        'Sign up for resume review and mock interviews -- Link opens in new tab',
    },
    time: '14:00',
    timeEnd: '16:00',
    room: 'in (WBC 110-112)',
  },
  {
    id: 'careers-mentoring',
    track: 'Careers',
    title: 'Career Mentorship',
    content: 'Sign Up Here:',
    cta: {
      url: 'https://bit.ly/bhm-26-signup',
      text: 'Get an appointment with a mentor',
      ariaLabel: 'Sign up for mentorship -- Link opens in new tab',
    },
    time: '10:00',
    timeEnd: '12:00',
    room: 'in (WBC 110-112)',
  },
  {
    id: 'careers-mentorship',
    track: 'Careers',
    title: 'Career Mentorship',
    content: 'Sign Up Here:',
    cta: {
      url: 'https://bit.ly/bhm-26-signup',
      text: 'Get an appointment with a mentor',
      ariaLabel: 'Sign up for a mentor session -- Link opens in new tab',
    },
    time: '14:00',
    timeEnd: '16:00',
    room: 'in (WBC 104 & 113)',
  },
]
