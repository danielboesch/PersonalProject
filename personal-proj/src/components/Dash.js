import {Link} from 'react-router-dom'
import {useState} from 'react'
import {logout} from '../redux/authReducer'
import Scroll from './ScrollLocations'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from './Footer'
// import Test from './Test'



const Dash = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        // alert(showMenu)
        setShowMenu(!showMenu)
      }
    const toggleScroll = () => {
        // alert(showMenu)
        setShowMenu(!showMenu)
      }
      let scrollBtn = () => {
        window.scrollTo(600, 600);
      };
      let scrollAbout = () => {
        window.scrollTo(1700, 1700);
      };


    

    return(
        
        <div>
            {/* <Test /> */}
            <h5 className='learnMoreText' onClick={scrollAbout}>Learn More</h5>
        <div className="worldDiv" >
            <img className='worldBtn' alt='locations button' src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/globe-icon-18-256.png" onClick={scrollBtn}></img>
        </div>
        <div className='videoBoxBoxDash'>

            <div className="videoBox">
                <iframe className='mainVideo' src="https://player.vimeo.com/video/513591708?autoplay=1&loop=1&color=A20B35&background=1" width="640" height="860" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <div className='homeTitleButton'>
                <h1 className='homeTitle'>Plan Your Trip Away Today</h1>

                <button className='findRideBtn scroll-down' onClick={scrollBtn}><strong>Find Your Ride</strong></button>

            </div>
            </div>
            </div>
            <Scroll/>
            <section className='dashSection1'>
                <ul class='dashCheckList'>
                    <li>✓ 100% free roadside assistance</li>
                    <li>✓ Real people here to help 24/7</li>
                    <li>✓ Get it delivered</li>
                    <li>✓ More reviews. More 5-star ratings</li>
                </ul>
            </section>
            <section className='dashSection2' id='sec-2'>
                <div className='locationsTextAndBar'>
                    <h1 className='locationsText'>LOCATIONS</h1>
                    <div className='locationsLine'></div>
                </div>
                <div className='holdsAllLocations'>
                    <div className='locationUtah'>
                        <div className='homeLocationImgBox'>
                            <img className='pics2' alt='utah' src='https://zioncamp.com/wp-content/uploads/2020/11/Ferber_Resorts_Vanlife_Blog_Header_Image.jpg'></img>
                        </div>
                        <div className='utahBoxInBox'>
                            <b className='quotationMarks'>"</b>
                            <b className='quotationMarks2'>"</b>
                            <div className='utahBackgroundColor'>
                                <h1 className='dashLocationsUtahText'>UTAH</h1>
                            </div>
                            <h3 className='dashLocationsUtahInfo'>Every state thinks it’s fun. Every state claims to have “something for everyone.” But not every state has <b>3.5 distinct geographic regions, five national parks, 45 state parks, 5 national historic sites & trails, and a dozen national monuments & recreation areas.</b></h3>
                           <Link to='/utah'> <button className='homeUtahBtn'><b>EXPLORE UTAH</b></button></Link>
                        </div>
                    </div>
                    <div className='locationCali'>
                        <div className='homeLocationImgBox'>
                            <img className='caliImgHome' alt='california' src='https://www.favething.com/uploads/images/main-fave-images/goin_beach_to_beach_van_life-2.jpg'></img>
                        </div>
                        <div className='utahBoxInBox'>
                            <b className='quotationMarks'>"</b>
                            <b className='quotationMarks2'>"</b>
                            <div className='utahBackgroundColor'>
                                <h1 className='dashLocationsUtahText2'>CALIFORNIA</h1>
                            </div>
                            <h3 className='dashLocationsUtahInfo'>California has all the iconic destinations you've dreamed of visiting, plus a countless number of <b>incredible off-the-beaten-track experiences. Top theme parks, secret beaches, and city finds.</b> Explore  sunny California with road trips that visit every corner of the state.</h3>
                            <Link to='/california'> <button className='homeUtahBtn'><b>EXPLORE CALIFORNIA</b></button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='dashSection3'>
                <div className='section3BigBox'>
                    <div className='section3Content'>

                    <div className='section3Headers'>
                        <h3 className='section3Going'>Going on a road trip? Considering van life?</h3>
                        <h1 className='section3Covered'>We've got you covered</h1>
                    </div>
                    <p className='dashSection3Text'>
                        Whether you're taking a road trip, or thinking about van life as a part-time or full-time endeavor, investing in or converting a van is a process full of big decisions. Navigating the many different options, set-ups, conversions, and even designing your nomadic lifestyle can feel overwhelming. So before taking the plunge, we're here to give you that van life experience with less commitment. Whether you're looking for a fun way to travel or you're considering if the van life is right for you, we're here to help.</p>
                        <div className='roadPicBox'>
                            <img className='roadImg' alt='road' src='http://www.duwemetal.com/wp-content/uploads/2020/08/straight-road-clipart-8.jpg'/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

            
        </div>
    )
}

export default Dash