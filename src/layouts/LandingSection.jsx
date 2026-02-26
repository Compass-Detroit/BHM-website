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
        <div className="relative z-10 mt-12 flex w-full items-center justify-center px-4 xs:mt-28 sm:p-12 lg:mt-0 lg:w-1/2 lg:border-r-4 lg:border-dotted lg:border-bhm-gold-200/50">
          <img
            src={bhmLogo}
            alt="Black History Month 2026 logo"
            className="h-auto w-full max-w-full"
            loading="eager"
          />
        </div>

        <div className="relative z-10 flex w-full flex-col justify-between bg-bhm-black-950/70 lg:w-1/2">
          <div className="flex grow flex-col items-center justify-center space-y-8 px-16 py-20 opacity-100 lg:mt-14">
            <h2 className="font-biorhyme text-5xl text-bhm-gold-200 ">
              February 28, 2026
            </h2>

            <p className="prose text-2xl font-semibold text-bhm-gold-50">
              Compass x NSBE Detroit in partnership with SHPE Detroit, GDG
              Detroit, Women Techmakers, DevOps Detroit, Detroit Hacker House,
              Automation Workz, CCS, IBM, and DTE Energy are hosting a day of
              learning, building, connecting, and celebrating Detroit&apos;s
              tech ecosystem.
            </p>
            <p className="font-regular prose text-xl text-bhm-gold-50">
              Whether you&apos;re a seasoned professional, an ambitious
              innovator, a learner, a leader, or a creative, this is your chance
              to immerse yourself in Detroit&apos;s renaissance and invest in
              the city&apos;s growing tech ecosystem.
            </p>
            <div className="flex flex-row gap-8">
              <CTAButton
                href="https://bit.ly/det-bhm-26-rsvp"
                label="GET TICKETS"
                icon={<FaTicket />}
                ariaLabel="Get your tickets today for BHM Innovation Summit 2026"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSection
