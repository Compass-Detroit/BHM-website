import PropTypes from 'prop-types'

/**
 * Section skip link for bypassing repetitive navigation (WCAG 2.4.1 Bypass Blocks).
 * Hidden visually until keyboard focus; must not use display:none or visibility:hidden.
 * Mirrors the main "Skip to main content" pattern from App.jsx.
 */
function SectionSkipLink({ href, children }) {
  return (
    <a
      href={href}
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
