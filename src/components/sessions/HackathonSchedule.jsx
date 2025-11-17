import PropTypes from 'prop-types'
import Timeline from './Timeline'

const hackathonSchedule = [
  {
    time: '8:00 AM',
    events: [
      {
        title: 'Check-In & Breakfast',
        description:
          'Fuel up for the exciting day! Grab your badge, enjoy a delicious and nutritious breakfast, and mingle with fellow hackers.',
      },
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

const HackathonSchedule = ({ compact = false }) => {
  return <Timeline schedule={hackathonSchedule} compact={compact} />
}

HackathonSchedule.propTypes = {
  compact: PropTypes.bool,
}

export default HackathonSchedule
