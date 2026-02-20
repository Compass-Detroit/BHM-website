import DevLogo from '@/assets/images/icn-dev.png'
import CTAButton from '@/components/ui/CTAButton'
import { FaEnvelope } from 'react-icons/fa6'

const MembersSection = () => {
  return (
    <section
      id="members"
      className="bg-bhm-gold-100 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="flex w-full justify-center pt-0">
        <h2 className="mb-4 w-full text-center font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl">
          Membership
        </h2>
        <img
          src={DevLogo}
          alt=""
          className="h-10 sm:h-12 md:h-14 lg:h-16"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-4xl">
        <p className="prose mt-6  text-lg leading-8 text-gray-600 [text-wrap:pretty]">
          Join Compass Detroit and connect with developers, designers, and
          technologists across the region. Membership is free and open to anyone
          who wants to learn, share, and grow with the community.
        </p>

        <div className="mt-6 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left column — 2/3 width on desktop: Why Join + bullet points */}
          <div className="min-w-0 md:col-span-2">
            <h3 className="mb-4 font-biorhyme text-4xl text-gray-900">
              Why join?
            </h3>
            <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-700">
              <li>Access to workshops, talks, and networking events</li>
              <li>Connect with local tech leaders and peers</li>
              <li>
                Early access to event registration and volunteer opportunities
              </li>
              <li>
                Stay in the loop on Compass Detroit news and community updates
              </li>
            </ul>
          </div>

          {/* Right column — 1/3 width on desktop: Ready to join + CTA */}
          <div className="flex min-w-0 flex-col gap-4 md:col-span-1">
            <p className="text-lg font-semibold text-gray-800">
              Ready to join?
            </p>
            <CTAButton
              href="mailto:hello@compassdetroit.org"
              label="Become a Member"
              target="_self"
              ariaLabel="Email to become a Compass Detroit member"
              className="text-xl font-semibold text-bhm-neutral-900"
              variant="secondary"
              icon={<FaEnvelope />}
              iconPosition="right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembersSection
