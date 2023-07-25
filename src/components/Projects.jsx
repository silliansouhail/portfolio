import React from 'react'

import PrImage1 from '../asset/image/e-commerce_website.png'
import PrImage2 from '../asset/image/Portfolio_1.png'
import PrImage3 from '../asset/image/movieApp_1.png'
import PrImage4 from '../asset/image/Laihous Dashboard_1.png'
import './Projects.css'

const Projects = () => {
    const projects = [
        {
            id:1,
            title:'Business Startup Demo',
            description:'Design & Development of an E-commerce Website',
            url:'https://sillian-store.netlify.app',
            image:PrImage1,
        },
        {
            id:2,
            title:'Personal Web Page Demo',
            description:'Design & Development of a Personal Portfolio Website',
            url:'https://portfolio-websiteby-laihous.netlify.app',
            image:PrImage2,
        },
        {
            id:3,
            title:'Business Startup Demo',
            description:'Design & Development of a Video Galere Website',
            url:'https://laihous-movie-app.netlify.app',
            image:PrImage3,
            },
            {
                id:4,
                title:'Admin Dashboard Demo',
                description:'Design & Development of an Admin Dashboard',
                url:'https://mern-stack-admin-dashboard-frontend.onrender.com',
                image:PrImage4,
                },
    ]
return (
    <section className="projects" id="projects">
        <div className="project__container">
            {projects.map(({...projects})=>{
                return(
                    <div className="project__card">
                        <div className="project__image">
                            <a href={projects.url}target="_blank" rel="noreferrer">
                                <img src={projects.image} alt="project" />
                            </a>
                        </div>
                        <div className="project__text">
                            <h4> {projects.title} </h4>
                            <span> {projects.description} </span>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
)
}

export default Projects