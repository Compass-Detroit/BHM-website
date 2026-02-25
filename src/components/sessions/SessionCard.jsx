import PropTypes from 'prop-types'
import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'

import { DIRECTION } from '@/constants/directions'
import { addMinutes, format, parse } from 'date-fns'

function SessionCard({
  speakers,
  speakerAvatars,
  sessionTitle,
  sessionDesc,
  sessionTime,
  sessionRoom,
  sessionDuration = 60, // Duration in minutes
}) {
  const [direction, setDirection] = useState(DIRECTION.BOTTOM)

  const toggle = () => {
    if (direction == DIRECTION.TOP) {
      setDirection(DIRECTION.BOTTOM)
    } else {
      setDirection(DIRECTION.TOP)
    }
  }

  const getSessionTimes = () => {
    if (!sessionTime) return { startTime: '', endTime: '' }

    // If time range is explicitly provided (e.g., "10:00 - 12:00")
    if (sessionTime.includes('-')) {
      const [startStr, endStr] = sessionTime.split('-').map((str) => str.trim())
      return {
        startTime: format(parse(startStr, 'HH:mm', new Date()), 'h:mm a'),
        endTime: format(parse(endStr, 'HH:mm', new Date()), 'h:mm a'),
      }
    }

    // Otherwise, calculate end time based on duration (in minutes)
    const parsedStartTime = parse(sessionTime, 'HH:mm', new Date())
    return {
      startTime: format(parsedStartTime, 'h:mm a'),
      endTime: format(addMinutes(parsedStartTime, sessionDuration), 'h:mm a'),
    }
  }

  const { startTime, endTime } = getSessionTimes()
  const isExpanded = direction === DIRECTION.TOP
  const hasTimeInfo = startTime && endTime
  const hasSessionInfo = hasTimeInfo || sessionRoom

  /*
   * Layout: responsive grid with avatar column + content column.
   * Breakpoints: xs=400px, sm=640px, md=768px, lg=1024px, xl=1280px, 2xl=1536px
   *
   * Single avatar: xs and below = stacked (content first, avatar below); 401px+ = two columns
   * 2 avatars: md+ = two columns, first column width = 120px + 80px * count
   * 3+ avatars: lg+ = two columns; >3 avatars = wrap at lg (360px cap), no wrap at xl; below lg = stacked (content first, avatars below)
   * Second column = minmax(0,1fr) to use remaining space; lg+ grid gets flex-1 to fill button
   */
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg transition duration-200 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800">
      <button
        onClick={() => sessionDesc && toggle()}
        aria-expanded={sessionDesc ? isExpanded : undefined}
        aria-controls={
          sessionTitle
            ? `session-${sessionTitle.replace(/\s+/g, '-').toLowerCase()}`
            : undefined
        }
        aria-label={
          sessionTitle
            ? `Toggle session details for ${sessionTitle}`
            : `Session: ${sessionTitle}`
        }
        className="flex w-full items-center justify-between p-3 md:px-8 lg:px-14"
      >
        <div
          style={
            speakerAvatars?.length > 1
              ? { '--avatar-count': speakerAvatars.length }
              : undefined
          }
          className={`grid items-center gap-5 text-left lg:min-w-0 lg:flex-1 ${
            /* 3+ avatars stacked below lg: smaller gap between title and avatars */
            speakerAvatars?.length > 2 ? 'max-lg:gap-y-2' : ''
          } ${
            speakerAvatars?.length > 1
              ? speakerAvatars.length === 2
                ? /* 2 avatars: two columns at md */
                  'grid-cols-1 md:grid-cols-[calc(120px+80px*var(--avatar-count))_minmax(0,1fr)]'
                : `grid-cols-1 lg:grid-cols-[calc(120px+80px*var(--avatar-count))_minmax(0,1fr)] ${
                    speakerAvatars.length > 3
                      ? /* 4+ avatars: 360px cap at lg (forces wrap); auto at xl/2xl (no wrap) */
                        'lg:grid-cols-[min(360px,calc(120px+80px*var(--avatar-count)))_minmax(0,1fr)] xl:grid-cols-[auto_minmax(0,1fr)] 2xl:grid-cols-[auto_minmax(0,1fr)]'
                      : ''
                  }`
              : /* 1 avatar: two columns at 401px (90px), md (120px) */
                'grid-cols-1 min-[401px]:grid-cols-[90px_minmax(0,1fr)] md:grid-cols-[120px_minmax(0,1fr)]'
          }`}
        >
          {speakerAvatars?.length && (
            <div
              className={`flex min-w-0 flex-wrap overflow-hidden ${
                speakerAvatars?.length >= 3 ? 'gap-1' : 'gap-2 rounded-full'
              } justify-start ${
                /* 3+ avatars: content first below lg, avatar first at lg; 1 avatar: avatar below content at xs */
                speakerAvatars?.length > 2
                  ? 'order-2 lg:order-1'
                  : speakerAvatars?.length === 1
                    ? 'max-xs:order-2'
                    : ''
              } ${
                /* 4+ avatars: cap width at lg so avatars wrap */
                speakerAvatars?.length > 3 ? 'lg:max-w-[360px]' : ''
              }`}
            >
              {speakerAvatars.map((avatar, index) => (
                <img
                  key={index}
                  src={
                    !avatar
                      ? `https://ui-avatars.com/api/?name=${speakers[index]}&background=random`
                      : avatar
                  }
                  alt={`Headshot of ${speakers[index]}`}
                  className={`${
                    speakerAvatars?.length >= 3
                      ? 'mx-3 my-1 size-[90px] rounded-full'
                      : 'size-[90px] rounded-full md:size-[120px]'
                  } object-cover`}
                />
              ))}
            </div>
          )}
          <div
            className={`w-full min-w-0 ${
              !speakerAvatars?.length ? 'col-span-2' : ''
            } ${
              /* 3+ avatars: content first below lg; 1 avatar: content first at xs */
              speakerAvatars?.length > 2
                ? 'order-1 lg:order-2'
                : speakerAvatars?.length === 1
                  ? 'max-xs:order-1'
                  : ''
            }`}
          >
            {sessionTitle && (
              <h3 className="text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                {sessionTitle}
              </h3>
            )}
            <p className="text-gray-700 dark:text-gray-300">
              by {speakers.join(' & ')}
            </p>
            {hasSessionInfo && (
              <div className="mt-2.5 flex flex-wrap items-center gap-3 text-sm sm:text-base">
                {hasTimeInfo && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 dark:text-gray-100">at</span>
                    <span className="whitespace-nowrap font-bold text-bhm-neutral-700 sm:text-xl lg:text-2xl dark:text-bhm-neutral-200">
                      {startTime} - {endTime}
                    </span>
                  </div>
                )}
                {sessionRoom && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 dark:text-gray-100">in</span>
                    <span className="whitespace-nowrap text-gray-900 dark:text-gray-100">
                      {sessionRoom}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {sessionDesc && (
          <IoChevronDown
            className={`size-10 shrink-0 text-gray-900 transition-transform duration-100 ease-linear sm:size-14 md:size-16 lg:size-20 dark:text-gray-100 ${
              direction === DIRECTION.TOP && '-scale-y-100'
            }`}
          />
        )}
      </button>
      {isExpanded && sessionDesc && (
        <div
          id={`session-${sessionTitle.replace(/\s+/g, '-').toLowerCase()}`}
          className="border-t border-gray-600 px-3 pb-10 pt-5 md:px-8 lg:px-14 dark:border-gray-600"
        >
          <p className="whitespace-pre-wrap text-gray-900 dark:text-gray-100">
            {sessionDesc}
          </p>
        </div>
      )}
    </div>
  )
}

SessionCard.propTypes = {
  speakers: PropTypes.arrayOf(PropTypes.string).isRequired,
  speakerAvatars: PropTypes.arrayOf(PropTypes.string).isRequired,
  sessionTitle: PropTypes.string.isRequired,
  sessionDesc: PropTypes.string.isRequired,
  sessionTime: PropTypes.string.isRequired,
  sessionRoom: PropTypes.string.isRequired,
  sessionDuration: PropTypes.number, // Duration in minutes
}

export default SessionCard
