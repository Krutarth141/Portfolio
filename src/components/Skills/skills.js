import React from 'react'
import './skills.css';
import Frontend from '../../assets/frontend.png';
import Backend from '../../assets/backend.png';
import Appdesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>As a versatile Full-Stack Engineer, I possess a robust blend of skills in both backend and frontend development, enabling me to create comprehensive, end-to-end solutions for web applications.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Frontend} alt='Frontend' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Frontend Development</h2>
                    <p>Creating dynamic user interfaces with ReactJS for a seamless user experience.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Backend} alt='Backend' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Backend Development</h2>
                    <p>Building robust server-side logic using Node.js and Express to handle client requests.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Appdesign} alt='Appdesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>Integrating frontend and backend seamlessly, utilizing ReactJS for the client-side and Node.js with Express for the server-side, ensuring a full-stack application.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
