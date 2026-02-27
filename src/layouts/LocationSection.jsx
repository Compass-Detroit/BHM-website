import { FaMapPin, FaClock } from 'react-icons/fa6'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

function LocationSection() {
  return (
    <section
      id="location"
      className="relative flex h-auto items-center justify-center bg-bhm-neutral-100 py-16 text-black md:py-28 dark:bg-bhm-neutral-700 dark:text-white"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col space-y-8 px-4 sm:px-6 lg:px-8">
        {/* When Section */}
        <div className="flex justify-center">
          <div className="flex items-center">
            <div className="mx-2 flex size-11 shrink-0 items-center justify-center rounded-full bg-yellow-500">
              <FaClock
                className="size-6 shrink-0 text-white"
                aria-hidden="true"
              />
            </div>
            <h2
              id="location-heading"
              className="font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl dark:text-bhm-neutral-50"
            >
              When & Where
            </h2>
          </div>
        </div>
        <div className="flex justify-center pb-16">
          <div className="text-center">
            <div className="mt-2 space-y-1">
              <time
                dateTime="2026-02-28T08:00:00-05:00/2026-02-28T18:00:00-05:00"
                className="block text-xl font-semibold"
              >
                Saturday, February 28th: 8:00 AM - 6:00 PM
              </time>
            </div>
          </div>
        </div>

        {/* Saturday Location Row */}
        <div className="flex w-full max-w-full flex-col lg:flex-row lg:space-x-6">
          {/* Saturday Location Info */}
          <div className="mb-4 flex flex-col lg:mb-0 lg:w-1/2">
            <div className="mb-4 flex items-center">
              <div className="mx-2 flex size-11 shrink-0 items-center justify-center rounded-full bg-yellow-500">
                <FaMapPin
                  className="size-6 shrink-0 text-white"
                  aria-hidden="true"
                />
              </div>
              <dl>
                <dt className="sr-only">Venue</dt>
                <dd className="m-0">
                  <h3 className="text-3xl font-semibold">DTE Energy HQ</h3>
                </dd>
              </dl>
            </div>

            <dl>
              <dt className="sr-only">Address</dt>
              <dd>
                <address
                  className="ml-16 mt-1 not-italic xl:whitespace-nowrap"
                  aria-label="Main event venue address"
                >
                  1 Energy Plaza, Detroit, MI 48226
                </address>
              </dd>
            </dl>

            <div className="my-4">
              <a
                href="https://www.google.com/maps/dir//DTE+Energy+Headquarters+1+Energy+Plaza+Detroit,+48226"
                target="_blank"
                className="ml-16 inline-flex w-fit items-center whitespace-nowrap rounded bg-bhm-gold-300 px-8 py-5 font-bold text-bhm-neutral-950 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                rel="noreferrer"
                aria-label="Get directions to DTE Energy Headquarters (opens in new tab)"
              >
                GET DTE DIRECTIONS
              </a>
            </div>

            <dl>
              <dt className="sr-only">Free parking</dt>
              <dd className="mt-8 flex items-center">
                <div className="mx-2 flex size-11 shrink-0 items-center justify-center rounded-full bg-yellow-500">
                  <FaMapPin
                    className="size-6 shrink-0 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-2xl font-semibold">
                  MGM Grand Detroit Self Parking (FREE)
                </h3>
              </dd>
              <dd>
                <address
                  className="ml-16 mt-4 not-italic xl:whitespace-nowrap"
                  aria-label="Free parking address"
                >
                  2199 3rd Ave, Detroit, MI 48226
                </address>
                <a
                  href="https://bit.ly/mgm-self-parking"
                  target="_blank"
                  rel="noreferrer"
                  className="my-4 ml-16 inline-flex w-fit items-center whitespace-nowrap rounded border-4 border-bhm-neutral-950 bg-bhm-gold-200 px-8 py-5 font-bold text-bhm-neutral-950 shadow-lg transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:bg-bhm-gold-50 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 dark:border-bhm-gold-200 dark:bg-transparent dark:text-bhm-neutral-50 dark:hover:bg-transparent"
                  aria-label="Free parking information (opens in new tab)"
                >
                  FREE PARKING INFO
                </a>
              </dd>
            </dl>

            <dl>
              <dt className="sr-only">Tech Hour &amp; Networking venue</dt>
              <dd className="mt-8 flex items-center">
                <div className="mx-2 flex size-11 shrink-0 items-center justify-center rounded-full bg-yellow-500">
                  <FaMapPin
                    className="size-6 shrink-0 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-2xl font-semibold">Lumen Detroit</h3>
              </dd>
              <dd>
                <address
                  className="ml-16 mt-4 not-italic xl:whitespace-nowrap"
                  aria-label="Lumen Detroit address"
                >
                  1903 Grand River Ave, Detroit, MI 48226
                </address>

                <a
                  href="https://www.google.com/maps/dir//Lumen+Detroit,+1903+Grand+River+Ave,+Detroit,+MI+48226/@42.3028661,-83.2398934,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x883b2d36f5ad9e7b:0xad94c0e08a2b601c!2m2!1d-83.0548734!2d42.3344991?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="my-4 ml-16 inline-flex w-fit items-center font-bold text-bhm-red-700 underline hover:text-bhm-red-900 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 dark:text-bhm-gold-200 dark:hover:text-bhm-gold-400"
                  aria-label="Get directions to Lumen Detroit (opens in new tab)"
                >
                  GET LUMEN DIRECTIONS
                </a>
              </dd>
            </dl>

            <div className="relative">
              <SectionSkipLink href="#schedule">
                Skip location section
              </SectionSkipLink>
            </div>
          </div>

          {/* Saturday Map */}
          <div className="mx-2 w-full max-w-full overflow-hidden lg:w-1/2">
            <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-white">
              Saturday - Free Parking
            </h4>
            <p className="mb-2 text-lg font-semibold">
              MGM Grand Detroit Self Parking
            </p>
            <div
              className="rounded-2xl border-4 border-blue-500 bg-white p-1"
              role="region"
              aria-label="Saturday location map"
            >
              <iframe
                title="MGM Grand Detroit Self Parking"
                aria-label="Map showing MGM Grand Detroit Self Parking location"
                className="aspect-[4/3] rounded-xl border-4 border-white"
                style={{
                  maxWidth: '100%',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d737.3372447776826!2d-83.06011360377427!3d42.33508251131216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d49be82ef77%3A0xfe82f1372017dff8!2s2199%203rd%20Ave%2C%20Detroit%2C%20MI%2048226!5e0!3m2!1sen!2sus!4v1772077742474!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              >
                <p>
                  Interactive map showing MGM Grand Detroit Self Parking
                  location.
                  <a
                    href="https://bit.ly/mgm-self-parking"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
