export const MY_SCHEDULE_STORAGE_KEY = 'bhm_my_schedule_v1'

export const loadMySchedule = () => {
  if (typeof window === 'undefined') return []

  try {
    const raw = window.localStorage.getItem(MY_SCHEDULE_STORAGE_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    console.warn('Unable to load saved schedule from localStorage', error)
    return []
  }
}

export const saveMySchedule = (sessions) => {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(
      MY_SCHEDULE_STORAGE_KEY,
      JSON.stringify(Array.isArray(sessions) ? sessions : [])
    )
  } catch (error) {
    console.warn('Unable to save schedule to localStorage', error)
  }
}
