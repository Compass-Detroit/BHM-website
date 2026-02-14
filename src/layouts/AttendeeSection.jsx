// will contain the attendee section for the homepage

function AttendeeSection() {
  return (
    <section
      id="attendees"
      className="flex flex-col justify-center bg-white p-8 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      <h2 className="w-full text-center font-biorhyme text-4xl text-black md:text-5xl lg:text-6xl">
        Attendees
      </h2>
      <div className="mx-auto max-w-4xl">
        <p className="prose mt-6 text-lg leading-8 text-gray-600 [text-wrap:pretty]">
          Replace this with the attendee section
        </p>
      </div>
    </section>
  )
}

export default AttendeeSection
