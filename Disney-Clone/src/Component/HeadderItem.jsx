import React from 'react'

function HeadderItem({ name, icon: Icon }) {
  return (
    <div className='flex items-center 
     font-semibold text-[15px]
     space-x-1 cursor-pointer gap-2  
     hover:underline underline-offset-8' >
      <Icon className='text-2xl ' />
      <h2>{name}</h2>
    </div>
  )
}

export default HeadderItem
