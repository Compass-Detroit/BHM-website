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
        className={`bg-inherit pt-72 transition-[opacity,transform] duration-1000 ease-out ${
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

          <p className="prose mx-auto w-2/3 max-w-none text-2xl leading-relaxed text-primary-950">
            Compass Detroit is a community-driven event connecting tech
            enthusiasts, professionals, and students to network and explore
            industry trends. Our organization, Compass, stands for the
            collective of minority professionals and STEAM societies in
            Michigan.
          </p>

          <p className="mx-auto mt-4 w-2/3 max-w-none text-lg leading-relaxed text-primary-950">
            Through various speakers and workshops, the event highlights local
            talent and fosters a tradition of collaborative learning.
          </p>

          <h2 className="mt-8 text-center font-biorhyme text-4xl font-bold text-bhm-neutral-700">
            Black History Month: Innovation Summit
          </h2>
          <p className="prose mx-auto mt-4 w-2/3 max-w-none text-lg leading-relaxed text-bhm-neutral-700">
            The{' '}
            <a
              href="https://bhmtechsummit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary-800 underline hover:text-primary-600"
            >
              Black History Month Innovation Summit
            </a>{' '}
            connects tech enthusiasts, professionals, and students to network
            and explore industry trends. This event celebrates Black
            contributions to technology and reinforces the importance of
            diversity in the field.
          </p>
          <p className="mx-auto mt-4 w-2/3 max-w-none text-lg leading-relaxed text-bhm-neutral-700">
            Through expert speakers and workshops, the summit highlights local
            talent and continues a tradition of collaborative learning. Each
            year, this event kicks off the year, running in the month of
            February.
          </p>

          <h2 className="mt-8 text-center font-biorhyme text-4xl font-bold text-bhm-neutral-700">
            Women Techmakers&apos;: International Women&apos;s Day
          </h2>
          <p className="prose mx-auto mt-4 w-2/3 max-w-none text-lg leading-relaxed text-bhm-neutral-700">
            The{' '}
            <a
              href="https://gdg.community.dev/iwd/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary-800 underline hover:text-primary-600"
            >
              Women Techmakers&apos; International Women&apos;s Day
            </a>{' '}
            connects tech enthusiasts, professionals, and students to network
            and explore industry trends. This event celebrates International
            Women&apos;s Day and reinforces the importance of diversity in the
            field.
          </p>
          <p className="mx-auto mt-4 w-2/3 max-w-none text-lg leading-relaxed text-bhm-neutral-700">
            Through expert speakers and workshops, the summit highlights local
            talent and continues a tradition of collaborative learning. Through
            expert speakers and workshops, the summit highlights local talent
            and continues a tradition of collaborative learning. This is our
            second event in the year, running in the spring.
          </p>

          <h2 className="mt-8 text-center font-biorhyme text-4xl font-bold text-bhm-neutral-700">
            Michigan DevFest
          </h2>
          <p className="prose mx-auto mt-4 w-2/3 max-w-none text-lg leading-relaxed text-bhm-neutral-700">
            Hosted by GDG-Detroit for over a decade,{' '}
            <a
              href="https://midevfest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary-800 underline hover:text-primary-600"
            >
              Michigan DevFest
            </a>{' '}
            brings together regional developers, professionals, and students to
            explore modern technology. This community-driven event has grown
            into a statewide draw, offering diverse workshops and expert-led
            sessions. This is our capstone event running in the fall. In 2025 it
            was our 11th and largest event, with over 600 attendees, held at the
            MotorCity Casino.
          </p>
          <p className="prose mx-auto mt-4 w-2/3 max-w-none text-lg leading-relaxed text-bhm-neutral-700">
            As a long-standing member of the Compass network, The Michigan
            DevFest highlights and showcases the immense talent within our local
            tech ecosystem and continues a tradition of collaborative learning.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}

export default PreviousEvents
