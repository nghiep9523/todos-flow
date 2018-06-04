//@flow

import React from 'react'

type LinkProps = {
  active: boolean,
  children: any,
  onClick: () => void
}

const Link = ({ active, children, onClick } : LinkProps) : ReactElement => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

export default Link
