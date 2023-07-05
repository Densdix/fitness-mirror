import React from 'react'
import s from './Token.module.css'
import coins from './img/fitcoins.png'

const Token = () => {
    return (
        <div className={s.container}>
            <div className={s['section-1']}>
                <div className='flex items-center max-sm:items-center justify-center flex-row max-sm:flex-col gap-y-4 px-10'>
                    <div className='mx-auto'><img className='w-[580px] max-sm:w-[350px]' src={coins} alt="" /></div>
                    <div className='flex flex-col items-center justify-center mx-auto px-4 gap-y-7'>
                        <p className='pt-4 text-[42px] text-[#1B1B20] uppercase font-bold leading-[1.2] max-w-[450px]'> the token<span className='text-[#D61FDA]'> fitcOIN </span></p>
                        <div className='max-w-[400px]'>
                            <h2 className='text-[24px] text-[#1B1B20] font-bold'>Our mission</h2>
                            <p className='text-[18px] text-[#626262] font-normal leading-[1.2]'>Inspire people to live a healthier and happier lifestyle, connect them with Web3, financially reward their commitment, and combat sedentarism through community empowerment.</p>
                        </div>
                        <div className='max-w-[400px]'>
                            <h2 className='text-[24px] text-[#1B1B20] font-bold'>Our aim</h2>
                            <p className='text-[18px] text-[#626262] font-normal leading-[1.2]'>We aim to be the leading  Web3 train 2 earn ecosystem for fitness & health that transforms real money spent for healthy activities into VCOIN and micro shareholding ownership.</p>
                        </div>
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
                        <p className='font-bold text-[40px]'>Utility</p>
                        <div className='flex flex-wrap items-start justify-center gap-x-24 gap-y-16 py-4'>
                            <div className='max-w-[200px]'>
                                <h2 className='text-[22px] font-bold leading-[1.1] pb-4'>Utility 1</h2>
                                <p className='text-[12px] text-[#1B1B20] font-normal leading-[1.2] text-center'>
                                    Earn back your spent money for the Avatar NFT & FIT MIRROR Hardware
                                </p>
                            </div>
                            <div className='max-w-[200px]'>
                                <h2 className='text-[22px] font-bold leading-[1.1] pb-4'>Utility 2</h2>
                                <p className='text-[12px] text-[#1B1B20] font-normal leading-[1.2] text-center'>
                                    Earn additional rewards for training with FIT MIRROR
                                    Get fixed interest rates every 12 months for the tokes you earned
                                </p>
                            </div>
                            <div className='max-w-[200px]'>
                                <h2 className='text-[22px] font-bold leading-[1.1] pb-4'>Utility 3</h2>
                                <p className='text-[12px] text-[#1B1B20] font-normal leading-[1.2] text-center'>
                                    Bonded with your NFT gives you shareholder rights.
                                    Get revenue shares and voting rights in FIT MIRROR

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Token