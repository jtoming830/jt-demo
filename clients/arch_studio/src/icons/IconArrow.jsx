import * as React from 'react'
const SvgIconArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={20}
    {...props}
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeWidth={2}
      d="m15 1 9 9-9 9M0 10h24"
    />
  </svg>
)
export default SvgIconArrow
