import { useContext, useState } from 'react';
import {
    PiListThin,
    PiMoonThin,
    PiShoppingCartLight,
    PiSunLight,
    PiUserCircleThin,
    PiXThin,
} from 'react-icons/pi';
import { Link, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/AuthContext';
import { ThemeContext } from '../Context/ThemeContext';
import Loading from '../components/Loading';
import dakLogo from '/dark-logo.png';
import lightLogo from '/light-logo.png';
import userLogo from '/user.png';

const Header = () => {
    const { user, logOut, isLoading } = useContext(AuthContext);
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const [userProfile, setUserProfile] = useState(false);

    if (isLoading) {
        return <Loading></Loading>;
    }

    const logoutHandle = () => {
        logOut()
            .then(() => {
                toast.success('LogOut success!');
            })
            .catch(() => {
                toast.error('LogOut Error!');
            });
    };
    return (
        <header className="sticky top-0 z-50 shadow bg-white dark:bg-[#111827] dark:text-gray-100 duration-100">
            <div className="container mx-auto px-3">
                <nav className="flex justify-between flex-wrap items-center py-6">
                    <Link to="/">
                        <img
                            src={darkMode ? dakLogo : lightLogo}
                            className="w-32 mr-3"
                            alt="Tech Hub"
                        />
                    </Link>
                    <div className="flex justify-center items-center md:order-2 gap-3">
                        <button
                            onClick={() => {
                                setDarkMode(!darkMode);
                            }}>
                            {darkMode ? (
                                <PiMoonThin size={25}></PiMoonThin>
                            ) : (
                                <PiSunLight size={25}></PiSunLight>
                            )}
                        </button>
                        <Link to="/cart">
                            <PiShoppingCartLight
                                size={25}></PiShoppingCartLight>
                        </Link>
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
                                            src={
                                                user?.photoURL
                                                    ? user.photoURL
                                                    : userLogo
                                            }
                                            alt=""
                                        />
                                    </button>
                                    {userProfile && (
                                        <div
                                            className={`absolute right-0 top-[70px] z-50 bg-white dark:bg-slate-900 rounded shadow-xl w-52 p-4`}>
                                            <ul className="flex flex-col gap-2">
                                                <li className="p-2 text-lg cursor-pointer rounded hover:bg-slate-100 dark:hover:bg-slate-700">
                                                    {user?.displayName
                                                        ? user.displayName
                                                        : 'User Name'}
                                                </li>
                                                <li className="p-2 text-lg cursor-pointer rounded hover:bg-slate-100 dark:hover:bg-slate-700">
                                                    <Link to="/add-brand">
                                                        Add Brand
                                                    </Link>
                                                </li>
                                                <li className="p-2 text-lg cursor-pointer rounded hover:bg-slate-100 dark:hover:bg-slate-700">
                                                    <Link to="/add-category">
                                                        Add Category
                                                    </Link>
                                                </li>
                                                <li
                                                    onClick={logoutHandle}
                                                    className="p-2 text-lg cursor-pointer rounded hover:bg-slate-100 dark:hover:bg-slate-700">
                                                    Logout
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <Link
                                        to="/login"
                                        className="hidden md:block bg-slate-800 border border-slate-500 text-slate-100 rounded-md py-2 px-3">
                                        Login
                                    </Link>
                                    <Link to="/login">
                                        <PiUserCircleThin
                                            className="md:hidden"
                                            size={25}></PiUserCircleThin>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-3xl md:hidden">
                            {open ? (
                                <PiXThin></PiXThin>
                            ) : (
                                <PiListThin></PiListThin>
                            )}
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
                                    to="/products"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'border-b-2 border-slate-800 dark:border-slate-500'
                                            : ''
                                    }>
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/add-product"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'border-b-2 border-slate-800 dark:border-slate-500'
                                            : ''
                                    }>
                                    Add Product
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ToastContainer />
        </header>
    );
};

export default Header;
