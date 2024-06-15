import React from 'react'
import './intro.css';
import bg from '../../assets/image.jpg';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Krutarth</span> <br/>Full Stack Developer</span>
            <p className='introPara'>I am a skilled web designer and proficient MERN Stack <br/>Engineer, adapt at creating visually appealing<br/> and highly functional web applications.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
   
  );
}

export default Intro;
