import PropTypes from 'prop-types'
import { format, parse } from 'date-fns'

/**
 * Card for conference activities (check-in, breakfast, lunch, etc.)
 * that are not speaker sessions. Single column: time range + title.
 */
function ActivityCard({ title, content, time, timeEnd, room }) {
  const formatTime = (t) => {
    if (!t) return ''
    try {
      return format(parse(t, 'HH:mm', new Date()), 'h:mm a')
    } catch {
      return t
    }
  }

  const startFormatted = formatTime(time)
  const endFormatted = formatTime(timeEnd)
  const timeLabel =
    startFormatted && endFormatted
      ? `${startFormatted} - ${endFormatted}`
      : startFormatted || ''

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg transition duration-200 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800">
      <div className="flex w-full items-center p-3 md:px-8 lg:px-14">
        <div className="w-full">
          {title && (
            <h3 className="mt-1 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              {title}
            </h3>
          )}
          {content && (
            <div
              className="mt-2 text-sm text-bhm-neutral-700 dark:text-bhm-neutral-200 [&_a]:font-medium [&_a]:text-sky-700 [&_a]:underline [&_a]:hover:text-sky-800 dark:[&_a]:text-sky-400 dark:[&_a]:hover:text-sky-300"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base">
            {timeLabel && (
              <span className="font-bold text-bhm-neutral-700 sm:text-xl lg:text-2xl dark:text-bhm-neutral-200">
                {timeLabel}
              </span>
            )}
            {room && (
              <span className="text-bhm-neutral-700 dark:text-bhm-neutral-200">
                in {room}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

ActivityCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  time: PropTypes.string.isRequired,
  timeEnd: PropTypes.string,
  room: PropTypes.string,
}

export default ActivityCard
