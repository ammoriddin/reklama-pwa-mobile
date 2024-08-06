import React from 'react'

const StepShower = ({step_counts, stepin}) => {
  return (
    <div className='w-full relative mb-[60px]'>
        <span className='h-[2px] z-[10] w-full absolute top-[50%] translate-y-[-50%] left-0 bg-[#eee]'></span>
        <span
            className={`h-[2px] transition-[width] duration-500 z-[15] absolute top-[50%] translate-y-[-50%] left-0 bg-purple`}
            style={{ width: `${(stepin / (step_counts - 1)) * 100}%`,filter: 'drop-shadow(0px 2px 5px #7000ff)' }}
        ></span>
    </div>
  )
}

export default StepShower