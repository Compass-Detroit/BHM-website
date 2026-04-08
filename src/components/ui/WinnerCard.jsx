import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { scholarshipWinnerShape } from '@/types/scholarships'

const WinnerCard = ({ winner }) => {
  const {
    name,
    position,
    organization,
    conference,
    conferenceUrl,
    awardedBy,
    photo,
  } = winner

  return (
    <article className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-gray-200">
      {/* Avatar */}
      <div className="mb-4 flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-full ring-4 ring-bhm-gold-300">
        <img
          src={photo}
          alt={`Headshot of ${name}`}
          className="size-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Name & bio */}
      <h3 className="text-xl font-semibold text-bhm-neutral-900">{name}</h3>
      <p className="mt-1 text-sm font-medium text-blue-700">{position}</p>
      <p className="mt-0.5 text-xs text-gray-600">{organization}</p>

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
      <p className="mt-4 text-xs text-gray-600">
        Scholarship awarded by{' '}
        <span className="font-semibold text-bhm-neutral-800">{awardedBy}</span>
      </p>
    </article>
  )
}

WinnerCard.propTypes = {
  winner: scholarshipWinnerShape.isRequired,
}

export default WinnerCard
