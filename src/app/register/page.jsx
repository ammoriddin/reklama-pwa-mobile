"use client"

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
import React, { useEffect, useState } from 'react'

const Register = () => {
  const [stepIn, setStepIn] = useState(1)
  const [nextStep, setNextStep] = useState(true)

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
  
  useEffect(() => {
    const { userName, age, password } = data;
    if (userName && age && password) {
      setNextStep(false);
    } else {
      setNextStep(true);
    }
  }, [data]);
  

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
           <PhoneNumberInput />
          
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
      </div>

      <div>
        <div className='flex items-center gap-[6px] mb-[13.5px]'>
          <Checkbox />
          <p className='text-primary font-[400] text-[14px]'>I agree to the <Link className='text-purple' href={'/privacy-policy'}>privacy policy</Link></p>
        </div>

        <CustomButton onClick={() => setStepIn(2)} disabled={nextStep} text={'Continue'} />
      </div>
    </section>
  )
}

export default Register