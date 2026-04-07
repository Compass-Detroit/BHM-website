import PropTypes from 'prop-types'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

/**
 * Returns up to two initials from a full name.
 * e.g. "Mattalyn Darden" → "MD"
 */
const getInitials = (name) => {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}

const WinnerCard = ({ awardee }) => {
  const {
    name,
    position,
    organization,
    conference,
    conferenceUrl,
    awardedBy,
    photo,
  } = awardee

  return (
    <article className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-gray-200">
      {/* Avatar */}
      <div className="mb-4 flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-full ring-4 ring-bhm-gold-300">
        {photo ? (
          <img
            src={photo}
            alt={`Headshot of ${name}`}
            className="size-full object-cover"
          />
        ) : (
          <span
            className="flex size-full items-center justify-center bg-bhm-gold-300 text-3xl font-bold text-bhm-neutral-900"
            aria-hidden="true"
          >
            {getInitials(name)}
          </span>
        )}
      </div>

      {/* Name & bio */}
      <h3 className="text-xl font-semibold text-bhm-neutral-900">{name}</h3>
      <p className="mt-1 text-sm font-medium text-blue-700">{position}</p>
      <p className="mt-0.5 text-xs text-gray-500">{organization}</p>

      {/* Conference link */}
      <a
        href={conferenceUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${conference} — opens in new tab`}
        className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-bhm-gold-100 px-4 py-1.5 text-sm font-semibold text-bhm-neutral-950 ring-1 ring-bhm-gold-400 transition hover:-translate-y-0.5 hover:bg-bhm-gold-200 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
      >
        {conference}
        <FaArrowUpRightFromSquare
          className="size-3 shrink-0"
          aria-hidden="true"
        />
      </a>

      {/* Awarded by */}
      <p className="mt-4 text-xs text-gray-400">
        Scholarship awarded by{' '}
        <span className="font-semibold text-bhm-neutral-800">{awardedBy}</span>
      </p>
    </article>
  )
}

WinnerCard.propTypes = {
  awardee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    conferenceUrl: PropTypes.string.isRequired,
    awardedBy: PropTypes.string.isRequired,
    photo: PropTypes.string,
  }).isRequired,
}

const ScholarshipsSection = ({ awardees = [], orgs = [] }) => {
  return (
    <section
      id="scholarships"
      className="flex flex-col justify-center bg-white px-8 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      <SectionSkipLink href="#jobboard">Skip to job board</SectionSkipLink>

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
        {orgs.length > 0 && (
          <div className="mt-10">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-bhm-neutral-700">
              Made possible by
            </p>
            <ul
              className="flex flex-wrap items-center justify-center gap-10"
              aria-label="Awarding organizations"
            >
              {orgs.map((org) => (
                <li key={org.id}>
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${org.name} — opens in new tab`}
                    className="block transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                  >
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="h-14 object-contain saturate-0 transition-all duration-300 hover:saturate-100"
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
          {awardees.map((awardee) => (
            <li key={awardee.id} className="flex">
              <WinnerCard awardee={awardee} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

ScholarshipsSection.propTypes = {
  awardees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      conference: PropTypes.string.isRequired,
      conferenceUrl: PropTypes.string.isRequired,
      awardedBy: PropTypes.string.isRequired,
      photo: PropTypes.string,
    })
  ),
  orgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
}

export default ScholarshipsSection
