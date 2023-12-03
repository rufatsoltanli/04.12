import React from 'react'
import OrangeButton from '../../Components/OrangeButton'
import "./style.scss"

function Footer() {
  return (
    <footer>
      <div className="footerCont">
        <div className="aboutMe">
          <h1>ABOUT ME</h1>
          <div className="content">
            <div className="text">Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,

            </div>
            <div className="copyRight">Copyright ©2023 All rights reserved</div>
          </div>
        </div>
        <div className="newsLetter">
          <h1>NEWSLETTER</h1>
          <div className="content">
            <div className="text">Stay updated with our latest trends</div>
            <div className="eMail">
              <input type="text" placeholder='Email Address' /><OrangeButton><i class="fa-solid fa-arrow-right"></i></OrangeButton>
            </div>
          </div>
        </div>
        <div className="followMe">
          <h1>FOLLOW ME</h1>
          <div className="content">
            <div className="text">Let us be social</div>
            <div className="icons"> <ul>
              <li><i class="fa-brands fa-facebook-f"></i></li>
              <li><i class="fa-brands fa-twitter"></i></li>
              <li><i class="fa-brands fa-github"></i></li>
              <li><i class="fa-brands fa-discord"></i></li>
            </ul></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer