import PropTypes from 'prop-types'

import { SpeakerProvider } from '@/components/speakers/SpeakerContext'
import SpeakersContent from '@/components/speakers/SpeakersContent'

const SpeakersSection = ({
  speakersData = [],
  year = new Date().getFullYear(),
  defaultExpanded = true,
}) => {
  return (
    <SpeakerProvider speakersData={speakersData}>
      <SpeakersContent year={year} defaultExpanded={defaultExpanded} />
    </SpeakerProvider>
  )
}

SpeakersSection.propTypes = {
  speakersData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      session: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        track: PropTypes.string,
        time: PropTypes.string,
        room: PropTypes.string,
      }),
    })
  ).isRequired,
  year: PropTypes.number,
  logo: PropTypes.string,
  defaultExpanded: PropTypes.bool,
}

export default SpeakersSection
