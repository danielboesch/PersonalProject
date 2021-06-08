import {Link} from 'react-router-dom'
import {useState} from 'react'
import {logout} from '../redux/authReducer'
import Scroll from './ScrollLocations'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



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
        <Scroll/>
      };


    

    return(
        
        <div>
            <h5 className='learnMoreText'>Learn More</h5>
        <div className="worldDiv" >
            <img className='worldBtn' alt='locations button' src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/globe-icon-18-256.png"></img>
        </div>
            <div className="videoBox">
                <iframe className='mainVideo' src="https://player.vimeo.com/video/513591708?autoplay=1&loop=1&color=A20B35&background=1" width="640" height="860" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <div className='homeTitleButton'>
                <h1 className='homeTitle'>Plan Your Trip Away Today</h1>
                            <Scroll />

                <button className='findRideBtn scroll-down' onClick={scrollBtn()}><strong>Find Your Ride</strong></button>

            </div>
            </div>
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
                <h1>Hello</h1>
            </section>

            
        </div>
    )
}

export default Dash