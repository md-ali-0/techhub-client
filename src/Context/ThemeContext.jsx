import PropTypes from 'prop-types';
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false);
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    const darkTheme = {
        darkMode,
        setDarkMode
    }
    return (
        <ThemeContext.Provider value={darkTheme}>
            {children}
        </ThemeContext.Provider>
    );
};
ThemeProvider.propTypes = {
    children: PropTypes.node,
}
export default ThemeProvider;