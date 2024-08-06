import React from 'react';

const PhoneNumberInput = ({ value, setValue, ...props }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 9) {
      setValue(inputValue);
    }
  };

  return (
    <div className='flex gap-[8px] border-b-[1px] border-[#eee] border-solid py-[10px] px-[6px]'>
      <span className='text-[black] text-[1rem] font-[500]'>+998</span>
      <span className='h-[25px] w-[1.5px] bg-[black]/10'></span>
      <input
        {...props}
        value={value}
        onChange={handleChange}
        type='number'
        className='text-[black] text-[1rem] font-[500] outline-none'
      />
    </div>
  );
};

export default PhoneNumberInput;