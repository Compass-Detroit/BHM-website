function VenueMaps() {
  const floors = [
    {
      name: '1st Floor',
      rooms: [
        {
          track: 'Innovation',
          location: 'Walker Crisler Bldg (WCB) 103',
        },
        {
          track: 'AI Foundations',
          location: 'Walker Crisler Bldg (WCB) 105',
        },
        {
          track: 'Build with AI',
          location: 'Service Bldg (SB) 120',
        },
      ],
    },
    {
      name: '2nd Floor',
      rooms: [
        {
          track: 'Level Up',
          location: 'Town Square',
        },
        {
          track: 'Leadership',
          location: 'Rooms 275 and 278',
        },
        {
          track: 'Breakout Sessions',
          location: 'Room 255',
        },
      ],
    },
  ]

  return (
    <section className="w-full py-8" aria-labelledby="venue-maps-heading">
      <h3
        id="venue-maps-heading"
        className="mb-4 text-3xl font-semibold text-gray-800 dark:text-gray-900"
      >
        Black History Month Tech Summit Venue Guide
      </h3>
      <p className="mb-6 text-sm text-gray-700 dark:text-gray-900">
        Use this guide to navigate the venue and find session locations.
        Sessions are organized across two floors.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {floors.map((floor) => (
          <div
            key={floor.name}
            className="rounded-2xl border-4 border-blue-500 bg-white p-4"
            role="region"
            aria-label={`${floor.name} sessions`}
          >
            <h4 className="mb-4 text-lg font-bold text-blue-600">
              {floor.name}
            </h4>
            <ul className="space-y-3">
              {floor.rooms.map((room) => (
                <li key={room.track} className="rounded-lg bg-blue-50 p-3">
                  <span className="block font-semibold text-gray-800">
                    {room.track}
                  </span>
                  <span className="text-sm text-gray-600">{room.location}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VenueMaps
