import PropTypes from 'prop-types'
import Timeline from './Timeline'

const blackHistorySummitSchedule = [
  {
    time: '8:00 AM',
    events: [
      {
        title: 'Check-In & Breakfast',
        description:
          'In-person session. Grab your badge, enjoy a delicious breakfast, and get ready for an amazing day of learning and networking.',
      },
      {
        title: 'Mindfulness & Meditative Yoga',
        description:
          'In-person session. Start your day mindfully with a relaxing meditation and yoga session to energize your body and clear your mind.',
      },
    ],
  },
  {
    time: '9:00 AM',
    events: [
      {
        title: 'Welcome & Opening Remarks',
        description:
          'In-person session. Join us for the official welcome and opening remarks to kick off the Black History Month Tech Summit.',
      },
    ],
  },
  {
    time: '9:15 AM',
    events: [
      {
        title:
          "Powering Detroit's Future: AI-Driven Energy Innovation Fireside Chat with DTE x IBM",
        description:
          "Innovation Summit Keynote (Virtual & In-person) at Town Square. A fireside chat with leaders from DTE and IBM on how AI is transforming Michigan's energy future, advancing equity, supporting climate goals, and creating new workforce opportunities.",
      },
    ],
  },
  {
    time: '10:00 AM',
    events: [
      {
        title: 'Sessions',
        description:
          'Multiple tracks running simultaneously: Level Up (Town Square), Build with AI (SB 120), Leadership (275 & 278), Innovation (WCB 103), AI Foundations (WCB 105), and Breakout Sessions (255).',
      },
    ],
  },
  {
    time: '12:00 PM',
    events: [
      {
        title: 'Lunch Break & Networking',
        description:
          'In-person session. Take a break, enjoy lunch, and connect with fellow attendees, speakers, and sponsors.',
      },
    ],
  },
  {
    time: '1:00 PM',
    events: [
      {
        title: 'Innovation Summit Panel Discussion',
        description:
          'Virtual & In-person panel discussion featuring industry leaders sharing insights on tech leadership, innovation, and community impact.',
      },
    ],
  },
  {
    time: '2:00 PM',
    events: [
      {
        title: 'Sessions',
        description:
          'Multiple tracks running simultaneously: Level Up (Town Square), Build with AI (SB 120), Leadership (275 & 278), Innovation (WCB 103), AI Foundations (WCB 105), and Breakout Sessions (255).',
      },
    ],
  },
  {
    time: '4:00 PM',
    events: [
      {
        title: 'Closing Remarks & Prizes',
        description:
          'In-person session. Join us for closing remarks, prize drawings, and final announcements.',
      },
    ],
  },
  {
    time: '4:30 PM',
    events: [
      {
        title: 'Tech Hour & Networking at Lumen Detroit',
        description:
          'In-person session. Wind down the day with networking and connect with fellow tech professionals.',
      },
    ],
  },
]

const BlackHistorySummitSchedule = ({ compact = false }) => {
  return <Timeline schedule={blackHistorySummitSchedule} compact={compact} />
}

BlackHistorySummitSchedule.propTypes = {
  compact: PropTypes.bool,
}

export default BlackHistorySummitSchedule
