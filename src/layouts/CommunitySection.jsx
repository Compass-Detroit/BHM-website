import PropTypes from 'prop-types'

const CommunitySection = ({ year = new Date().getFullYear() }) => {
  return (
    <section
      id="community"
      className="flex flex-col justify-center bg-white p-8 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative w-full pt-0">
          <h2 className="mb-4 w-full text-center font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl">
            {year ? `${year} ` : ''}Community
          </h2>
        </div>
      </div>
    </section>
  )
}

CommunitySection.propTypes = {
  year: PropTypes.number,
}

export default CommunitySection
