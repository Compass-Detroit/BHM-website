import { Link } from 'react-router-dom'
import { sections, pageLinks } from '@/data/2026/navigation'
import GdgDetroitLogo from '@/assets/images/gdg-detroit-logo-footer.svg'
import CompassDetroit from '@/assets/images/sponsors/Compass_Detroit_logo.webp'
import SectionSkipLink from '@/components/ui/SectionSkipLink'

function Footer() {
  // Section links always use /#section-id so that smooth scrolling is handled
  // consistently by the Navbar's hash-based useEffect (from any page, including home).
  return (
    <footer
      id="page-footer"
      role="contentinfo"
      className="relative flex flex-col bg-bhm-neutral-900  text-white"
    >
      <SectionSkipLink href="#footer-credits">
        Skip footer navigation
      </SectionSkipLink>
      <div className="mx-auto w-full max-w-7xl px-6 py-8 md:flex lg:px-8">
        <div className="ml-3 flex flex-wrap gap-3 md:order-2">
          {sections
            .filter((section) => section.id)
            .map((section) => (
              <Link
                key={section.id}
                to={`/#${section.id}`}
                className="text-base text-bhm-neutral-50 hover:text-gray-200 hover:underline hover:underline-offset-4"
              >
                {section.text}
              </Link>
            ))}
          {pageLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-base text-bhm-neutral-50 hover:text-gray-200 hover:underline hover:underline-offset-4"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <p className="border-r-2 pr-3 text-base text-bhm-neutral-50 hover:text-gray-200 hover:underline hover:underline-offset-4">
          © {new Date().getFullYear()} Compass Detroit. All rights reserved.
        </p>
      </div>
      <div
        id="footer-credits"
        className="mx-auto w-full max-w-full border-t border-gray-300 bg-bhm-neutral-950 px-6 pb-24 pt-8 lg:px-8 dark:border-gray-700"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="col-span-1 md:col-span-3">
              {/* Full width column */}
              <div>
                <h3 className="mb-2 text-lg font-semibold uppercase tracking-wide text-gray-400">
                  Brought to you by:
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {/* Left column - 1/3 width */}
              <img
                src={GdgDetroitLogo}
                alt="GDG Detroit Logo"
                className="h-auto w-64 object-contain object-center"
              />
            </div>
            <div className="flex items-center justify-center">
              {/* Middle column - 1/3 width */}
              <img
                src={CompassDetroit}
                alt="Compass Detroit Logo"
                className="h-auto w-64 object-contain object-center"
              />
            </div>
            <div className="grid grid-cols-1 items-center">
              {/* Right column - 1/3 width */}
              <p className="prose text-pretty text-sm text-white">
                The Compass Detroit and GDG Detroit teams are volunteers who are
                passionate about helping the community learn and grow in the
                field of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
