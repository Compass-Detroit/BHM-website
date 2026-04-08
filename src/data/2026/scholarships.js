// Scholarship orgs
import CompassDetroit from '@/assets/images/sponsors/Compass_Detroit_logo.webp'
import NSBEDetroit from '@/assets/images/organizations/org-nsbe-logo.webp'
import DevOpsDetroit from '@/assets/images/sponsors/DevOps_Detroit_Logo.webp'

// Scholarship winners
import MattalynnDarden from './assets/images/speakers/MattalynnDarden.webp'
import RichardSnider from './assets/images/scholarship/Richard_Snider.jpg'
import ZaireRussaw from './assets/images/scholarship/Zaire_Russaw.jpg'

export const scholarshipAwardees = [
  {
    id: 1,
    name: 'Mattalyn Darden',
    position: 'Certified Cybersecurity Professional & Entrepreneur',
    organization: 'Mattie D UC LLC',
    conference: 'AfroTech Conference',
    conferenceUrl: 'https://afrotechconference.com/',
    awardedBy: 'Compass Detroit',
    photo: MattalynnDarden,
  },
  {
    id: 2,
    name: 'Zaire Russaw',
    position:
      'Mechanical Engineering Student & President, Nu Nu Chapter of Phi Beta Sigma Fraternity, Inc.',
    organization: 'University of Michigan Dearborn',
    conference: 'NSBE Annual Convention',
    conferenceUrl: 'https://convention.nsbe.org/',
    awardedBy: 'NSBE Detroit',
    photo: ZaireRussaw,
  },
  {
    id: 3,
    name: 'Richard Snider',
    position: 'Application Developer, iOS & AI Systems',
    organization: 'Apple Developer Academy at MSU',
    conference: 'STEM So(ul)cial',
    conferenceUrl: 'https://www.stemsoulcial.com/',
    awardedBy: 'DevOps Detroit',
    photo: RichardSnider,
  },
]

export const scholarshipOrgs = [
  {
    id: 1,
    name: 'Compass Detroit',
    logo: CompassDetroit,
    url: 'https://compass-detroit.com/',
  },
  {
    id: 2,
    name: 'NSBE Detroit',
    logo: NSBEDetroit,
    url: 'https://nsbedetroitprofessionals.org/',
  },
  {
    id: 3,
    name: 'DevOps Detroit',
    logo: DevOpsDetroit,
    url: 'https://www.devopsdetroit.io/',
  },
]
