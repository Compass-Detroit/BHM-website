import GenericCard from '@/components/ui/GenericCard'
import { organizersData } from '@/data/organizers'

function OrganizersSection() {
  return (
    <section
      id="organizers"
      className="flex flex-col justify-center bg-sky-100 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="relative flex w-full justify-between pt-0">
        <h2 className="w-full text-center font-biorhyme text-5xl text-bhm-neutral-900 md:text-5xl lg:text-6xl">
          Organizers
        </h2>
      </div>
      <div className="my-32 grid grid-cols-1 place-items-center gap-20 sm:grid-cols-2 lg:mt-36">
        {organizersData.map((organizer) => (
          <GenericCard
            key={organizer.id}
            onOpen={() => window.open(organizer.url, '_blank')}
            {...organizer}
          />
        ))}
      </div>
    </section>
  )
}

export default OrganizersSection
