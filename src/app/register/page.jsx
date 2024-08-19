"use client"

import Categorie from '@/components/categories'
import Gender from '@/components/gender'
import StepShower from '@/components/register-steps/step-shower'
import { Icons } from '@/icons'
import CustomButton from '@/system-components/button'
import Checkbox from '@/system-components/checkbox'
import CustomInput from '@/system-components/input'
import LocationInput from '@/system-components/location-input'
import PhoneNumberInput from '@/system-components/phone-number'
import VerificationCodePlace from '@/system-components/verification-code-place'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Register = () => {
  const [stepIn, setStepIn] = useState(1)
  const router = useRouter()

  const [phoneNumber, setPhoneNumber] = useState()
  const [position, setPosition] = useState()
  const [nestedPosition, setNestedPosition] = useState()
  const [userLogin, setUserLogin] = useState(false)

  const [data, setData] = useState({
    userName: "",
    age: "",
    password: ""
  });
  
  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleClick = () => {
    if (stepIn < 3) {
      setStepIn(stepIn + 1);
    } else {
      router.push('/profile');
      setUserLogin(true)
    }
  };

  useEffect(() => {
    if (userLogin) {
      window.localStorage.setItem('token', "faketoken")
    } else {
      return
    }
  }, [userLogin])
  

  return (
    <section className='flex flex-col min-h-[100vh] px-[20px] pt-[80px] pb-[50px]'>
      
      <div className='flex-grow-[1]'>
        <h1 className='text-secondary text-[28px] font-[500] leading-[30px] mb-[18px]'>Пожалуйста, заполните личные данные</h1>

        <StepShower step_counts={5} stepin={stepIn} />
        {
          stepIn === 1 &&
          <>

            <div className='flex flex-col gap-[12px] mb-[40px]'>
              <CustomInput
                name="userName"
                value={data.userName}
                onChange={handleChangeData}
                placeholder={'Username'}
                type={'text'}
              />
              <CustomInput
                name="age"
                value={data.age}
                onChange={handleChangeData}
                placeholder={'Enter your age'}
                type={'date'}
              />
              <LocationInput />
              <CustomInput
                name="password"
                value={data.password}
                onChange={handleChangeData}
                placeholder={'Create your password'}
                type={'password'}
              />
            </div>

            <Gender />
          </>
        }

        {
          stepIn == 2 &&
          <>
           <PhoneNumberInput value={phoneNumber} setValue={setPhoneNumber} />
          
            {/* Enter SMS Code Section */}
            <p className='text-[black] text-[1rem] font-[500] mb-[12px]'>Enter a sms code</p>

            {/* Verification Code Place */}
            <div className='mb-[24px]'>
              <VerificationCodePlace />
            </div>

            <div className='flex gap-[6px] items-center cursor-pointer mb-[35px]'>
              <Icons.replay width='20px' height='20px' stroke="#eee" />
              <p className='text-primary/20'>Resent code</p>
            </div>
          </>
        }

        {
          stepIn == 3 &&
          <>
            <div className='flex flex-col gap-[40px] mb-[15px]'>
              <CustomInput
                name="position"
                value={position}
                onChange={setPosition}
                placeholder={'Soha yo’nalishi'}
                type={'text'}
              />
            
              <CustomInput
                name="nestedposition"
                value={position}
                onChange={setPosition}
                placeholder={'Ichki yo’nalish'}
                type={'text'}
              />
            </div>

            <div className='flex items-center gap-[6px] mb-[60px]'>
              <Checkbox />
              <p className='text-primary font-[400] text-[14px]'>Vaqtincha ishsiz</p>
            </div>

            <div className='mb-[10px]'>
              <CustomInput
                name="nestedposition"
                value={position}
                onChange={setPosition}
                placeholder={'Kategoriyani tanlash'}
                type={'text'}
              />
            </div>

            <div className='flex flex-wrap gap-[8px] w-full h-[15vh] overflow-auto'>
              <Categorie categorie_name={'Ingiliz tili'} />
              <Categorie categorie_name={'Ingiliz tili'} />
              <Categorie categorie_name={'Ingiliz tili'} />
              <Categorie categorie_name={'Ingiliz tili'} />
              <Categorie categorie_name={'Ingiliz tili'} />
              <Categorie categorie_name={'Ingiliz tili'} />
              <Categorie categorie_name={'Ingiliz tili'} />
              <Categorie categorie_name={'Ingiliz tili'} />
            </div>
          </>
        }
      </div>

      <div>
        {
          stepIn == 1 && 
          <div className='flex items-center gap-[6px] mb-[13.5px]'>
            <Checkbox />
            <p className='text-primary font-[400] text-[14px]'>I agree to the <Link className='text-purple' href={'/privacy-policy'}>privacy policy</Link></p>
          </div>
        }

        <CustomButton onClick={handleClick} text={(stepIn === 1 || stepIn === 2) ? 'Continue' : 'Finish'} />
      </div>
    </section>
  )
}

export default Register