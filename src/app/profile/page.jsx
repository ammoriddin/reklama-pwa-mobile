import ManagersCard from '@/components/managers-card'
import { Icons } from '@/icons'
import React from 'react'

const Profile = () => {
  return (
    <section>
        <h1 className='font-[500] text-[16px] leading-[19.09px] text-center mb-[35px]'>Mening profilim</h1>

        {/* user data */}
        <div className='flex items-center gap-[12px] px-[16px] mb-[20px]'>
            <div className='flex justify-center items-center w-[82px] h-[82px] bg-lightGray rounded-[50%] '>
                <Icons.user width='32px' height='32px' />
            </div>

            <div>
                <h1 className='font-[500] text-[24px] leading-[28.5px] '>Shaxriyor Oripov</h1>
                <p className='font-[400] text-[14px] leading-[17px] text-[black]/40'>@username</p>
            </div>
        </div>

        {/* Categorie */}
        <div className='px-[36px] flex flex-wrap gap-[18px] mb-[60px]'>
            <p className='font-[400] text-primary text-[14px] leading-[17px]'>ingiliz tili</p>
            <p className='font-[400] text-primary text-[14px] leading-[17px]'>dizayn</p>
            <p className='font-[400] text-primary text-[14px] leading-[17px]'>futbolkalar</p>
            <p className='font-[400] text-primary text-[14px] leading-[17px]'>texnikalar</p>
            <p className='font-[400] text-primary text-[14px] leading-[17px]'>ingiliz tili</p>
            <p className='font-[400] text-primary text-[14px] leading-[17px]'>dizaynerlar</p>
            <p className='font-[400] text-primary text-[14px] leading-[17px]'>smartfonlar</p>
            <p className='font-[400] text-primary text-[14px] leading-[17px]'>football mahsulotlari</p>
        </div>

        {/* sections */}
        <div className='relative w-full justify-center flex items-center gap-[12px] mb-[32px]'>
            
            {/* Line */}
            <span className='w-full absolute top-[50%] translate-y-[-50%] bg-borderColor h-[2px]'></span>

            {/* Statistics */}
            <div className='w-[60px] cursor-pointer rounded-[50%] relative h-[60px] flex justify-center items-center bg-lightGray'>
                <Icons.statsIcon stroke='#322C39' width='16px' height='16px'  />
            </div>

            {/* Cards */}
            <div className='w-[60px] cursor-pointer rounded-[50%] relative h-[60px] flex justify-center items-center bg-lightGray'>
                <Icons.card fill='#322C39' width='16px' height='16px'  />
            </div>

            {/* Sves */}
            <div className='w-[60px] cursor-pointer rounded-[50%] relative h-[60px] flex justify-center items-center bg-lightGray'>
                <Icons.save fill='#322C39' width='16px' height='16px'  />
            </div>

            {/* Edit */}
            <div className='w-[60px] cursor-pointer rounded-[50%] relative h-[60px] flex justify-center items-center bg-lightGray'>
                <Icons.edit stroke='#322C39' width='16px' height='16px'  />
            </div>
        </div>

        <section className='px-[16px]'>
            {/* Search Section */}
            <div className='flex items-center gap-[8px] mb-[24px]'>
                <Icons.searchIcon width='24px' height='24px' />
                <input className='font-[500] text-[16px] leading-[19px] text-primary/30' placeholder='@username' type="text" />
            </div>

            <p className='font-[400] text-[12px] leading-[14.32px] mb-[16px]'>Мои СММ менеджера</p>

            {/* My Managers Section */}
            <div className='flex flex-col gap-[10px] mb-[24px]'>
                <ManagersCard newStory={true} />
                <ManagersCard newStory={false} />
                <ManagersCard newStory={false} />
                <ManagersCard newStory={true} />
            </div>

            <p className='font-[400] text-[12px] leading-[14.32px] mb-[16px]'>Реккомендуемые СММ Менеджера</p>

            {/* Recomended Managers Section */}
            <div className='flex flex-col gap-[10px]'>
                <ManagersCard newStory={true} />
                <ManagersCard newStory={false} />
                <ManagersCard newStory={false} />
                <ManagersCard newStory={true} />
            </div>

        </section>

        {/* Bottom Navigation */}
        <div className='fixed w-full bottom-0 left-0 py-[8px] bottom-navigation flex items-center justify-center gap-[50px] bg-[white]'>
            <div className='flex items-center justify-center flex-col gap-[2px]'>
                <Icons.home fill='#322C39' width='24px' height='24px' />
                <p className='text-[11px] font-[400] leading-[13px] text-primary'>Bosh Sahifa</p>
            </div>

            <div className='flex items-center justify-center flex-col gap-[2px]'>
                <Icons.manager fill='#322C39' width='24px' height='24px' />
                <p className='text-[11px] font-[400] leading-[13px] text-primary'>SMM Menegar</p>
            </div>

            <div className='flex items-center justify-center flex-col gap-[2px]'>
                <Icons.user fill='#7000FF' width='24px' height='24px' />
                <p className='text-[11px] font-[400] leading-[13px] text-purple'>Profilim</p>
            </div>
        </div>

    </section>
  )
}

export default Profile