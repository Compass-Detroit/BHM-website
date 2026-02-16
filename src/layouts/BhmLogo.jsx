import PropTypes from 'prop-types'

import logo from '@/assets/images/icons/blackhistorylogo.png'

const BhmLogo = ({ className, title = 'Black History Month Logo' }) => {
  // textColor is accepted to maintain compatibility with Footer usage, though not used for the PNG
  return <img src={logo} alt={title} className={className} />
}

BhmLogo.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  textColor: PropTypes.string,
}

export default BhmLogo
