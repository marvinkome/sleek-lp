import * as React from 'react'
import { SVGProps } from 'react'

const IconStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={80}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        opacity={0.88}
        fillRule="evenodd"
        clipRule="evenodd"
        d="m55.914 39.212 23.982.698-23.982.698a15.62 15.62 0 0 0-15.158 15.16l-.698 23.982-.698-23.983a15.62 15.62 0 0 0-15.158-15.159L.221 39.91l23.981-.698A15.62 15.62 0 0 0 39.36 24.053L40.058.07l.698 23.983a15.62 15.62 0 0 0 15.158 15.159Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h80v79.769H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default IconStar
