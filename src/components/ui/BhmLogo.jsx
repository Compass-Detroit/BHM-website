import bhmImage from '@/assets/images/icons/blackhistory.png'
import PropTypes from 'prop-types'

export default function BhmLogo({
  textColor = '#0c4a6e',
  title = 'Black History Month Logo',
  className,
  ...svgProps
}) {
  return (
    <svg
      width="400"
      height="64"
      viewBox="0 0 400 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      {...svgProps}
    >
      <image href={bhmImage} x="0" y="0" height="64" width="64" />
      <text
        x="75"
        y="30"
        fill={textColor}
        fontFamily="Biorhyme, serif"
        fontSize="22"
        fontWeight="bold"
      >
        <tspan fill="#FFA706" className="text-4xl">
          Black History
        </tspan>
        <tspan x="75" dy="26">
          Month
        </tspan>
      </text>
    </svg>
  )
}

BhmLogo.propTypes = {
  textColor: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
}
