import React, { useState } from 'react'
import { MdOutlineDarkMode, MdLightMode } from 'react-icons/md'
import '../CSSFiles/Header.css'

function Header() {
    const [themeIcon, setThemeIcon] = useState(false);

    function lightTheme() {

        document.body.style.backgroundColor = "white"
        document.body.style.color = "#212121"
    }
    function darkTheme() {

        document.body.style.backgroundColor = "#212121"
        document.body.style.color = "white"
    }

    return (
        <div className="header">
            <h1>Raghu</h1>
            <div className="theme" onClick={() => setThemeIcon(!themeIcon)}>
                {themeIcon ? <MdLightMode /> : <MdOutlineDarkMode />}
                {!themeIcon ? lightTheme() : darkTheme()}
            </div>
        </div>
    )
}

export default Header