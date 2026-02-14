import Kite from '@/assets/images/icn-kite.png'
import LogoLoop from '@/components/LogoLoop'
import CTAButton from '@/components/ui/CTAButton'
import PropTypes from 'prop-types'
import { useState } from 'react'
const PartnersSection = ({ partnersData = {}, year }) => {
  const isCurrentYear = year === new Date().getFullYear()
  const [tooltip, setTooltip] = useState(null)
  // Check if there's any partner data
  // Check if there's any partner data
  const hasPartners =
    (partnersData.platinum && partnersData.platinum.length > 0) ||
    (partnersData.diamond && partnersData.diamond.length > 0) ||
    (partnersData.gold && partnersData.gold.length > 0) ||
    (partnersData.organizations && partnersData.organizations.length > 0)

  const handleMouseEnter = (e, partner) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltip({
      x: rect.right + 10,
      y: rect.top + rect.height / 2,
      partner,
    })
  }

  const handleMouseLeave = () => {
    setTooltip(null)
  }

  const renderPartnerItem = (partner) => (
    <div
      className="group relative flex w-full items-center justify-center p-4"
      onMouseEnter={(e) => handleMouseEnter(e, partner)}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="block w-full transition-transform duration-200 hover:scale-105 focus:outline-none"
        onClick={() => partner.url && window.open(partner.url, '_blank')}
        aria-label={`Visit ${partner.name}`}
      >
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.name}
            className="mx-auto h-24 w-auto object-contain transition-all duration-300"
            loading="lazy"
          />
        ) : (
          <div className="mx-auto flex h-24 w-40 items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-50 px-4 text-center font-semibold text-gray-700">
            {partner.name}
          </div>
        )}
      </button>
    </div>
  )

  return (
    <section
      id="partners"
      className="relative flex flex-col justify-center bg-white p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="relative w-full pt-0">
        <h2 className="w-full text-center font-biorhyme text-4xl text-black md:text-5xl lg:text-6xl">
          {year ? `${year} ` : ''}Partners
        </h2>
        <img
          src={Kite}
          alt="Partners"
          className="absolute right-0 top-0 h-10 sm:h-12 md:h-14 lg:h-16"
          loading="lazy"
        />
      </div>
      <div className="mx-auto mt-6 max-w-4xl text-left">
        <p className="text-base text-gray-700 md:text-lg">
          Compass Detroit wouldn&apos;t be possible without the support of our
          amazing partners. Thank you for helping us create an unforgettable
          experience for the tech community.
        </p>
      </div>

      <div className="mt-8  overflow-hidden transition-all duration-500 ease-in-out sm:mt-10 md:mt-14 lg:mt-16">
        {hasPartners ? (
          <>
            {/* Platinum Sponsors - Horizontal Loop */}
            {partnersData.platinum && partnersData.platinum.length > 0 && (
              <div className="mb-12 w-full">
                <h3 className="mb-6 py-4 text-center font-biorhyme text-5xl text-black">
                  Platinum Sponsor
                </h3>
                <div className="flex w-full justify-center">
                  {partnersData.platinum.map((partner) => (
                    <div key={partner.id} className="w-80">
                      {renderPartnerItem(partner)}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Diamond, Gold, Organizations - 3 Column Grid */}
            <div className="grid w-full gap-16 md:grid-rows-3">
              <div className="flex flex-col overflow-hidden rounded-xl bg-gray-50/50 px-6 py-8">
                <h3 className="mb-6 text-center font-biorhyme text-2xl text-black">
                  Diamond
                </h3>
                <div className="w-full overflow-hidden">
                  <LogoLoop
                    logos={partnersData.diamond}
                    renderItem={renderPartnerItem}
                    direction="right"
                    speed={30}
                    pauseOnHover
                  />
                </div>
              </div>

              <div className="flex flex-col overflow-hidden rounded-xl bg-gray-50/50 px-6 py-8">
                <h3 className="mb-6 text-center font-biorhyme text-2xl text-black">
                  Gold
                </h3>
                <div className="w-full overflow-hidden">
                  <LogoLoop
                    logos={partnersData.gold}
                    renderItem={renderPartnerItem}
                    direction="right"
                    speed={35}
                    pauseOnHover
                  />
                </div>
              </div>

              <div className="flex flex-col overflow-hidden rounded-xl bg-gray-50/50 px-6 py-8">
                <h3 className="mb-6 text-center font-biorhyme text-2xl text-black">
                  Organizations
                </h3>
                <div className="w-full overflow-hidden">
                  <LogoLoop
                    logos={partnersData.organizations}
                    renderItem={renderPartnerItem}
                    direction="right"
                    speed={25}
                    pauseOnHover
                  />
                </div>
              </div>
            </div>

            <div className="col-span-1 my-8 flex flex-col items-center justify-center space-y-6 text-center text-lg leading-relaxed">
              <p className="text-gray-600">
                We are currently looking for partners for this event.
              </p>
              {year && isCurrentYear && (
                <CTAButton
                  href="mailto:sponsors@midevfest.com"
                  label="Become a Partner"
                  target="_self"
                />
              )}
            </div>
          </>
        ) : (
          <div className="col-span-1 my-8 flex flex-col items-center justify-center space-y-6 text-center text-lg leading-relaxed">
            <p className="text-gray-600">
              {year && !isCurrentYear
                ? `No partner information available for ${year}.`
                : 'We are currently looking for partners for this event.'}
            </p>
            {year && isCurrentYear && (
              <CTAButton
                href="mailto:sponsors@midevfest.com"
                label="Become a Partner"
                target="_self"
              />
            )}
          </div>
        )}
      </div>

      {/* Fixed Tooltip Portal */}
      {tooltip && (
        <div
          className="fixed z-[100] w-64 rounded-lg bg-gray-900 p-4 text-left text-white shadow-xl"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translateY(-50%)',
          }}
        >
          {/* Tooltip arrow */}
          <div className="absolute -left-2 top-1/2 -mt-2 size-4 -rotate-45 bg-gray-900"></div>
          <h4 className="mb-1 text-lg font-bold">{tooltip.partner.name}</h4>
          <p className="text-sm text-gray-300">{tooltip.partner.desc}</p>
        </div>
      )}
    </section>
  )
}

PartnersSection.propTypes = {
  partnersData: PropTypes.shape({
    platinum: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        logo: PropTypes.string,
        desc: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
      })
    ),
    diamond: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        logo: PropTypes.string,
        desc: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
      })
    ),
    gold: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        logo: PropTypes.string,
        desc: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
      })
    ),
    organizations: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        logo: PropTypes.string,
        desc: PropTypes.string.isRequired,
        url: PropTypes.string,
        tier: PropTypes.string.isRequired,
      })
    ),
  }),
  year: PropTypes.number.isRequired,
}
export default PartnersSection
