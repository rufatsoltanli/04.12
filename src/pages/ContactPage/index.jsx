import React from 'react'
import Navbar from '../../layout/Navbar'
import "./style.scss"
import ContactHeader from './ContactPageHeader'
import OrangeButton from "../../Components/OrangeButton"

function ContactPage() {
  return (
    <section id='contactPage'>
      <header>
        <Navbar />
        <ContactHeader />
      </header>
      <main>
        <div className="contactPageCont">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12159.021120497631!2d49.8133732!3d40.3699503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397c01f75%3A0xf0294b9a0b29a77f!2zQXrJmXJiYXljYW4gTWVtYXJsxLFxIHbJmSDEsG7Fn2FhdCBVbml2ZXJzaXRldGk!5e0!3m2!1sen!2saz!4v1701634449409!5m2!1sen!2saz" height="450" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="contactSection">
            <div className="part1">
              <div className="parts">
                <div className="leftSide">
                  <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
                </div>
                <div className="rightSide">
                  <span>Baku ,Azerbaijan</span>
                  <span className='spanDescription'>Elmler Akademiyasi ,Yasamal-doma</span>
                </div>
              </div>
              <div className="parts">
                <div className="leftSide">
                  <div className="icon"><i class="fa-solid fa-phone"></i></div>
                </div>
                <div className="rightSide">
                  <span>+994 12 345 67 89</span>
                  <span className='spanDescription'>Mon to Fri 9am to 6 pm</span>
                </div>
              </div>
              <div className="parts">
                <div className="leftSide">
                  <div className="icon"><i class="fa-solid fa-envelope"></i></div>
                </div>
                <div className="rightSide">
                  <span>code@AzMF201.com</span>
                  <span className='spanDescription'>Send us your query anytime!</span>
                </div>
              </div>
            </div>
            <div className="part2">
              <input type="text" placeholder='Enter Your Name' />
              <input type="text" placeholder='Enter Your E-mail' />
              <input type="text" placeholder='Enter Subject' />

            </div>
            <div className="part3">
              <textarea placeholder='Enter Message' name="" id="" cols="60" rows="10"></textarea>
              <div className="button"><OrangeButton>Send Message</OrangeButton>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default ContactPage