import React, { useContext } from 'react'
import { ThemeContext } from '../App.jsx'

function ChildC() {
    const { theme, setTheme } = useContext(ThemeContext);

    
    function changeTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
        console.log(theme);
    }

    return (
        <div>
            <button onClick={changeTheme}>Change Color</button>
        </div>
    )
}

export default ChildC;
