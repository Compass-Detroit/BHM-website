import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

function AttendeeSection() {
  const [imagePaths, setImagePaths] = useState([])

  useEffect(() => {
    const importImages = async () => {
      const totalImages = 20 // number of attendee logos
      const imgs = []

      for (let i = 1; i <= totalImages; i++) {
        try {
          const img = await import(`@/data/2026/assets/Attendees/image${i}.png`)
          imgs.push(img.default)
        } catch {
          // ignore if image doesn't exist
        }
      }

      setImagePaths(imgs)
    }

    importImages()
  }, [])

  return (
    <section
      id="attendees"
      className="relative flex flex-col items-center bg-white px-6 py-24 sm:px-10 md:px-14 lg:px-16"
    >
      <SectionSkipLink href="#jobboard">Skip attendees section</SectionSkipLink>

      {/* Section Title */}
      <h2 className="w-full text-center font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl">
        Attendees
      </h2>

      {/* Marquee Logos */}
      <div className="mt-12 w-full overflow-hidden">
        <Marquee speed={150} pauseOnHover pauseOnClick gradient={false}>
          {imagePaths.map((src, i) => (
            <div key={i} className="mx-8 flex items-center justify-center">
              <img
                src={src}
                alt={`Attendee ${i + 1}`}
                className="h-[70px] object-contain sm:h-[90px] md:h-[110px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default AttendeeSection

// import SectionSkipLink from '@/components/ui/SectionSkipLink'

// function AttendeeSection() {
//   return (
//     <section
//       id="attendees"
//       className="relative flex flex-col justify-center bg-white p-8 py-24 sm:px-10 md:px-14 lg:px-16"
//     >
//       <SectionSkipLink href="#jobboard">Skip attendees section</SectionSkipLink>
//       <h2 className="w-full text-center font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl">
//         Attendees
//       </h2>
//       <div className="mx-auto max-w-4xl">
//         <p className="prose mt-6 text-lg leading-8 text-gray-600 [text-wrap:pretty]">
//           Replace this with the attendee section
//         </p>
//       </div>
//     </section>
//   )
// }

// export default AttendeeSection
