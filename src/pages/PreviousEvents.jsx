import { useEffect, useState } from 'react'
import { PageLayout } from '@/layouts/PageLayout'

const PreviousEvents = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <PageLayout>
      <section
        aria-labelledby="main-heading"
        className={`mb-[-224px] bg-bhm-gold-100 pt-72 transition-[opacity,transform] duration-1000 ease-out dark:bg-bhm-gold-100 ${
          isVisible ? '-translate-y-56 opacity-100' : 'translate-y-24 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center px-8 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-16 lg:py-24">
          <h1
            id="main-heading"
            className="mb-8 text-center font-biorhyme text-4xl font-bold text-primary-800 md:text-5xl lg:text-6xl"
          >
            Compass Detroit Past Events
          </h1>

          <p className="prose mx-auto max-w-prose  text-2xl leading-relaxed text-primary-950">
            Compass Detroit is a community-driven event connecting tech
            enthusiasts, professionals, and students to network and explore
            industry trends. Our organization, Compass, stands for the
            collective of minority professionals and STEAM societies in
            Michigan. Through various speakers and workshops, the event
            highlights local talent and fosters a tradition of collaborative
            learning.
          </p>

          <h2 className="mt-8 text-center font-biorhyme text-4xl font-bold text-bhm-neutral-700">
            Black History Month: Innovation Summit
          </h2>
          <p className="prose mx-auto mt-4 max-w-prose  text-lg leading-relaxed text-bhm-neutral-700">
            The{' '}
            <a
              href="https://bhmtechsummit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary-800 underline hover:text-primary-600"
            >
              Black History Month Innovation Summit
            </a>{' '}
            launches our programming year each February. This event centers the
            contributions of Black technologists, founders, and leaders while
            examining innovation through the lens of equity and access.
          </p>
          <p className="mx-auto mt-4 max-w-prose  text-lg leading-relaxed text-bhm-neutral-700">
            The summit blends keynote talks, career-focused panels, and
            workforce-oriented workshops, with a strong emphasis on mentorship
            and industry readiness. It serves as both a celebration and a call
            to action, strengthening pathways for emerging talent entering the
            tech ecosystem.
          </p>

          <h2 className="mt-8 text-center font-biorhyme text-4xl font-bold text-bhm-neutral-700">
            Women Techmakers: International Women&apos;s Day
          </h2>
          <p className="prose mx-auto mt-4 max-w-prose text-lg leading-relaxed text-bhm-neutral-700">
            Held in the spring, our{' '}
            <a
              href="https://gdg.community.dev/iwd/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary-800 underline hover:text-primary-600"
            >
              Women Techmakers International Women&apos;s Day
            </a>{' '}
            event focuses on advancing women in technology across disciplines.
            This gathering creates space for dialogue around leadership,
            visibility, and sustainable career growth in technical and executive
            roles.
          </p>
          <p className="mx-auto mt-4 max-w-prose  text-lg leading-relaxed text-bhm-neutral-700">
            The program features practitioner-led talks, community spotlights,
            and interactive sessions designed to foster peer support and
            long-term professional connection. The emphasis is on
            representation, advancement, and strengthening the pipeline of women
            shaping Michigan&apos;s tech landscape.
          </p>

          <h2 className="mt-8 text-center font-biorhyme text-4xl font-bold text-bhm-neutral-700">
            Michigan DevFest
          </h2>
          <p className="prose mx-auto mt-4 max-w-prose  text-lg leading-relaxed text-bhm-neutral-700">
            Hosted by GDG-Detroit for over a decade,{' '}
            <a
              href="https://midevfest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary-800 underline hover:text-primary-600"
            >
              Michigan DevFest
            </a>{' '}
            is our capstone event in the fall. It convenes developers, technical
            leaders, students, and industry partners from across the state to
            explore modern platforms, applied AI, and emerging technologies.
          </p>
          <p className="prose mx-auto mt-4 max-w-prose  text-lg leading-relaxed text-bhm-neutral-700">
            In 2025, DevFest marked its 11th year and largest gathering to date,
            welcoming over 600 attendees at MotorCity Casino. With multiple
            tracks, deep technical workshops, and nationally recognized
            speakers, DevFest showcases the strength of Michigan&apos;s
            technology ecosystem and reinforces Compass&apos; commitment to
            inclusive, high-quality technical programming.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}

export default PreviousEvents
