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
      const navbarHeight = 96
      const targetTop = target.getBoundingClientRect().top + window.scrollY
      const scrollPosition = targetTop - navbarHeight
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
      target.focus({ preventScroll: true })
    }
  }

  return (
    <a href={href} onClick={activate} className="skip-link">
      {children}
    </a>
  )
}

SectionSkipLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SectionSkipLink
