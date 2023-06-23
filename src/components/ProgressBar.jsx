import React from 'react'

const ProgressBar = () => {
    const lvls = [1,2,3,4,5,6,7,8];
  return (
    <div className='flex flex-row gap-2'>
    {
        lvls.map((item, index) => (
            <div key={index} className={`w-3 h-4 ${localStorage.getItem(item) === 'true' ? 'bg-[#68ff72a6]' : 'bg-secondary'} rounded-sm`} />
        ))
    }
    </div>
  )
}

export default ProgressBar