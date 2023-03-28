import React from 'react'

const NormalButton = ({numberValue}) => {
  return (
    <button className='w-10 h-10 bg-amber-800 text-white text-center'>
        {numberValue}
    </button>
  )
}

export default NormalButton
