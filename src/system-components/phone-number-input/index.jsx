import React from 'react'

const PhoneNumberInput = ({placeholder}) => {
  return (
    <input type="number" placeholder={placeholder} className='px-[6px] w-full py-[9px] border-b-[1px] border-b-lightGray border-solid focus:outline-none text-primary font-[400] text-[16px] leading-[19px] placeholder:text-[#000]/30' />
  )
}

export default PhoneNumberInput