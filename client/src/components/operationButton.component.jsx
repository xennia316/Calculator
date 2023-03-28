import React from 'react'

const OperationButton = ({operation}) => {
  return (
    <button className='w-10 h-10 bg-amber-700 text-white text-center'>
        {operation}
    </button>
  )
}

export default OperationButton