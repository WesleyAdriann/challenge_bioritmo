import * as React from 'react'

const IconCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg height='10rem' viewBox='0 0 24 24' width='10rem' {...props}>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path
      d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'
      fill={props.color ?? '#818181'}
    />
  </svg>
)

export const Check = React.memo(IconCheck)
