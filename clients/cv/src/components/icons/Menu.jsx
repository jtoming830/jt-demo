import * as React from 'react'
const SvgMenu = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 -2 20 20"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M0 16h20v-2H0v2ZM0 2h20V0H0v2Zm0 7h20V7H0v2Z"
    />
  </svg>
)
export default SvgMenu
