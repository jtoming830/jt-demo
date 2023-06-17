import * as React from 'react'
const SvgPerson = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M341.942 356.432c-20.705-12.637-28.134-11.364-28.134-36.612v-40.403c11.364-12.62 15.497-11.049 25.107-60.597 19.433 0 18.174-25.248 27.34-47.644 7.471-18.238 1.213-25.632-5.08-28.654 5.144-66.462 5.144-112.236-70.292-126.436C263.539-7.351 222.278.606 202.725 4.517c-19.536 3.911-37.159 0-37.159 0l3.356 31.49c-28.608 34.332-14.302 80.106-18.908 106.916-6.002 3.27-11.416 10.809-4.269 28.253 9.165 22.396 7.906 47.644 27.34 47.644 9.61 49.548 13.742 47.977 25.107 60.597v40.403c0 25.248-8.581 25.683-28.133 36.612-47.14 26.349-108.569 41.658-119.575 124.01C48.468 495.504 134.952 511.948 256 512c121.048-.052 207.528-16.496 205.517-31.558-11.006-82.352-72.998-95.595-119.575-124.01z"
      className="person_svg__st0"
    />
  </svg>
)
export default SvgPerson
