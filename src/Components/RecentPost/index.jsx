import React from 'react'
import "./style.scss"
import OrangeButton from '../OrangeButton'
import WhiteButton from '../WhiteButton'
function RecentPost() {
    return (
        <section id='recentPost'>
            <div className="sectionTitle">
                <h1>RECENT POSTS FROM OUR BLOG
                </h1>
                <div className="sectionTitleText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
            </div>
            <div className="recentPostCartCont">
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-1.jpg.webp" alt="" />
                    <div className="buttons"><OrangeButton>Travel</OrangeButton><WhiteButton>Life Style</WhiteButton></div>
                    <div className="cardText">
                        <h1>LOW COST ADVERTISING</h1>
                        <div className="cardDescription">Acres of Diamonds… you've read the famous story, or at least had it related to you A farmer.

                        </div>
                        <div className="date">2-nd December, 2023</div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-1.jpg.webp" alt="" />
                    <div className="buttons"><OrangeButton>Travel</OrangeButton><WhiteButton>Life Style</WhiteButton></div>
                    <div className="cardText">
                        <h1>LOW COST ADVERTISING</h1>
                        <div className="cardDescription">Acres of Diamonds… you've read the famous story, or at least had it related to you A farmer.

                        </div>
                        <div className="date">2-nd December, 2023</div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-1.jpg.webp" alt="" />
                    <div className="buttons"><OrangeButton>Travel</OrangeButton><WhiteButton>Life Style</WhiteButton></div>
                    <div className="cardText">
                        <h1>LOW COST ADVERTISING</h1>
                        <div className="cardDescription">Acres of Diamonds… you've read the famous story, or at least had it related to you A farmer.

                        </div>
                        <div className="date">2-nd December, 2023</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentPost