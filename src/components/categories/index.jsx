import { Icons } from '@/icons'
import React from 'react'

const Categorie = ({categorie_name, close = true}) => {
  return (
    <div className='flex max-h-[40px] gap-[10px] border-[1px] border-solid border-lightGray py-[6px] px-[16px] rounded-[100px] bg-white'>
        <p className='text-black font-[500]'>{categorie_name}</p>
        {
          close &&
          <Icons.close_icon className='cursor-pointer' />
        }
    </div>
  )
}

export default Categorie