import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from '../../Portrait2.png';

const Contact=()=> {
    const form = useRef();

 const formSubmit = (e) => {
    e.preventDefault();

        emailjs.sendForm('service_bd86l0l','template_qjbhylo', form.current,'fLhSfXn3isbwgMILz' )
        .then((result)=>{
            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        }
        );

         e.target.reset()

    }
  return (
    <section id="Contact" className="mt-5">
        <div className='container'>



<div className="card">
  
  <div className="card-body text-white">
    <div className="left-side">
        <img src={logo}/>
        <div className="email-address details">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
          <div className="topic">Email</div>
          <div className="emailaddy"><i>michiasshif.com</i></div>
        </div>
      </div>
      <div className="right-side">
        <h1 className='card-title text-pacman mb-1' style={{lineHeight:0, paddingTop:"2rem"}}>Get In Touch</h1>
        <h4 className="topic-text">Let's talk about everything!</h4>
        <small> If you have any work from me or any types of queries, you can send me message from here!</small>
      <form onSubmit={formSubmit} ref={form}>
        <div className="input-box">
          <input type="text" placeholder="Enter your name" id="name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" id="email"/>
        </div>
        <div className="input-box message-box">
            <textarea name='message' id="message" placeholder="Add a message here" cols={60} rows={8}></textarea>
            </div>
             <a role="button" type="submit" value="Send" className="btn btn-complement-pacorange mt-4" >Send Message</a>
            </form>
            </div>

    </div>
</div>
</div>

    </section>
  )
}

export default Contact
