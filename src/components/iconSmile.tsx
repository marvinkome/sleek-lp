import * as React from 'react'
import { SVGProps } from 'react'

const IconSmile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.419 24.2a1.48 1.48 0 0 0 1.469 1.489 1.48 1.48 0 0 0 1.47-1.49 1.48 1.48 0 0 0-1.47-1.488 1.48 1.48 0 0 0-1.47 1.489m-19.05 1.917a1.48 1.48 0 0 1-1.469 1.49 1.48 1.48 0 0 1-1.47-1.49c0-.822.658-1.488 1.47-1.488.812 0 1.47.666 1.47 1.488m9.942 13.186c-7.854 0-11.444-5.837-11.593-6.085a.683.683 0 0 1 .245-.942.703.703 0 0 1 .954.242c.133.22 3.355 5.41 10.356 5.41 7.038 0 10.26-5.19 10.394-5.411a.702.702 0 0 1 1.156-.062.68.68 0 0 1 .042.763c-.149.248-3.739 6.085-11.554 6.085"
        fill="#000"
      />
      <path
        d="M23.87 47.438c12.933 0 23.418-10.485 23.418-23.418C47.288 11.086 36.803.602 23.869.602 10.936.602.451 11.086.451 24.02c0 12.933 10.485 23.418 23.418 23.418Z"
        stroke="#000"
        strokeWidth={1.164}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default IconSmile
