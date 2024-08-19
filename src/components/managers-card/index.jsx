import { Icons } from '@/icons'
import Image from 'next/image'
import React from 'react'

const ManagersCard = ({newStory}) => {
  return (
    <div className='flex gap-[10px] items-start relative w-full ml-[5px] flex-grow-[1]'>
        <div className={`bg-transparent relative ${newStory ? "w-[52px] h-[52px]" : "w-[54px] h-[54px]"} flex-shrink-0`}>
            {newStory && <Icons.gradient_line width='60px' height='60px' className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />}
            <Image className='w-full rounded-[50%] h-full object-cover object-center' alt='user photo' width={54} height={54} src={'/user-photo.jpg'} />
        </div>

        <div className='border-b-[1px] border-solid border-borderColor w-full pb-[10px]'>
            <p className='text-primary text-[1.125rem] font-[400]'>Лолита Пушкина <span className='text-purple font-[500]'>©</span></p>
            <p className='text-primary/40 text-[0.75rem] font-[400] mb-[8px]'>Marketolog, SMM.m</p>

            <div className='flex w-full items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-[26px] h-[26px] mr-[-8px] rounded-[50%] overflow-hidden border-[2px] border-solid border-[white]'>
                  <Image className='w-full h-full object-cover object-center bg-[white]' src={'/bmw.png'} width={24} height={24} />
                </div>
                <div className='w-[26px] h-[26px] mr-[-8px] rounded-[50%] overflow-hidden border-[2px] border-solid border-[white]'>
                  <Image className='w-full h-full object-cover object-center bg-[white]' src={'/uzum.png'} width={24} height={24} />
                </div>
                <div className='w-[26px] h-[26px] mr-[-8px] rounded-[50%] overflow-hidden border-[2px] border-solid border-[white]'>
                  <Image className='w-full h-full object-cover object-center bg-[white]' src={'/mers.png'} width={24} height={24} />
                </div>
                <div className='w-[26px] h-[26px] mr-[-8px] rounded-[50%] overflow-hidden border-[2px] border-solid border-[white]'>
                  <Image className='w-full h-full object-cover object-center bg-[white]' src={'/cola.jpg'} width={24} height={24} />
                </div>
              </div>

              <button className='px-[8px] py-[4px] border-purple rounded-[42px] text-purple font-[400] text-[11px] leading-[13px] border-[1px] border-solid'>
                + Подписаться
              </button>
            </div>
        </div>
    </div>
  )
}

export default ManagersCard