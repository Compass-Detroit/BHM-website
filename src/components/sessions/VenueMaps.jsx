import dteFloor1 from '@/assets/images/maps/dte-first.webp'
import dteFloor2 from '@/assets/images/maps/dte-second.webp'

function VenueMaps() {
  return (
    <section className="w-full py-8" aria-labelledby="venue-maps-heading">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border-4 border-bhm-gold-500 bg-bhm-gold-100 p-4">
          <img
            src={dteFloor1}
            alt="DTE Energy Headquarters Floor 1 featuring the main entrance into the Service Building. Find Build with AI workshops in SB 120. Also on the floor are Innovation and AI Foundations sessions in WCB 105 and WCB 103 in the Walker Crisler Building."
            className="size-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
        <div className="rounded-2xl border-4 border-bhm-gold-500 bg-bhm-gold-100 p-4">
          <img
            src={dteFloor2}
            alt="DTE Energy Headquarters Floor 2 featuring second story skywalk connecting from the parking garage to the Service Building. Also on the floor are Town Square Level Up sessions, booths, and Leadership WCB 275 and 278. Or find Breakout Sessions in WCB room 255."
            className="size-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default VenueMaps
