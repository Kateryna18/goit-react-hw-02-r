import React from 'react'

export function Filter({handleChange, value}) {
  
    return (
    <div>
        <input type="text" value={value} onChange={handleChange} name="filter"/>
    </div>
  )
}
