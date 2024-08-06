import React from 'react'

const CustomButton = ({text, disabled, ...props}) => {
  return (
    <button {...props} className={`w-full ${disabled ? "bg-[#f5f5f5]" : "bg-lightPuprle"} outline-none py-[12px] ${disabled ? "text-primary/40" : "text-purple"} font-[400] text-[13px] leading-[15px]`}>
        {text}
    </button>
  )
}

export default CustomButton