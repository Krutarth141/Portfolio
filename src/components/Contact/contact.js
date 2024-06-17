import React, {useRef} from 'react'
import './contact.css'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import InstagramIcon from '../../assets/instagram.png'
import YoutubeIcon from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_92yl089', 'template_8os8ecb', form.current, 'Z_J_Abpzr9-MV7ckv', {
            publicKey: 'sEL5ao4HV2A1X4faJyXr4',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <section id='contactPage'>
                <div id='contact'>
                        <h1 className='contactPageTitle'>Contact Me</h1>
                        <span className='contactDesc'>Please fill out the form below to discuss work oppotunities.</span>
                        <form className='contactForm' ref={form} onSubmit={sendEmail}>
                            <input type='text' className='name' placeholder='Your name' name='your_name'/>
                            <input type='email' className='email'  placeholder='Your email' name='your_email'/>
                            <textarea className='msg' name="message" rows="5" placeholder='Your message' ></textarea>
                            <button type='submit' value='Send' className='submitBtn'>Submit</button>
                            <div className='links'>
                                <img src={FacebookIcon} alt='Facebook' className='link'/>
                                <img src={TwitterIcon} alt='Twitter' className='link'/>
                                <img src={YoutubeIcon} alt='Youtube' className='link'/>
                                <img src={InstagramIcon} alt='Instagram' className='link'/>

                            </div>
                        </form>
                </div>
        </section>
    )
}

export default Contact

