import CTAButton from '@/components/ui/CTAButton'
import BHM2026BGImage from '@/assets/images/bhm2026.webp'
import bhmLogo from '@/assets/images/bhmLogo.svg'
import { FaTicket } from 'react-icons/fa6'

function LandingSection() {
  return (
    <section id="landing" className="relative mt-16 bg-bhm-neutral-950">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${BHM2026BGImage})` }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col lg:flex-row">
        <div className="relative z-10 mt-28 flex w-full items-center justify-center p-12 lg:mt-0 lg:w-1/2 lg:border-r-4 lg:border-dotted lg:border-bhm-gold-200/50">
          <img
            src={bhmLogo}
            alt="Black History Month 2026 logo"
            className="h-auto w-full max-w-full"
            loading="eager"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 flex w-full flex-col justify-between lg:w-1/2">
          <div className="flex grow flex-col items-center justify-center space-y-8 px-16 py-20 text-bhm-gold-100 opacity-100 lg:mt-14">
            <h2 className="font-biorhyme text-4xl font-bold text-bhm-gold-200">
              February 28, 2026
            </h2>

            <p className="prose text-xl font-bold text-bhm-gold-200 lg:text-base xl:text-lg">
              The Detroit, Ann Arbor, Toledo, UofM Dearborn and Windsor GDGs are
              teaming up with Compass Detroit to bring you the Compass Detroit
              conference on February 28, 2026.
            </p>
            <p className="prose text-xl font-bold lg:text-base xl:text-lg">
              Join us Saturday, February 28th for the Compass Detroit
              conference. With this year&apos;s event, we aim to put together a
              great weekend of networking, innovation, and knowledge sharing for
              all involved.
            </p>
            <div className="flex flex-row gap-8">
              <CTAButton
                href="https://bit.ly/det-bhm-26-rsvp"
                label="GET TICKETS"
                icon={<FaTicket />}
                ariaLabel="Get your tickets today for Michigan DevFest 2025"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSection
