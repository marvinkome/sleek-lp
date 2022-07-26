import * as React from 'react'
import { SVGProps } from 'react'

const IconArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={148}
    height={148}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M74 25v97.435m0 0c-8.301-13.957-13.475-18.573-24-24m24 24c7.406-14.072 12.63-19.808 24-24"
      stroke="#000"
      strokeWidth={3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
)

export default IconArrow
