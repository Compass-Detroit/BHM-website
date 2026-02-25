import PropTypes from 'prop-types'
import { FaEnvelope } from 'react-icons/fa6'
import CTAButton from '@/components/ui/CTAButton'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

const PartnersSection = ({ partnersData = {}, year }) => {
  const isCurrentYear = year === new Date().getFullYear()

  // Flatten all partners into one list (tiers removed)
  const allPartners = [
    ...(partnersData.platinum || []),
    ...(partnersData.diamond || []),
    ...(partnersData.gold || []),
    ...(partnersData.organizations || []),
    ...(partnersData.partners || []), // optional future field
  ].filter(Boolean)

  const hasPartners = allPartners.length > 0

  return (
    <section
      id="partners"
      className="relative flex flex-col justify-center bg-white p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <SectionSkipLink href="#leadership">
        Skip partners section
      </SectionSkipLink>

      <div className="relative w-full pt-0">
        <h2 className="w-full text-center font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl">
          {year ? `${year} ` : ''}Partners
        </h2>
      </div>

      <div className="mx-auto mt-6 max-w-4xl text-left">
        <p className="text-base text-gray-700 md:text-lg">
          Compass Detroit wouldn&apos;t be possible without the support of our
          amazing partners. Thank you for helping us create an unforgettable
          experience for the tech community.
        </p>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl overflow-hidden transition-all duration-500 ease-in-out sm:mt-10 md:mt-14 lg:mt-16">
        {hasPartners ? (
          <>
            {/* Single Partners Grid */}
            <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {allPartners.map((partner) => (
                <button
                  key={partner.id}
                  className="group relative flex w-full justify-center p-4 transition-transform duration-200 hover:scale-105"
                  onClick={() =>
                    partner.url && window.open(partner.url, '_blank')
                  }
                  type="button"
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="size-full object-contain transition-opacity duration-200 group-hover:opacity-90"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-50 px-6">
                      <p className="text-center text-lg font-semibold text-gray-700">
                        {partner.name}
                      </p>
                    </div>
                  )}

                  <div className="invisible absolute left-0 top-0 flex size-full flex-col items-center justify-center overflow-y-hidden rounded bg-sky-900/80 p-8 text-center text-white backdrop-blur-lg transition-all duration-200 group-hover:visible">
                    <h4 className="mb-2 text-xl font-bold md:text-2xl">
                      {partner.name}
                    </h4>
                    <p className="overflow-y-auto text-left text-lg font-bold md:text-xl">
                      {partner.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* CTA stays the same */}
            <div className="col-span-1 my-8 flex flex-col items-center justify-center space-y-6 text-center text-lg leading-relaxed">
              <p className="text-gray-600">
                We are currently looking for partners for this event.
              </p>
              {year && isCurrentYear && (
                <CTAButton
                  href="mailto:sponsors@midevfest.com?subject=Compass%20Detroit%20Partner%20Inquiry"
                  label="Become a Partner"
                  ariaLabel="Join us as a partner"
                  className="text-xl font-semibold text-bhm-neutral-900"
                  variant="secondary"
                  icon={<FaEnvelope />}
                  iconPosition="left"
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
    </section>
  )
}

PartnersSection.propTypes = {
  partnersData: PropTypes.shape({
    // old tier fields (still supported)
    platinum: PropTypes.array,
    diamond: PropTypes.array,
    gold: PropTypes.array,
    organizations: PropTypes.array,
    // new unified field (optional)
    partners: PropTypes.array,
  }),
  year: PropTypes.number.isRequired,
}

export default PartnersSection
