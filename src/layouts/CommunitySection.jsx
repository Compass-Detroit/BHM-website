import PropTypes from 'prop-types'

import Kite from '@/assets/images/icn-kite.png'

const CommunitySection = ({ year = new Date().getFullYear() }) => {
  return (
    <section
      id="community"
      className="flex flex-col justify-center bg-white p-8 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative w-full pt-0">
          <h2 className="mb-4 w-full text-center font-biorhyme text-4xl text-black md:mb-6 md:text-5xl lg:text-6xl">
            {year ? `${year} ` : ''}Community
          </h2>
          <img
            src={Kite}
            alt=""
            className="absolute right-2 top-0 h-12 sm:right-10 md:right-14 md:top-0 lg:right-16 lg:top-0 lg:h-16"
          />
        </div>
      </div>
    </section>
  )
}

CommunitySection.propTypes = {
  year: PropTypes.number,
}

export default CommunitySection
