import { addMinutes, format, isValid, parse } from 'date-fns'

const parse24HourTime = (timeValue) => {
  const parsed = parse(timeValue, 'HH:mm', new Date())
  return isValid(parsed) ? parsed : null
}

const format24HourTime = (timeValue) => {
  if (!timeValue || typeof timeValue !== 'string') return ''

  const [hour, minute] = timeValue.split(':').map(Number)

  if (Number.isNaN(hour) || Number.isNaN(minute)) return ''
  if (hour === 12) return `12:${minute.toString().padStart(2, '0')}`
  if (hour >= 1 && hour <= 5) {
    return `${(hour + 12).toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')}`
  }

  return `${hour.toString().padStart(2, '0')}:${minute
    .toString()
    .padStart(2, '0')}`
}

export const normalizeSortTime = (timeValue) => {
  if (!timeValue) return '99:99'

  const startTime = timeValue.includes('-')
    ? timeValue.split('-')[0].trim()
    : timeValue

  const normalized = format24HourTime(startTime) || startTime
  const [hour, minute] = normalized.split(':').map(Number)

  if (Number.isNaN(hour) || Number.isNaN(minute)) return '99:99'
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
}

export const getSessionTimes = (sessionTime, sessionDuration = 60) => {
  if (!sessionTime) return { startTime: '', endTime: '' }

  if (sessionTime.includes('-')) {
    const [startString, endString] = sessionTime
      .split('-')
      .map((value) => value.trim())
    const parsedStart = parse24HourTime(startString)
    const parsedEnd = parse24HourTime(endString)

    return {
      startTime: parsedStart ? format(parsedStart, 'h:mm a') : '',
      endTime: parsedEnd ? format(parsedEnd, 'h:mm a') : '',
    }
  }

  const parsedStart = parse24HourTime(sessionTime)
  if (!parsedStart) return { startTime: '', endTime: '' }

  return {
    startTime: format(parsedStart, 'h:mm a'),
    endTime: format(addMinutes(parsedStart, sessionDuration), 'h:mm a'),
  }
}

export const sortSessionsByStartTime = (sessions) =>
  [...sessions].sort((a, b) => {
    const aTime = normalizeSortTime(a.start || a.sessionTime || '')
    const bTime = normalizeSortTime(b.start || b.sessionTime || '')
    return aTime.localeCompare(bTime)
  })
