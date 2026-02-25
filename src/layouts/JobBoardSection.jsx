import PropTypes from 'prop-types'
import { jobBoardData } from '@/data/2026/jobboard'
import Kite from '@/assets/images/icn-kite.png'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

const JobBoardSection = ({ year = new Date().getFullYear() }) => {
  const isCurrentYear = year === new Date().getFullYear()

  return (
    <section
      id="jobboard"
      className="relative flex flex-col justify-center bg-bhm-gold-50 p-8 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      <SectionSkipLink href="#partners">Skip job board</SectionSkipLink>
      <div className="relative w-full pt-0">
        <h2 className="relative z-10 w-full text-center font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl">
          {year && !isCurrentYear ? `${year} ` : ''}Job Board
        </h2>
        <img
          src={Kite}
          alt="Decorative Yellow Kite"
          className="absolute right-2 top-0 z-0 hidden  h-12 sm:right-10 sm:block md:right-14 lg:right-16 lg:h-16"
        />
      </div>

      <div className="mx-auto mb-12 max-w-4xl">
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This job board is made possible by our generous sponsors, ranging from
          local Detroit organizations and regional companies to some of the
          world&apos;s best global tech companies. They voluntarily provide
          exclusive opportunities so you can grow your tech career. You can
          share your resume online, allowing Compass Detroit sponsors to see
          your work and reach out about exciting job opportunities.
        </p>
      </div>

      {/* Job Board Grid - 3x2 layout */}
      <div className="mx-auto mt-8  max-w-7xl px-8 sm:mt-10 md:mt-14 lg:mt-16">
        <div className="grid grid-cols-1 items-stretch gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {/* Company Cards */}
          {jobBoardData.map((company) => (
            <a
              key={company.id}
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
              aria-label={
                company.name === 'Resume Drop'
                  ? 'Submit your resume at https://bit.ly/midevfest-resume-drop (opens in a new tab)'
                  : `Visit ${company.name}'s careers page at ${company.website} (opens in a new tab)`
              }
            >
              <div className="flex h-full min-h-[100px] flex-col items-center gap-6 rounded-2xl bg-yellow-200 p-8 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 sm:flex-row">
                {/* Circular logo container */}
                <div className="flex size-36 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-md">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="size-24 object-contain"
                    loading="lazy"
                  />
                </div>
                {/* Company name */}
                <h3 className="min-w-0 flex-1 pr-4 text-center text-lg font-semibold text-gray-800 sm:text-left sm:text-xl">
                  {company.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

JobBoardSection.propTypes = {
  year: PropTypes.number,
}

export default JobBoardSection
