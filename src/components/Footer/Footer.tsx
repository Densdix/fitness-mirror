import React from 'react'
import s from './Footer.module.css'
import footerGirl from './../../assets/footer-girl.png'

const Footer = () => {
    return (
        <div className={s.section}>
            <div className='flex items-end max-sm:items-end justify-start flex-wrap max-sm:flex-col gap-y-4'>
                <div className='pl-24 max-lg:hidden max-xl:pl-12'><img className='w-[475px] max-xl:w-[350px] max-sm:w-[350px]' src={footerGirl} alt="" /></div>
                <div className='flex flex-col items-center justify-end mx-auto px-4 pb-32 max-xl:py-16 gap-y-6'>
                    <p className='text-[40px] text-white uppercase font-bold leading-[1.2] max-w-[500px]'>JOIN THE WAITING LIST</p>
                    <p className='text-[20px] text-white font-normal max-w-[550px] leading-[1.2] text-right'>Sign up for our newsletter and be the first to know about updates, new classes, challenges, and much more.</p>
                    <div className='flex max-sm:flex-col justify-end w-full gap-x-8 gap-y-2'>
                        <input className='border border-white bg-transparent rounded-full text-white text-[14px] placeholder:text-white px-4 max-sm:py-2' placeholder='Email address' type="text" />
                        <button className='px-[25px] py-[10px] bg-gradient-to-b from-[#8B1CFB] to-[#B02CDF] rounded-full uppercase text-white font-semibold text-[14px]'>download now</button>
                    </div>
                    <div className='w-full flex justify-end'>
                    <p className='text-[16px] text-white font-normal max-w-[375px] text-right'>Information on how FIT MIRROR handles your data can be found in our privacy policy</p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Footer