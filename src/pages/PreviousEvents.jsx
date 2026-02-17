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
        className={`mt-16 bg-primary-100 transition-opacity duration-500 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center px-8 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-16 lg:py-24">
          <h1
            id="main-heading"
            className="mb-8 text-center font-biorhyme text-4xl font-bold text-primary-800 md:text-5xl lg:text-6xl"
          >
            Compass Detroit Past Events
          </h1>

          <p className="mx-auto w-5/6 text-lg leading-relaxed text-primary-950 lg:w-2/3">
            Compass Detroit is a community-driven event connecting tech
            enthusiasts, professionals, and students to network and explore
            industry trends. This summit celebrates Black contributions to
            technology and emphasizes the necessity of diversity within the
            field.
          </p>

          <p className="mx-auto mt-4 w-5/6 text-lg leading-relaxed text-primary-950 lg:w-2/3">
            Through various speakers and workshops, the event highlights local
            talent and fosters a tradition of collaborative learning.
          </p>

          <h2 className="mt-8 text-center font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl">
            Black History Month Tech Summit
          </h2>
          <p className="mx-auto mt-4 w-5/6 text-lg leading-relaxed text-primary-950 lg:w-2/3">
            The Black History Month Tech Summit connects tech enthusiasts,
            professionals, and students to network and explore industry trends.
            This event celebrates Black contributions to technology and
            reinforces the importance of diversity in the field.
          </p>
          <p className="mx-auto mt-4 w-5/6 text-lg leading-relaxed text-primary-950 lg:w-2/3">
            Through expert speakers and workshops, the summit highlights local
            talent and continues a tradition of collaborative learning.
          </p>

          <h2 className="mt-8 text-center font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl">
            Michigan DevFest
          </h2>
          <p className="mx-auto mt-4 w-5/6 text-lg leading-relaxed text-primary-950 lg:w-2/3">
            Hosted by GDG-Detroit for over a decade,{' '}
            <a
              href="https://midevfest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-800 underline hover:text-primary-600"
            >
              Michigan DevFest
            </a>{' '}
            brings together regional developers, professionals, and students to
            explore modern technology. This community-driven event has grown
            into a statewide draw, offering diverse workshops and expert-led
            sessions.
          </p>
          <p className="mx-auto mt-4 w-5/6 text-lg leading-relaxed text-primary-950 lg:w-2/3">
            As a long-standing member of the Compass network, DevFest highlights
            the immense talent within our local tech ecosystem and continues a
            tradition of collaborative learning.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}

export default PreviousEvents
