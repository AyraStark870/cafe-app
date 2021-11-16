import React from 'react'

export const SaborTarta = ({setSaborTarta}) => {
  return (
    <div >
      <select onChange={e => setSaborTarta(e.target.value)}>
        <option>fresa</option>
        <option>chocolate</option>
        <option>limon</option>
      </select>
    </div>
  )
}
