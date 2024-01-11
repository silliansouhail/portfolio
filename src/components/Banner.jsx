import React from 'react'
import { useState,useEffect } from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

import Image1 from '../asset/image/AstroHeader.png'
import './Banner.css'

const Banner = () => {
    const [loopNumber,setLoopNumber] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const [text,setText] = useState('');
    const [delet,setDelet] = useState(300 - Math.random() * 100);
    const toChange =["Web Developer","Web Designer","UI/UX Designer","Gamer","Logo Designer"];
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        },delet)

        return () => {clearInterval(ticker)};
    },)

    const tick =()=>{
        let i = loopNumber % toChange.length;
        let fullText = toChange[i];
        let newText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);
        
        setText(newText);

        if(isDeleting){
            setDelet(prevDelet => prevDelet /2);
        }

        if(!isDeleting && newText===fullText){
            setIsDeleting(true);
            setDelet(period)
        }else if(isDeleting && newText===''){
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelet(500);
        }

    };

  return (
    <section className="banner" id='home'>
        <div className="banner__container">
            <div className="row">
                <div className="banner__text">
                    <span className="tagline">Welcome To My Portfolio</span>
                    <h1>{`Hi I'm Souhail a `}<span className='wrap'>{text}</span> </h1>
                    <p>As a web developer,
                        my passion lies in creating visually appealing,
                        user-friendly, and responsive websites that enhance the user experience.
                        With +3 years of experience  in the field, I am well-versed in various programming languages,
                        including HTML, CSS, JavaScript,React and Nodejs.
                        My expertise lies in creating custom themes,
                        building e-commerce websites, and optimizing websites for speed and search engine rankings.
                        My goal is to provide clients with high-quality, functional websites that meet their unique needs and exceed their expectations.
                        Let's work together to bring your online vision to life.</p>
                    <div className='btn__container'>
                        <a href="#connect">
                            <button className='connect__btn'>
                            Let's Connect
                            <BsFillArrowRightCircleFill />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="banner__image">
                    <img className='image' src={Image1} alt="Astronaut" />
                </div>
        </div>
    </section>
  )
}

export default Banner