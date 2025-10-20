import PropTypes from 'prop-types'
import { FaXTwitter } from 'react-icons/fa6'

const TwitterHandle = ({ handle, name }) => {
  return (
    <a
      href={`https://twitter.com/${handle}`}
      target="_blank"
      rel="noreferrer"
      className="border-1 flex size-8 items-center justify-center rounded-full border-black bg-white transition-colors hover:bg-gray-300"
      aria-label={`${name ? `${name}'s` : ''} Twitter handle - @${handle}`}
    >
      <FaXTwitter className="size-5 text-black" />
    </a>
  )
}

TwitterHandle.propTypes = {
  handle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TwitterHandle
