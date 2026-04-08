// Scholarship orgs
import CompassDetroit from '@/assets/images/sponsors/Compass_Detroit_logo.webp'
import NSBEDetroit from '@/assets/images/organizations/org-nsbe-logo.webp'
import DevOpsDetroit from '@/assets/images/sponsors/DevOps_Detroit_Logo.webp'

// Scholarship winners
import MattalynnDarden from '@/data/2026/assets/images/speakers/MattalynnDarden.webp'
import RichardSnider from '@/data/2026/assets/images/scholarship/Richard_Snider.jpg'
import ZaireRussaw from '@/data/2026/assets/images/scholarship/Zaire_Russaw.jpg'

const scholarships = [
  {
    id: 1,
    name: 'Compass Detroit',
    logo: CompassDetroit,
    url: 'https://compass-detroit.com/',
    winners: [
      {
        id: 1,
        name: 'Mattalyn Darden',
        position: 'Certified Cybersecurity Professional & Entrepreneur',
        organization: 'Mattie D UC LLC',
        conference: 'AfroTech Conference',
        conferenceUrl: 'https://afrotechconference.com/',
        photo: MattalynnDarden,
      },
    ],
  },
  {
    id: 2,
    name: 'NSBE Detroit',
    logo: NSBEDetroit,
    url: 'https://nsbedetroitprofessionals.org/',
    winners: [
      {
        id: 2,
        name: 'Zaire Russaw',
        position:
          'Mechanical Engineering Student & President, Nu Nu Chapter of Phi Beta Sigma Fraternity, Inc.',
        organization: 'University of Michigan Dearborn',
        conference: 'NSBE Annual Convention',
        conferenceUrl: 'https://convention.nsbe.org/',
        photo: ZaireRussaw,
      },
    ],
  },
  {
    id: 3,
    name: 'DevOps Detroit',
    logo: DevOpsDetroit,
    url: 'https://www.devopsdetroit.io/',
    winners: [
      {
        id: 3,
        name: 'Richard Snider',
        position: 'Application Developer, iOS & AI Systems',
        organization: 'Apple Developer Academy at MSU',
        conference: 'STEM So(ul)cial',
        conferenceUrl: 'https://www.stemsoulcial.com/',
        photo: RichardSnider,
      },
    ],
  },
]

export const scholarshipOrganizations = scholarships.map(
  ({ id, name, logo, url }) => ({
    id,
    name,
    logo,
    url,
  })
)

export const scholarshipWinners = scholarships.flatMap(({ name, winners }) =>
  winners.map((winner) => ({
    ...winner,
    awardedBy: name,
  }))
)
