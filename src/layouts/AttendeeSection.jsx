import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

function AttendeeSection() {
  const [imagePaths, setImagePaths] = useState([])
  const [isPlaying, setIsPlaying] = useState(true)

  // Toggle marquee play/pause
  const togglePlay = () => setIsPlaying((prev) => !prev)

  useEffect(() => {
    // Vite-friendly import of all attendee images
    const logos = import.meta.glob('@/data/2026/assets/attendees/*.webp', {
      eager: true,
      import: 'default',
    })

    // Convert imports to array with derived alt text
    const imgs = Object.entries(logos).map(([path, url]) => ({
      src: url,
      name: path
        .split('/')
        .pop()
        .split('.')[0]
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase()), // Capitalize words
    }))

    setImagePaths(imgs)
  }, [])

  return (
    <section
      id="attendees"
      className="relative flex flex-col items-center bg-white px-6 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      <SectionSkipLink href="#location">Skip attendees section</SectionSkipLink>

      {/* Section Title */}
      <h2 className="w-full text-center font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl">
        Attendees
      </h2>

      {/* Pause/Play Button */}
      <button
        onClick={togglePlay}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? 'Pause marquee' : 'Play marquee'}
        className="absolute right-6 top-6 z-10 rounded-md bg-black px-3 py-1 text-white"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      {/* Marquee Logos */}
      <div className="mt-12 w-full overflow-hidden">
        <Marquee
          speed={80}
          pauseOnHover={true}
          pauseOnClick={false} // controlled by button
          gradient={false}
          play={isPlaying}
        >
          {imagePaths.map((img, i) => (
            <div key={i} className="mx-8 flex items-center justify-center">
              <img
                src={img.src}
                alt={img.name}
                loading="lazy"
                className="h-[70px] object-contain saturate-0 transition duration-300 hover:saturate-100 sm:h-[90px] md:h-[110px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default AttendeeSection
