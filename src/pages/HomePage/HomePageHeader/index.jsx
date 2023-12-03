import React from 'react'
import OrangeButton from '../../../Components/OrangeButton'
import "./style.scss"
function HomePageHeader() {
    return (
        <>
            <div className="homePageHeaderContent">
                <div className="leftSide">
                    <div className="text1">PRECISE CONCEPT DESIGN
                        FOR STYLISH LIVING</div>
                    <div className="text2">If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</div>
                    <div className="button"><OrangeButton>Get Started</OrangeButton></div>
                </div>
                <div className="rightSide">
                    <div className="iconsCont">
                        <div className="icon n1"><i class="fa-solid fa-couch"></i></div>
                        <div className="icon n2"><i class="fa-solid fa-couch"></i></div>
                        <div className="icon n3"><i class="fa-solid fa-couch"></i></div>
                        <div className="icon n4"><i class="fa-solid fa-couch"></i></div>
                        <div className="icon n5"><i class="fa-solid fa-couch"></i></div>
                        <div className="icon n6"><i class="fa-solid fa-couch"></i></div>
                    </div>
                </div>
            </div></>
    )
}

export default HomePageHeader