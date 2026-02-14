// Navigation sections used in Navbar and Footer
// Items with id = homepage anchor links (#id)
// Items with to = route links (full page)
export const sections = [
  { id: 'location', text: 'Location' },
  { id: 'schedule', text: 'Sessions' },
  { id: 'speakers', text: 'Speakers' },
  { id: 'attendees', text: 'Attendees' },
  { id: 'jobboard', text: 'Job Board' },
  { id: 'partners', text: 'Partners' },
  { id: 'leadership', text: 'BHM Team' },
  { to: '/previous-events', text: 'Previous Events' },
]

// Flat list of route-based links (used in Footer)
export const pageLinks = sections.filter((item) => item.to)
