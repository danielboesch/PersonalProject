import {useState} from 'react'
import Auth from './Auth'


const Dash = () => {
    const [showMenu, setShowMenu] = useState(true)

    const toggleMenu = () => {
        // alert(showMenu)
        setShowMenu(!showMenu)
      }


    return(
        <div>
            <header>

                <div className={`loginPopUp ${showMenu ? "show" : ""}`}>

                    <p className="startOfSomethingText">The Start of <br></br><b className="somethingGoodText">Something Good</b></p>
                    <input className='homeLoginEmail' placeholder="Email..."></input>
                    <input className='homeLoginPassword' placeholder="Password..."></input>
                    <div className="holdsAuthButtons">
                        <button className='homeLoginBtn'><b>Login</b></button>
                        <button className='homeSignUpBtn'><b>Sign Up</b></button>
                    </div>
                    <div className='authHeaderColor'></div>
                   </div>


                <h5 className='learnMoreText'>Learn More</h5>
                <div className="worldDiv" >
                <img className='worldBtn' alt='locations button' src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/globe-icon-18-256.png"></img>
                </div>
                <div className='userBtn' onClick={toggleMenu}>
                    <img className='hamburgerBtn' src='https://static.thenounproject.com/png/659800-200.png'></img>
                    <div className='profilePicImg'>
                        <div className='profilePicColor'></div>
                        <img className='profilePicImg2' src='https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png'></img>
                    </div>
                </div>
            </header>
            <div className="videoBox">
                <iframe className='mainVideo' src="https://player.vimeo.com/video/513591708?autoplay=1&loop=1&color=A20B35&background=1" width="640" height="860" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <div className='homeTitleButton'>
                <h1 className='homeTitle'>Plan Your Trip Away Today</h1>
                <button className='findRideBtn'><strong>Find Your Ride</strong></button>

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
            <section className='dashSection2'>
                <h1 className='locationsText'>LOCATIONS</h1>
            </section>

            
        </div>
    )
}

export default Dash