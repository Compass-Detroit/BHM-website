/**
 * Event Data Discovery Utility
 * Automatically discovers available years and validates data structure
 */

// Import all available year data
import { SpeakersData as Speakers2024 } from '@/data/2024/speakers'

// Define available years and their data
const EVENT_YEARS = {
  2024: {
    speakers: Speakers2024,
    // Add other data types as needed
    // organizers: Organizers2024,
    // facilitators: Facilitators2024,
    // sponsors: Sponsors2024,
  },
}

/**
 * Get all available event years
 * @returns {number[]} Array of available years
 */
export const getAvailableYears = () => {
  return Object.keys(EVENT_YEARS)
    .map(Number)
    .sort((a, b) => b - a) // Most recent first
}

/**
 * Get event data for a specific year
 * @param {number} year - The year to get data for
 * @returns {Object|null} Event data for the year or null if not found
 */
export const getEventData = (year) => {
  return EVENT_YEARS[year] || null
}

/**
 * Get speakers data for a specific year
 * @param {number} year - The year to get speakers for
 * @returns {Array|null} Speakers data for the year or null if not found
 */
export const getSpeakersData = (year) => {
  const eventData = getEventData(year)
  return eventData?.speakers || null
}

/**
 * Get event metadata for a specific year
 * @param {number} year - The year to get metadata for
 * @returns {Object} Event metadata
 */
export const getEventMetadata = (year) => {
  const speakers = getSpeakersData(year)

  if (!speakers) {
    return {
      year,
      speakerCount: 0,
      sessionCount: 0,
      tracks: [],
      available: false,
    }
  }

  // Extract unique tracks from sessions
  const tracks = [
    ...new Set(
      speakers.map((speaker) => speaker.session?.track).filter(Boolean)
    ),
  ]

  return {
    year,
    speakerCount: speakers.length,
    sessionCount: speakers.filter((speaker) => speaker.session).length,
    tracks,
    available: true,
  }
}

/**
 * Get all events with their metadata
 * @returns {Array} Array of event metadata objects
 */
export const getAllEventsMetadata = () => {
  const years = getAvailableYears()
  return years.map((year) => getEventMetadata(year))
}

/**
 * Validate if a year has complete data
 * @param {number} year - The year to validate
 * @returns {boolean} True if year has complete data
 */
export const isYearDataComplete = (year) => {
  const eventData = getEventData(year)
  return eventData && eventData.speakers && eventData.speakers.length > 0
}

/**
 * Get the most recent available year
 * @returns {number|null} Most recent year or null if no data
 */
export const getMostRecentYear = () => {
  const years = getAvailableYears()
  return years.length > 0 ? years[0] : null
}
