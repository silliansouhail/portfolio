import React from 'react'
import { useState ,useEffect} from 'react'
import {BsFacebook, BsTwitter} from 'react-icons/bs'

import Logo from '../asset/image/1-.jpg'

import './NavBar.css'

const NavBar = () => {
    const [activeNav,setActiveNav] = useState('#home');
    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        const onScroll =()=>{
            if(window.scrollY >50){
                setScrolled(true);
            }
        }

        window.addEventListener("scroll",onScroll);
        return() => window.removeEventListener("scroll",onScroll);
    },[])
  return (
    <nav className={scrolled?"scrolled":""}>
        <div className="logo__container">
            <a href="#home"onClick={()=>setActiveNav('#home')}>
                <img className="logo" src={Logo} alt="Logo" />
            </a>
        </div>

        <div className="link__container">
            <div className="page__link">

                    <a href="#home" 
                        onClick={()=>setActiveNav('#home')}
                        className={activeNav==='#home'?'active':'link'}>
                            Home
                    </a>
                
                    <a href="#skill" 
                        onClick={()=>setActiveNav('#skill') }
                        className={activeNav==='#skill'?'active':'link'}>
                            Skill
                    </a>

                    <a href="#projects"
                        onClick={()=>setActiveNav('#projects')}
                        className={activeNav==='#project'?'active':'link'}>Projects</a>
            </div>
            <div className="social__link">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className='social'><BsFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className='social'><BsTwitter /></a>
                
            </div>
            <a href="#connect"><button className='connect__btn'>Let's Connect</button></a>
        </div>

    </nav>
  )
}

export default NavBar