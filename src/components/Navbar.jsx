import { useEffect, useMemo, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import gdgDetroitLogo from '@/assets/images/gdg-detroit-logo.png'

function Navbar() {
  const [activeLink, setActiveLink] = useState('landing')
  const [isNavVisible, setIsNavVisible] = useState(false)

  const navRef = useRef(null)

  const sections = useMemo(
    () => [
      { id: 'landing', text: 'Landing' },
      { id: 'location', text: 'Location' },
      { id: 'sessions', text: 'Sessions' },
      { id: 'sponsors', text: 'Sponsors' },
      { id: 'jobboard', text: 'Job Board' },
      { id: 'organizers', text: 'Organizers' },
      { id: 'facilitators', text: 'Facilitators' },
      { id: 'speakers', text: 'Speakers' },
      { id: 'devteam', text: 'Dev Team' },
    ],
    []
  )

  const externalLinks = useMemo(
    () => [{ to: '/previous-events', text: 'Previous Events' }],
    []
  )

  useEffect(() => {
    const handleScroll = () => {
      let activeIoU = 0

      sections.forEach((section) => {
        const target = document.querySelector(`#${section.id}`)

        if (!target) return

        const rect = target.getBoundingClientRect()

        const intersectionHeight = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        )

        const IoU =
          intersectionHeight /
          (rect.height + window.innerHeight - intersectionHeight)

        if (IoU > activeIoU) {
          setActiveLink(section.id)
          activeIoU = IoU
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  const handleNavigation = (event, sectionId) => {
    event.preventDefault()
    const target = document.querySelector(`#${sectionId}`)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavVisible(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 top-0 z-10 w-full p-4 ${
        activeLink === 'landing'
          ? 'bg-primary-400 text-sky-900'
          : 'bg-white shadow-lg'
      }`}
    >
      <div className="flex items-center justify-between">
        <img src={gdgDetroitLogo} alt="GDG Detroit Logo" className="h-16" />
        <button
          className="rounded border-2 px-4 lg:hidden"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <FaBars className="h-10" />
        </button>
        <ul
          className={`flex flex-col space-y-4 overflow-hidden lg:flex-row lg:justify-end lg:space-x-2 lg:space-y-0 lg:px-4 lg:py-2 ${
            isNavVisible ? 'h-full' : 'h-0 lg:h-full'
          }`}
        >
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={`#${section.id}`}
                onClick={(event) => handleNavigation(event, section.id)}
                className={`${section.id === 'landing' ? 'hidden' : ''} p-6 ${
                  activeLink === section.id ? 'text-primary-500' : ''
                }`}
              >
                {section.text}
              </Link>
            </li>
          ))}
          {externalLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="p-6 transition-colors hover:text-primary-500"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
