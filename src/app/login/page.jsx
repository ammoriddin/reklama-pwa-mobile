import CustomButton from '@/system-components/button'
import CustomInput from '@/system-components/input'
import PhoneNumberInput from '@/system-components/phone-number-input'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <section className='flex min-h-[100vh] flex-col justify-start px-[24px] pt-[120px] pb-[60px]'>
      <h1 className='font-[500] text-secondary text-[28px] leading-[30px] mb-[8px]'>Войти</h1>
      <p className='text-secondary mb-[57px] font-[400] text-[16px] leading-[19px]'>Don’t have an accaunt, <Link href={'/register'} className='text-purple'>register</Link></p>

      <div className='w-full mb-[35px]'>
        <PhoneNumberInput placeholder={'Phone number'} /> 
      </div>
      <div className='w-full mb-[35px]'>
        <CustomInput type={'password'} placeholder={'Enter your password'} />
      </div>

      <div className='flex-grow-[1]'>
        <CustomButton text={'Login'} />
      </div>

      <div className='flex items-center justify-center gap-[16px]'>
        <Link href={'/register'} className='text-[#14002E] font-[400] text-[13px] leading-[15.5px]'>Для SMM-менеджеров</Link>
        <span className='bg-[#eee] w-[2px] h-[24px]'></span>
        <Link href={'/register'} className='text-[#14002E] font-[400] text-[13px] leading-[15.5px]'>Для предприятия</Link>
      </div>
    </section>
  )
}

export default Login