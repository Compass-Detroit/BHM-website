import PropTypes from 'prop-types'

export const scholarshipOrganizationShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
})

export const scholarshipWinnerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  conference: PropTypes.string.isRequired,
  conferenceUrl: PropTypes.string.isRequired,
  awardedBy: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
})
