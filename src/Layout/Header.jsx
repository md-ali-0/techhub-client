import { useState } from 'react';
import {
    BiCart,
    BiMenu,
    BiMoon,
    BiPlusCircle,
    BiSun,
    BiUserCircle,
    BiX,
} from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import dakLogo from '/dark-logo.png';
import lightLogo from '/light-logo.png';
import userLogo from '/user.png';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    const user = false;
    const [open, setOpen] = useState(false);
    const [userProfile, setUserProfile] = useState(false);

    return (
        <header className="shadow bg-white dark:bg-slate-900 dark:text-gray-100 duration-100">
            <div className="container mx-auto px-3">
                <nav className="flex justify-between flex-wrap items-center py-6">
                    <Link to="/">
                        <img
                            src={darkMode ? dakLogo : lightLogo}
                            className="w-36 mr-3"
                            alt="Tech Hub"
                        />
                    </Link>
                    <div className="flex justify-center items-center md:order-2 gap-3">
                        <button
                            onClick={() => {
                                setDarkMode(!darkMode);
                            }}>
                            {darkMode ? (
                                <BiMoon size={25}></BiMoon>
                            ) : (
                                <BiSun size={25}></BiSun>
                            )}
                        </button>
                        <button>
                            <BiCart size={25}></BiCart>
                        </button>
                        <button>
                            <BiPlusCircle size={25}></BiPlusCircle>
                        </button>
                        <div className="text-lg">
                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() =>
                                            setUserProfile(!userProfile)
                                        }
                                        className="flex justify-center">
                                        <img
                                            className="w-10 object-cover rounded-full border border-gray-300"
                                            src={userLogo}
                                            alt=""
                                        />
                                    </button>
                                    {userProfile && (
                                        <div
                                            className={`absolute right-0 top-[70px] bg-white dark:bg-slate-900 rounded shadow-xl w-52 p-4`}>
                                            <ul className="flex flex-col gap-2">
                                                <li className="p-2 text-lg cursor-pointer rounded hover:bg-slate-100 dark:hover:bg-slate-700">
                                                    Mohammad Ali
                                                </li>
                                                <li className="p-2 text-lg cursor-pointer rounded hover:bg-slate-100 dark:hover:bg-slate-700">
                                                    Profile
                                                </li>
                                                <li className="p-2 text-lg cursor-pointer rounded hover:bg-slate-100 dark:hover:bg-slate-700">
                                                    Logout
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <Link to='/login' className="hidden md:block bg-slate-800 border border-slate-500 text-slate-100 rounded-md py-2 px-3">
                                        Login
                                    </Link>
                                    <BiUserCircle
                                        className="md:hidden"
                                        size={25}></BiUserCircle>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-3xl md:hidden">
                            {open ? <BiX></BiX> : <BiMenu></BiMenu>}
                        </button>
                    </div>
                    <div
                        className={`w-full md:w-auto md:inline md:order-1 ${
                            open ? '' : 'hidden'
                        }`}>
                        <ul className="flex flex-col justify-center items-center md:flex-row text-lg gap-5 py-10 md:py-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'border-b-2 border-slate-800 dark:border-slate-500'
                                            : ''
                                    }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/brands"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'border-b-2 border-slate-800 dark:border-slate-500'
                                            : ''
                                    }>
                                    Brands
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'border-b-2 border-slate-800 dark:border-slate-500'
                                            : ''
                                    }>
                                    Products
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
