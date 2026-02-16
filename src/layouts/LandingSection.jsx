import CTAButton from '@/components/ui/CTAButton'
import { FaTicket } from 'react-icons/fa6'
function LandingSection() {
  return (
    <section id="landing" className="mt-16 bg-indigo-950">
      <div className="mx-auto flex max-w-[1554px] flex-wrap">
        <div className="mx-auto mt-4 flex w-full items-center justify-center  bg-white p-6 shadow-lg md:p-12 lg:mt-0 lg:w-1/2">
          {/* The logo is a PNG, so textColor is not used, but we maintain the prop for compatibility with Footer usage */}
          <h1 className="text-asimovian text-center text-4xl font-bold text-black md:text-5xl lg:text-7xl">
            A Black History Month Innovation Summit
          </h1>
        </div>
        <div className="flex w-full flex-col justify-between bg-pumpkin text-black lg:w-1/2">
          <div className="flex grow flex-col items-center justify-center space-y-8 p-6 md:p-10">
            <h2 className="text-center font-biorhyme text-2xl font-bold md:text-4xl">
              February 28, 2026
            </h2>

            <p className="prose text-justify text-sm font-normal text-[#073d5d] lg:text-base xl:text-lg">
              The Detroit, Ann Arbor, Toledo, UofM Dearborn and Windsor GDGs are
              teaming up with Compass Detroit to bring you the Compass Detroit
              conference on February 28, 2026.
            </p>
            <p className="prose text-justify text-sm font-normal text-[#0c4a6e] lg:text-base xl:text-lg">
              Join us Saturday, February 28th for the Compass Detroit
              conference. With this year&apos;s event, we aim to put together a
              great weekend of networking, innovation, and knowledge sharing for
              all involved.
            </p>
            <div className="flex flex-row gap-8">
              <CTAButton
                href="https://bit.ly/midevfest25"
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
