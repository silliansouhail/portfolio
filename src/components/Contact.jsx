import React, { useRef,  } from 'react'
import emailjs from 'emailjs-com'

import Connect from '../asset/image/contact-img.svg'
import './Contact.css'

const Contact = () => {


    const formRef = useRef();

  const sendEmail = (e) => {
    console.log(formRef);
    e.preventDefault();

    emailjs.sendForm('service_i8844wp', 'template_uzkc0fu', formRef.current, 'ULDuDtm4sHxCIvmQr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='contact'id='connect' >
        <div className="contactCt">
            <div className="imageCt">
                <img src={Connect} alt="Connect Us" />
            </div>
            <div className="formCT">
                <h2>Get In Touch</h2>
                <form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" name='first_name' placeholder='First Name'required/>
                    <input type="text" name='last_name' placeholder='Last Name'/>
                    <input type="email" name='email' placeholder='Email Address'required/>
                    <input type="tel" name='phone_number' placeholder='Phone Number'/>
                    <textarea name="message" id="" cols="30" rows="6" required/>
                    <button type='submit' > <span> Send </span> </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact