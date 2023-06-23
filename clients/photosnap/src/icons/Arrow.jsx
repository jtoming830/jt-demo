import * as React from 'react'
const SvgArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={14}
    viewBox="0 0 43 14"
    {...props}
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      d="M0 7h41.864m-6.436-6 6 6-6 6"
    />
  </svg>
)
export default SvgArrow
