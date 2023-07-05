import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import menuImg from './../../assets/menu.svg'

const Navbar = () => {

    const [activeClass, setActiveClass] = useState('');
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    const toggleMenu = () => {
        console.log('123')
        setMenuIsVisible(!menuIsVisible)
    }

    useEffect(() => {
        setActiveClass('py-6')
        window.addEventListener('scroll', () => {
            let activeClass = 'py-3';
            if (window.scrollY === 0) {
                activeClass = 'py-6';
            }
            if(window.scrollY !== 0){
                setMenuIsVisible(false)
            }
            setActiveClass(activeClass)
        });
    }, []);

    return (
        <nav className={`w-full bg-white fixed top-0 ${activeClass}`}>
            <div className='w-full px-[15px] mx-auto'>
                <div className='max-w-[1300px] mx-auto flex flex-wrap items-center justify-center px-4'>
                    <p className='text-center text-[20px] font-bold leading-[1.2] tracking-[1.92px] mr-auto uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#14125F] to-[#1d1c7521]'><NavLink to='/'>Fit mirror</NavLink></p>
                    <input className='hidden' type="checkbox" id='check' />
                    <label onClick={toggleMenu} className='sm:hidden max-sm:order-1' htmlFor="check">
                        <img width={32} height={32} src={menuImg} alt="menu" />
                    </label>
                    <ul className={`${menuIsVisible ? 'max-sm:block' : 'max-sm:hidden'} max-sm:mt-2 flex flex-wrap gap-x-[50px] text-[13px] font-medium text-[#242328] max-sm:flex-nowrap max-sm:w-full max-sm:order-2`}>
                        
                        <li className='block'><NavLink className={({isActive}) => isActive ? 'font-bold border-b-2 border-solid border-black' : ''} to="/">ABOUT</NavLink></li>
                        {/* <li className='block'><NavLink className={({isActive}) => isActive ? 'font-bold' : ''} to="#">LITEPAPER</NavLink></li> */}
                        <li className='block'><NavLink className={({isActive}) => isActive ? 'font-bold border-b-2 border-solid border-black' : ''} to="/token">TOKEN</NavLink></li>
                        {/* <li className='block'><NavLink className={({isActive}) => isActive ? 'font-bold' : ''} to="#"> PRODUCTS</NavLink></li> */}
                        <li className='block'>
                        <button className='sm:hidden max-sm:mt-2 px-[25px] max-sm:px-[15px] py-[10px] max-sm:py-[5px] text-[14px] max-sm:text-[12px] bg-gradient-to-b from-[#8B1CFB] to-[#B02CDF] rounded-full ml-auto uppercase text-white font-semibold '>download now</button>
                        </li>
                    </ul>




                    <button className='max-sm:hidden px-[25px] max-sm:px-[15px] py-[10px] max-sm:py-[5px] text-[14px] max-sm:text-[12px] bg-gradient-to-b from-[#8B1CFB] to-[#B02CDF] rounded-full ml-auto uppercase text-white font-semibold '>download now</button>
                </div>


            </div>

        </nav>
    )
}

export default Navbar