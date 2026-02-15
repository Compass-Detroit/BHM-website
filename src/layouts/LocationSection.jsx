function LocationSection() {
  return (
    <section
      id="location"
      className=" bg-gray-50 py-16 text-black md:py-28 dark:bg-gray-900 dark:text-white"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2
          id="location-heading"
          className="mb-12 text-center font-biorhyme text-2xl font-semibold md:text-3xl"
        >
          When &amp; Where
        </h2>

        {/* Content Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Map */}
          <div
            className="flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-black bg-white dark:border-white"
            role="region"
            aria-label="Event location map"
          >
            <iframe
              title="DTE Energy Headquarters"
              className="size-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1610!2d-83.0603389!3d42.3337713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d363de9d8eb%3A0xb42701b85d37b41d!2sDTE%20Energy%20Headquarters!5e1!3m2!1sen!2sus!4v1706832000000!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-2 text-2xl font-bold md:text-3xl">
              Compass Detroit 2026
            </h1>

            <p className="mb-1 font-semibold">
              1 Energy Plaza, Detroit, MI 48226
            </p>

            <time
              dateTime="2026-02-28T08:00:00-05:00/2026-02-28T17:00:00-05:00"
              className="mb-6 text-gray-700 dark:text-gray-300"
            >
              Saturday, February 28th <br />
              8:00 AM – 5:00 PM
            </time>

            <a
              href="https://www.google.com/maps/dir//DTE+Energy+Headquarters+1+Energy+Plaza+Detroit,+48226"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center rounded border-2 border-black bg-white px-6 py-3 font-semibold transition hover:bg-black hover:text-white dark:border-white dark:bg-transparent dark:hover:bg-white dark:hover:text-black"
              aria-label="Get directions to DTE Energy Headquarters (opens in new tab)"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LocationSection
