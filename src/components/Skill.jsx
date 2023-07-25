import React from 'react'
import Carousel from "react-multi-carousel";

import meter1 from '../asset/image/meter1.svg';
import meter2 from '../asset/image/meter2.svg';
import meter3 from '../asset/image/meter3.svg';
import colorSharp from '../asset/image/color-sharp.png';
import "react-multi-carousel/lib/styles.css";

import './Skill.css'

const Skill = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skills' id="skill">
        <div className="container">
            <div className="skill__row">
                <div className="skill__col">
                    <div className="skill__box">
                        <h2>Skills</h2>
                        <p>I possess a diverse range of skills that enable me to design,
                            develop and deploy websites that meet the needs of my clients.
                            My technical expertise includes proficiency in HTML, CSS, JavaScript,
                            and various web development frameworks such as React.
                            I am also experienced in creating responsive websites that look great on any device.
                            In addition to my technical skills,
                            I have a keen eye for design and am well-versed in UX/UI principles,
                            allowing me to create websites that are both visually appealing and user-friendly.
                            I am committed to staying up-to-date with the latest web development trends and technologies,
                            and I am always looking for ways to enhance my skills and knowledge.
                        </p>
                        <Carousel responsive={responsive } infinite={true} className="skill__slider" >
                            <div className="item">
                                <img src={meter3} alt="Image1" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image2" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image3" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image4" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image5" />
                                <h5>JavaScript</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className='bgImage' src={colorSharp} alt="sharp" />
    </section>
  )
}

export default Skill