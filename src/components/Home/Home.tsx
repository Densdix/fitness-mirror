import React from 'react'
import s from './Home.module.css'
import fitcoinImg from './../../assets/fitcoin.png'
import fitcoinsImg from './../../assets/fit-coins.png'
import calcCoins from './../../assets/calc-coins.png'
import yogaGirl from './../../assets/yoga-girl.png'
import phoneGirl from './../../assets/girl-with-phone.png'
import appstoreImg from './../../assets/appstore.png'
import googlePlayImg from './../../assets/googlePlay.png'

import clocks from './../../assets/cloks.svg'
import tools from './../../assets/tools.svg'
import people from './../../assets/people.svg'
import { calcData } from '../../constants'

const Home = () => {
    return (
        <main className={s.container}>
            <div className={s.section}>
                <div className='flex flex-wrap flex-row items-center justify-center gap-y-2'>
                    <div className='flex flex-col items-start justify-normal xl:max-w-[620px] max-w-[440px] pl-8 max-sm:px-4 xl:pl-36 text-left leading-[1.2] text-[#252525]'>
                        <h2 className='text-[50px] font-semibold max-w-[400px] pb-6 font-Fredoka'>TRAIN, PROGRESS & EARN CRYPTO</h2>
                        <p className='text-[#626262] text-[20px] leading-[1.1]'>FIT MIRROR is a web3 train 2 earn ecosystem for fitness & health that transforms real money spent on healthy activities into FIT MIRROR tokens & shareholding ownership.</p>
                        <div className='flex flex-wrap pt-10'>
                            <img className='h-12 pr-4' src={appstoreImg} alt="" />
                            <img className='h-12' src={googlePlayImg} alt="" />
                        </div>
                    </div>
                    <div className='ml-auto'>
                        <img className='w-[650px] max-xl:w-[580px] max-lg:w-[550px]' src={fitcoinImg} alt="" />
                    </div>
                </div>


            </div>
            <div
                style={{ background: 'linear-gradient(133deg, #FFF5DD 0%, rgba(170, 86, 254, 0.32) 37.22%, rgba(254, 86, 217, 0.28) 58.14%, rgba(86, 254, 254, 0.28) 100%)' }}
                className='h-50 py-20'>
                <div className='flex flex-wrap items-center justify-center gap-x-20 gap-y-16'>
                    <div className='max-w-[300px]'>
                        <img className='mx-auto pb-5 w-11' src={clocks} alt="" />
                        <h2 className='text-[28px] font-bold leading-[1.1] pb-5'>Workouts on your schedule</h2>
                        <p className='text-[20px] leading-[1.1]'>50+ live classes streaming weekly.  5000+ on-demand classes available.</p>
                    </div>
                    <div className='max-w-[300px]'>
                        <img className='mx-auto pb-5 w-11' src={tools} alt="" />
                        <h2 className='text-[28px] font-bold leading-[1.1] pb-5'>Dynamic tools and classes</h2>
                        <p className='text-[20px] leading-[1.1]'>Find what suits you best: On-demand, live classes, and goal based programs.</p>
                    </div>
                    <div className='max-w-[300px]'>
                        <img className='mx-auto pb-5 w-11' src={people} alt="" />
                        <h2 className='text-[28px] font-bold leading-[1.1] pb-5'>Empowering community</h2>
                        <p className='text-[20px] leading-[1.1]'>Join like-minded people eager to pioneer a new way of staying fit.</p>
                    </div>
                </div>
            </div>

            <div className={s['section-2']}>
                <div className='flex flex-col items-center justify-center px-4 pb-4'>
                    <img className='w-[550px]' src={fitcoinsImg} alt="" />
                    <p className='pt-8 text-[14px] text-[#1B1B20] font-normal'>INTRODUCING</p>
                    <p className='pt-4 text-[40px] text-[#1B1B20] uppercase font-bold leading-[1.2]'> FIT MIRROR<br /> the <span className='text-[#D61FDA]'>fitcOIN</span> token</p>
                    <p className='pt-4 text-[14px] text-[#626262] font-normal max-w-[450px]'>A new cryptocurrency that makes you earn for training & being more healthy. Earn what you spend, bonuses & get the rights of a FIT MIRROR shareholder </p>
                </div>

                <div className='flex items-center max-sm:items-start justify-start flex-row max-sm:flex-col gap-y-4'>
                    <div><img className='w-[500px] max-sm:w-[350px]' src={yogaGirl} alt="" /></div>
                    <div className='flex flex-col items-center justify-center mx-auto px-4'>
                        <p className='pt-4 text-[40px] text-[#1B1B20] uppercase font-bold leading-[1.2] max-w-[400px]'> MAKING <span className='text-[#D61FDA]'>CRYPTO </span>ACCESSIBLE
                            <br /><span className='text-[#D61FDA]'>TO ANYONE</span></p>
                        <p className='pt-4 text-[14px] text-[#626262] font-normal max-w-[550px]'>FIT MIRROR converts your training into crypto, FITCOIN, offering millions easy access to the world of cryptocurrencies
                            with Game-Fi and Social-Fi, FIT MIRROR aims to become a platform that serves millions and empowers them to live healthier and be happier through a supportive social movement that fosters the development of a global Web3 vibrant ecosystem owned by its users.</p>
                    </div>

                </div>
            </div>

            <div className='py-24'>
                <div
                    style={{
                        background: 'linear-gradient(133deg, #FFF5DD 0%, rgba(170, 86, 254, 0.32) 37.22%, rgba(254, 86, 217, 0.28) 58.14%, rgba(86, 254, 254, 0.28) 100%)',
                        boxShadow: '-10px 10px 50px 0px rgba(0, 0, 0, 0.10), 10px 10px 60px 0px rgba(255, 255, 255, 0.40) inset'
                    }}
                    className='mx-28 max-sm:mx-4 px-8 rounded-[20px]'>
                    <div className='flex flex-col items-center justify-center py-10'>
                        <p className='font-bold text-[40px]'>HOW YOU EARN</p>
                        <div className='flex flex-wrap items-start justify-center gap-x-24 gap-y-16 py-4'>
                            <div className='max-w-[280px]'>
                                <h2 className='text-[22px] font-bold leading-[1.1] pb-4'>Step 1</h2>
                                <ul className='text-[12px] text-[#1B1B20] font-normal leading-[1.5] list-disc text-left'>
                                    <li>Download the FIT MIRROR App</li>
                                    <li>Spend 120 euro and get your Avatar NFT</li>
                                    <li>Do your first workout and learn the game</li>
                                </ul>
                            </div>
                            <div className='max-w-[280px]'>
                                <h2 className='text-[22px] font-bold leading-[1.1] pb-4'>Step 2</h2>
                                <ul className='text-[12px] text-[#1B1B20] font-normal leading-[1.5] list-disc text-left'>
                                    <li>Train 240 min monthly to unlock your credits</li>
                                    <li>Train more and win extra FITCOINs every month</li>
                                </ul>
                            </div>
                            <div className='max-w-[280px]'>
                                <h2 className='text-[22px] font-bold leading-[1.1] pb-4'>Step 3</h2>
                                <ul className='text-[12px] text-[#1B1B20] font-normal leading-[1.5] list-disc text-left'>
                                    <li>Transform your body & mind</li>
                                    <li>After 12 months earn up to 12% interest rate on your tokens </li>
                                    <li>Swap your tokens or claim your FIT MIRROR shareholder rights </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s['section-3']}>
                <div className='flex flex-col items-center justify-center px-4 pb-16 max-lg:pb-8'>
                    <p className='pt-4 text-[46px]  max-lg:text-[42px] max-md:text-[38px] text-[#1B1B20] uppercase font-bold leading-[1.2]'> SUPERCHARGE YOUR TRAINING<br />WITH THE <span className='text-[#D61FDA]'>FIT MIRROR</span></p>
                </div>

                <div className='flex items-center max-sm:items-center max-sm:justify-center justify-start flex-row gap-y-4 max-sm:flex-col max-sm:order-2'>
                    <div className='flex flex-col items-center justify-center mr-auto ml-36 max-lg:ml-14 max-sm:mx-auto'>
                        <p className='pt-3 text-[36px] max-lg:text-[32px] max-md:text-[30px] text-[#1B1B20] uppercase font-bold leading-[1.2] max-w-[400px]'>FIT MIRROR <span className='text-[#D61FDA]'>S</span></p>
                        <p className='pt-3 text-[22px] max-lg:text-[18px] max-md:text-[16px] text-[#2D2D2D] font-bold max-w-[250px]'>NFT entry 1400 euro</p>
                        <p className='pt-3 text-[18px] max-lg:text-[14px] max-md:text-[12px] text-[#626262] font-normal max-w-[200px] leading-[1.2]'>You get a super smart mirror to thain with</p>
                    </div>
                    <div className='flex flex-col items-center justify-center ml-auto mr-36 max-lg:mr-14 max-sm:mx-auto'>
                        <p className='pt-3 text-[36px] max-lg:text-[32px] max-md:text-[30px] text-[#1B1B20] uppercase font-bold leading-[1.2] max-w-[400px]'>FIT MIRROR <span className='text-[#D61FDA]'>X</span></p>
                        <p className='pt-3 text-[22px] max-lg:text-[18px] max-md:text-[16px] text-[#2D2D2D] font-bold max-w-[250px]'>NFT entry 2400 euro</p>
                        <p className='pt-3 text-[18px] max-lg:text-[14px] max-md:text-[12px] text-[#626262] font-normal max-w-[200px] leading-[1.2]'>You get a super smart mirror to thain with</p>
                    </div>

                </div>

                <div className='px-20 max-sm:px-4 max-sm:order-1'>
                    <img className='mx-auto -mt-20 pl-24 max-lg:-mt-10 max-lg:pl-12 max-sm:m-0 max-sm:p-0 max-sm:pb-4' src={phoneGirl} alt="" />
                </div>
            </div>

            <div className={s['section-4']}>
                <div className='flex flex-col items-center justify-center px-4 pb-16 max-lg:pb-8'>
                    <p className='pt-4 text-[44px] max-lg:text-[40px] max-md:text-[36px] max-sm:text-[30px] text-[#1B1B20] uppercase font-bold leading-[1.2]'> EARNING <span className='text-[#D61FDA]'>CALCULATOR</span></p>
                </div>
                <div className='flex items-center max-sm:items-start justify-center flex-wrap gap-y-16 max-xl:gap-x-4 gap-x-40 px-16 max-sm:px-4'>
                    <div style={{ background: 'linear-gradient(103deg, rgba(170, 86, 254, 0.32) 1.02%, rgba(255, 112, 223, 0.28) 27.60%, rgba(141, 237, 250, 0.28) 51.56%, rgba(255, 255, 255, 0.00) 100%)' }} className='flex flex-col items-center justify-center mx-auto p-10 rounded-2xl w-[480px] gap-y-1'>
                        <div className='flex justify-between gap-5 w-full'>
                            <h4 className='font-bold leading-[1.2] text-black text-[24px] max-sm:text-[20px] text-left'>Avatar</h4>
                            <p className='font-bold leading-[1.2] text-black text-[24px] max-sm:text-[20px] text-right'>Hardware</p>
                        </div>
                        {calcData.map(el => (
                            <div className='flex justify-between gap-5 w-full'>
                                <h4 className='font-normal leading-[1.2] text-black text-[18px] max-sm:text-[14px] text-left'>{el.title}</h4>
                                <p className='font-normal leading-[1.2] text-[#626262] text-[18px] max-sm:text-[14px] text-right'>{el.value}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <img className='w-[500px] max-sm:w-[350px]' src={calcCoins} alt="" />
                    </div>

                </div>


            </div>

        </main>
    )
}

export default Home