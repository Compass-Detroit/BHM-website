import PropTypes from 'prop-types'
import SectionSkipLink from '@/components/ui/SectionSkipLink'
import WinnerCard from '@/components/ui/WinnerCard'
import {
  scholarshipOrganizationShape,
  scholarshipWinnerShape,
} from '@/types/scholarships'

const ScholarshipsSection = ({ winners = [], organizations = [] }) => {
  return (
    <section
      id="scholarships"
      className="flex flex-col justify-center bg-white px-8 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      <SectionSkipLink href="#leadership">
        Skip scholarship winners section
      </SectionSkipLink>

      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-4 text-center">
          <h2 className="font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl">
            Conference Scholarship Winners
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            At our latest conference, we had the incredible honor of announcing
            scholarship ticket winners to some of the most exciting tech
            conferences in the industry. These community members are a shining
            example of what&rsquo;s possible when you show up, get involved, and
            invest in yourself and those around you.
          </p>
        </div>

        {/* Awarding organizations */}
        {organizations.length > 0 && (
          <div className="mt-10">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-bhm-neutral-700">
              Made possible by
            </p>
            <ul
              className="flex flex-wrap items-center justify-center gap-10"
              aria-label="Awarding organizations"
            >
              {organizations.map((organization) => (
                <li key={organization.id}>
                  <a
                    href={organization.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${organization.name} — opens in new tab`}
                    className="block transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                  >
                    <img
                      src={organization.logo}
                      alt={organization.name}
                      className="h-14 object-contain saturate-0 transition-all duration-300 hover:saturate-100"
                      loading="lazy"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Winners grid */}
        <ul
          className="mt-14 grid list-none grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Scholarship winners"
        >
          {winners.map((winner) => (
            <li key={winner.id} className="flex">
              <WinnerCard winner={winner} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

ScholarshipsSection.propTypes = {
  winners: PropTypes.arrayOf(scholarshipWinnerShape),
  organizations: PropTypes.arrayOf(scholarshipOrganizationShape),
}

export default ScholarshipsSection
