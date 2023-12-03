import React from 'react'
import OrangeButton from '../OrangeButton'
import "./style.scss"
function BrandNewApp() {
    return (
        <section id='brandNewApp'>
            <div className="leftSide">
                <div className="smallTitle">BRAND NEW APP TO BLOW YOUR MIND
                </div>
                <div className="mainTitle">WE'VE MADE A LIFE
                    THAT WILL CHANGE YOU</div>
                <div className="description">We are here to listen from you deliver exellence
                </div>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
                <div className="button"><OrangeButton>Get Started Now</OrangeButton></div>

            </div>
            <div className="rightSide"><img src="https://preview.colorlib.com/theme/woodrox/img/about-1.jpg.webp" alt="" /></div>
        </section>
    )
}

export default BrandNewApp