import DevTeamCard from '@/components/dev/DevTeamCard'
import { devTeamData } from '@/data/dev'

const DevTeamSection = () => {
  const sortedDevTeamData = [...devTeamData].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  return (
    <section
      id="devteam"
      className="flex flex-wrap items-center justify-center bg-bhm-gold-50 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="flex w-full justify-center pt-0">
        <h2 className="mb-4 w-full text-center font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl">
          Dev Team
        </h2>
      </div>
      <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {sortedDevTeamData.map((dev) => (
          <DevTeamCard
            key={`dev-${dev.id}`}
            id={dev.id}
            name={dev.name}
            avatar={dev.avatar}
            linkedin={dev.linkedin}
            github={dev.github}
            organization={dev.organization}
            position={dev.position}
            university={dev.university}
          />
        ))}
      </div>
    </section>
  )
}

export default DevTeamSection
