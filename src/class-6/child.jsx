import React, { memo } from 'react'

const Child = () => {
    console.log("h1hh1h1h1");
    
  return (
    <div>Child</div>
  )
}

export default memo(Child)