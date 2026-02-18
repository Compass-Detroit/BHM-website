import PropTypes from 'prop-types'

/**
 * Section skip link for bypassing repetitive navigation (WCAG 2.4.1 Bypass Blocks).
 * Hidden visually until keyboard focus; must not use display:none or visibility:hidden.
 * Mirrors the main "Skip to main content" pattern from App.jsx.
 * Focuses the target element on activation so keyboard users land in the right place.
 */
function SectionSkipLink({ href, children }) {
  const activate = (e) => {
    const id = href.replace(/^#/, '')
    const target = id ? document.getElementById(id) : null
    if (target) {
      e.preventDefault()
      target.setAttribute('tabindex', '-1')
      const navbarHeight = document.querySelector('nav')?.offsetHeight ?? 96
      const targetTop = target.getBoundingClientRect().top + window.scrollY
      const scrollPosition = targetTop - navbarHeight
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
      target.focus({ preventScroll: true })
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      e.currentTarget.click()
    }
  }

  return (
    <a
      href={href}
      onClick={activate}
      onKeyDown={handleKeyDown}
      // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values -- Negative top positions link off-screen for WCAG bypass; visible on focus
      className={
        'absolute -top-[9999px] left-[6px] z-[100] rounded bg-white px-2 py-1 text-black shadow ' +
        'focus:top-[6px] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ' +
        'dark:bg-gray-800 dark:text-white'
      }
    >
      {children}
    </a>
  )
}

SectionSkipLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SectionSkipLink
