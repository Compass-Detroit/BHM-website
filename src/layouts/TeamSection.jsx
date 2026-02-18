import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import DevLogo from '@/assets/images/icn-dev.png'
import LinkedInHandle from '@/components/ui/LinkedInHandle'
import SectionSkipLink from '@/components/ui/SectionSkipLink'
import GithubHandle from '@/components/ui/GithubHandle'
import Star from '@/assets/images/icons/star.svg'
import TwitterHandle from '@/components/ui/TwitterHandle'
import { FaCodeCommit } from 'react-icons/fa6'

const TeamSection = ({ teamData, year }) => {
  const [selectedBio, setSelectedBio] = useState(null)
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)

  // Sort: event runners (starred) first, then top website contributors, then everyone else
  // Within each group, sort alphabetically by name
  const getSortTier = (dev) => {
    if (dev.star) return 0 // Event runners
    if (dev.topContributor) return 1 // Top website contributors
    return 2
  }
  const sortedTeamData = [...teamData].sort((a, b) => {
    const tierA = getSortTier(a)
    const tierB = getSortTier(b)
    if (tierA !== tierB) return tierA - tierB
    return a.name.localeCompare(b.name)
  })

  // Get ribbon color based on role
  const getRibbonColor = (role) => {
    const colors = {
      organizer: 'bg-red-700',
      facilitator: 'bg-green-700',
      devteam: 'bg-sky-700',
      marketing: 'bg-fuchsia-700',
    }
    return colors[role] || 'bg-primary-700'
  }

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedBio) {
        setSelectedBio(null)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [selectedBio])

  // Focus management and body scroll lock
  useEffect(() => {
    if (selectedBio) {
      // Lock body scroll
      document.body.style.overflow = 'hidden'

      // Focus the close button when modal opens
      closeButtonRef.current?.focus()
    } else {
      // Restore body scroll
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedBio])

  const teamCount = teamData.length

  return (
    <section
      id="leadership"
      className="relative bg-primary-50 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <SectionSkipLink href="#page-footer">Skip to footer</SectionSkipLink>
      <div className="flex w-full justify-center pt-0">
        <h2 className="mb-4 w-full text-center font-biorhyme text-4xl text-black md:mb-6 md:text-5xl lg:text-6xl">
          {year ? `${year} ` : ''}Leadership Team
        </h2>
        <img
          src={DevLogo}
          alt=""
          className="h-10 sm:h-12 md:h-14 lg:h-16"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto flex max-w-full justify-center lg:mx-0">
        <p className="prose mt-6 max-w-4xl text-left text-lg/8 text-gray-600 [text-wrap:pretty]">
          Our team of {teamCount} includes GDG organizers, session facilitators,
          and web developers — a mix of university students and industry
          professionals from companies like IBM, Little Caesars, and tech
          entrepreneurs with deep expertise in the tech industry. Together, we
          are bringing <strong>Compass Detroit, Michigan</strong> to life.
        </p>
      </div>

      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-center  lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            {sortedTeamData.map((dev) => {
              // Build ribbon class name - eslint-disable needed for dynamic class
              // eslint-disable-next-line tailwindcss/no-custom-classname
              const ribbonClass = `ribbon-${dev.devfest}`
              return (
                <li
                  key={`dev-${dev.id}`}
                  className="relative rounded-xl border border-gray-200 bg-white shadow-lg"
                >
                  {/* Content wrapper with overflow hidden for ribbon clipping */}
                  <div className="relative overflow-hidden rounded-xl p-4 pb-12">
                    {/* Star Icon - behind ribbon */}
                    {dev.star && (
                      <img
                        src={Star}
                        alt=""
                        className="absolute right-1 top-1 z-0 size-8 -rotate-45 opacity-80"
                        aria-hidden="true"
                      />
                    )}
                    {/* Ribbon Label */}
                    <div
                      className={`${ribbonClass} absolute -right-10 top-6 z-[1] w-40 rotate-45 ${getRibbonColor(
                        dev.devfest
                      )} py-1 text-center text-sm font-bold uppercase tracking-wide text-white shadow-md`}
                      aria-label={`Role: ${dev.devfest}`}
                    >
                      {dev.devfest}
                    </div>
                    <div className="flex flex-col items-center xs:flex-row xs:items-start">
                      <div className="flex shrink-0 flex-col items-center xs:w-24">
                        <img
                          alt={`${dev.name} avatar`}
                          src={dev.avatar}
                          className="size-24 rounded-full outline outline-1 -outline-offset-1 outline-black/5"
                        />
                        <div className="mt-2 flex w-24 shrink-0 flex-wrap items-center justify-center gap-1">
                          {dev.linkedin && (
                            <LinkedInHandle
                              handle={dev.linkedin}
                              absolute={false}
                            />
                          )}
                          {dev.github && (
                            <GithubHandle
                              handle={dev.github}
                              absolute={false}
                            />
                          )}
                          {dev.twitter && (
                            <TwitterHandle
                              handle={dev.twitter}
                              name={dev.name}
                              absolute={false}
                            />
                          )}
                          {dev.commits != null && dev.commits > 0 && (
                            <span
                              className="flex w-24 shrink-0 items-center justify-center gap-1 rounded-full bg-white px-2 py-1 text-xs text-gray-600"
                              title="Commits to this site"
                            >
                              <span
                                aria-label={`${dev.commits.toLocaleString()} commits to this site`}
                              >
                                &gt;&nbsp;{dev.commits.toLocaleString()}
                              </span>
                              <FaCodeCommit
                                className="size-4 text-black"
                                aria-hidden="true"
                              />
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col items-center gap-2 xs:ml-4 xs:mt-0 xs:items-start xs:justify-center">
                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900 xs:mt-6">
                          {dev.name}
                        </h3>
                        <p className="prose text-center text-sm/6 text-gray-600 [text-wrap:pretty] xs:text-left">
                          {dev.organization}
                        </p>
                        {dev.university && (
                          <p className="prose text-center text-sm/6 text-gray-600 [text-wrap:pretty] xs:text-left">
                            {dev.university}
                          </p>
                        )}
                        <p className="prose text-center text-sm/6 font-semibold text-gray-600 [text-wrap:pretty] xs:text-left">
                          {dev.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Button positioned relative to card, outside overflow container */}
                  {dev.bio && (
                    <button
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-700 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      onClick={() =>
                        setSelectedBio({ name: dev.name, bio: dev.bio })
                      }
                      aria-label={`View bio for ${dev.name}`}
                    >
                      View Bio
                    </button>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Bio Modal */}
      {selectedBio && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="presentation"
          onClick={(e) => {
            // Only close if clicking the backdrop, not the modal content
            if (e.target === e.currentTarget) {
              setSelectedBio(null)
            }
          }}
        >
          <div
            ref={modalRef}
            className="relative max-w-lg rounded-lg bg-white p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              ref={closeButtonRef}
              className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              onClick={() => setSelectedBio(null)}
              aria-label="Close dialog"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3
              id="modal-title"
              className="mb-4 pr-8 text-xl font-semibold text-gray-900"
            >
              {selectedBio.name}
            </h3>
            <p className="prose text-left text-gray-700 [text-wrap:pretty]">
              {selectedBio.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

TeamSection.propTypes = {
  teamData: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
}

export default TeamSection
