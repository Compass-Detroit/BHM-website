import PropTypes from 'prop-types'
import Timeline from './Timeline'

const devFestSchedule = [
  {
    time: '8:00 AM',
    events: [
      {
        title: 'Check-In & Breakfast',
        description:
          'Fuel up for the exciting day! Grab your badge, enjoy a delicious breakfast, and get ready for an amazing day of learning and networking.',
      },
      {
        title: 'Morning Meditation & Yoga',
        description:
          'Start your day mindfully! Join us for a relaxing meditation and yoga session to energize your body and clear your mind. Namaste!',
      },
    ],
  },
  {
    time: '9:00 AM',
    events: [
      {
        title: 'Opening Remarks',
        description:
          'Welcome to Michigan DevFest 2025! Join us for opening remarks, event overview, and important announcements to kick off the day.',
      },
    ],
  },
  {
    time: '9:15 AM',
    events: [
      {
        title: 'Michigan DevFest Keynote',
        description:
          'Our flagship keynote address! Hear from industry leaders about the latest trends in technology, innovation, and what the future holds for developers.',
      },
    ],
  },
  {
    time: '10:00 AM',
    events: [
      {
        title: 'Sessions & Workshops',
        description:
          'Dive deep into technical sessions and hands-on workshops across multiple tracks. Choose from Build with AI, Innovation, Tech+Design, Level Up, Leadership, and more!',
      },
    ],
  },
  {
    time: '12:00 PM',
    events: [
      {
        title: 'Lunch Break & Networking',
        description:
          'Take a break, enjoy lunch, and connect with fellow developers, speakers, and sponsors. Perfect time to discuss what you learned and make new connections!',
      },
    ],
  },
  {
    time: '1:00 PM',
    events: [
      {
        title: 'Sessions & Workshops',
        description:
          'More amazing sessions continue! Explore advanced topics, get hands-on experience, and learn from experts across all tracks.',
      },
    ],
  },
  {
    time: '5:00 PM',
    events: [
      {
        title: 'Closing Remarks & Prizes',
        description:
          'Wrap up an incredible day! Join us for closing remarks, prize drawings, and final announcements. Thank you for being part of Michigan DevFest 2025!',
      },
    ],
  },
]

const DevFestSchedule = ({ compact = false }) => {
  return <Timeline schedule={devFestSchedule} compact={compact} />
}

DevFestSchedule.propTypes = {
  compact: PropTypes.bool,
}

export default DevFestSchedule
