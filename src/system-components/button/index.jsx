import React from 'react'

const CustomButton = ({text, ...props}) => {
  return (
    <button {...props} className='w-full bg-lightPuprle outline-none py-[12px] text-purple font-[400] text-[13px] leading-[15px]'>
        {text}
    </button>
  )
}

export default CustomButton