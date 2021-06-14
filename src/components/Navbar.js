import React, { useEffect, useState } from 'react'
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {
    const [colorTheme, setColorTheme] = useState("default");


    useEffect(() => {
       let currentTheme =  localStorage.getItem('theme');
        if(currentTheme) {
            setColorTheme(currentTheme);
            if(currentTheme === 'dark-theme') {
                document.body.classList.add("dark-theme");
            }
            else {
                document.body.classList.remove("dark-theme");
            }
        }
        
    }, [])

    const changeTheme = (theme) => {
        setColorTheme(theme);
        localStorage.setItem('theme', theme);

        if(theme === 'dark-theme') {
            document.body.classList.add("dark-theme");
        }
        else {
            document.body.classList.remove("dark-theme");
        }
    }
    console.log(colorTheme);
    return (
        <header className="header">
            <nav className="flex flex-jc-sb flex-ai-c">
                <Link to="/"><h1 className="header__name">Where in the world?</h1></Link>
                <div className="header__btn flex flex-ai-c">
                    {
                        colorTheme === "default" ? 
                        <IoMoonOutline onClick={()=>changeTheme('dark-theme')} style={{cursor:"pointer"}}/>
                        : <IoMoonSharp onClick={()=>changeTheme('default')} style={{cursor:"pointer"}}/>
                    }
                    <span>Dark Mode</span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
