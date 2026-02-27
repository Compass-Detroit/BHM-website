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
    content: null,
    time: '08:00',
    timeEnd: '09:00',
    room: 'Town Square',
  },
  {
    id: 'level-up-networking',
    track: 'Level Up',
    title: 'Techie Hour & Networking',
    content: null,
    time: '16:30',
    timeEnd: '18:00',
    room: 'Town Square',
  },
  {
    id: 'careers-resume-review1',
    track: 'Careers',
    title: 'Resume Review & Mock Interviews',
    content:
      'Sign Up Here: <a href="https://bit.ly/bhm-26-signup" target="_blank" rel="noopener noreferrer" aria-label="Sign up for resume review and mock interviews -- Link opens in new tab">Get an appointment with a professional</a>',
    time: '10:00',
    timeEnd: '12:00',
    room: '(WBC 110-112)',
  },
  {
    id: 'careers-resume-review2',
    track: 'Careers',
    title: 'Resume Review & Mock Interviews',
    content:
      'Sign Up Here: <a href="https://bit.ly/bhm-26-signup" target="_blank" rel="noopener noreferrer" aria-label="Sign up for resume review and mock interviews -- Link opens in new tab">Get an appointment with a professional</a><br />',
    time: '14:00',
    timeEnd: '16:00',
    room: '(WBC 110-112)',
  },
  {
    id: 'careers-resume-mentorship1',
    track: 'Careers',
    title: 'Career Mentorship',
    content:
      'Sign Up Here: <a href="https://bit.ly/bhm-26-signup" target="_blank" rel="noopener noreferrer" aria-label="Sign up for mentorship -- Link opens in new tab">Get an appointment with a mentor</a>',
    time: '10:00',
    timeEnd: '12:00',
    room: '(WBC 110-112)',
  },
  {
    id: 'careers-mentorship2',
    track: 'Careers',
    title: 'Career Mentorship',
    content:
      'Sign Up Here: <a href="https://bit.ly/bhm-26-signup" target="_blank" rel="noopener noreferrer" aria-label="Sign up for a mentor session -- Link opens in new tab">Get an appointment with a mentor</a><br />',
    time: '14:00',
    timeEnd: '16:00',
    room: '(WBC 104 & 113)',
  },
]
