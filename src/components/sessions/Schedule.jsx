import { useState } from 'react'
import HackathonSchedule from './HackathonSchedule'
import DevFestSchedule from './DevFestSchedule'

export const Schedule = () => {
  const [activeSchedule, setActiveSchedule] = useState('hackathon')

  return (
    <div className="w-full py-8">
      {/* Mobile: Tabs */}
      <div className="mb-8 flex justify-center gap-3 lg:hidden">
        <button
          onClick={() => setActiveSchedule('hackathon')}
          className={`rounded-lg px-6 py-3 text-base font-bold transition-all ${
            activeSchedule === 'hackathon'
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-pressed={activeSchedule === 'hackathon'}
        >
          IBM AI Hackathon
        </button>
        <button
          onClick={() => setActiveSchedule('devfest')}
          className={`rounded-lg px-6 py-3 text-base font-bold transition-all ${
            activeSchedule === 'devfest'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-pressed={activeSchedule === 'devfest'}
        >
          DevFest Sessions
        </button>
      </div>

      {/* Mobile: Single Schedule View */}
      <div className="mx-auto max-w-4xl lg:hidden">
        <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          {activeSchedule === 'hackathon'
            ? 'IBM AI Hackathon Schedule'
            : 'DevFest Sessions Schedule'}
        </h3>
        {activeSchedule === 'hackathon' ? (
          <HackathonSchedule />
        ) : (
          <DevFestSchedule />
        )}
      </div>

      {/* Desktop: Side-by-Side View */}
      <div className="mx-auto hidden max-w-7xl lg:block">
        <h3 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Event Schedule
        </h3>
        <div className="grid grid-cols-2 gap-8">
          {/* AI Hackathon */}
          <div className="rounded-2xl border-4 border-purple-500 bg-purple-50 p-6">
            <h4 className="mb-6 text-center text-xl font-bold text-purple-900">
              IBM AI Hackathon
            </h4>
            <HackathonSchedule compact />
          </div>

          {/* DevFest Sessions */}
          <div className="rounded-2xl border-4 border-blue-500 bg-blue-50 p-6">
            <h4 className="mb-6 text-center text-xl font-bold text-blue-900">
              DevFest Sessions
            </h4>
            <DevFestSchedule compact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
