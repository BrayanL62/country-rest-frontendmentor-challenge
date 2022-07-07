import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as faSolidMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faRegularMoon } from '@fortawesome/free-regular-svg-icons'
import { useAppContext, useState } from '../context/state';
import Link from 'next/link';

const Navbar = () => {

    const { darkMode, setDarkMode } = useAppContext()

    function toggleDarkMode() {
        setDarkMode(!darkMode)
    }

    return (
        <nav className='h-20 flex items-center justify-between px-4 bg-white dark:bg-dark-blue-dark-mode shadow-lg'>
            <Link href="/">
                <a><h1 className='dark:text-white font-extrabold text-sm desktop:text-2xl desktop:mx-20'>Where in the world?</h1></a>
            </Link>
            {
                darkMode ? (
                    <p onClick={toggleDarkMode} className='cursor-pointer text-white desktop:mx-[75px]'>
                        <FontAwesomeIcon icon={faSolidMoon} className='w-4 h-4 inline relative top-[1px] desktop:w-5 desktop:h-5 desktop:-top-[1px]'/>
                        <span className='text-xs desktop:text-base'>Light Mode</span>
                    </p>
                ) : (
                    <p onClick={toggleDarkMode} className='cursor-pointer desktop:mx-[75px]'>
                        <FontAwesomeIcon icon={faRegularMoon}  className='w-4 h-4 inline relative top-[1px]  desktop:w-5 desktop:h-5 desktop:-top-[1px]'/>
                        <span className='text-xs desktop:text-base'>Dark Mode</span>
                    </p>
                )
            }
            
        </nav>
    );
}
 
export default Navbar;