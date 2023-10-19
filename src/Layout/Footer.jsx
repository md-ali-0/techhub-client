import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import dakLogo from '/dark-logo.png';
import lightLogo from '/light-logo.png';

const Footer = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <footer className="bg-white dark:bg-[#111827]">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/">
                        <img
                            src={darkMode ? dakLogo : lightLogo}
                            className="w-36 mx-auto "
                            alt="Tech Hub"
                        />
                    </Link>
                    <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
                        © {new Date().getFullYear()} Tech Hub. All Rights
                        Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
