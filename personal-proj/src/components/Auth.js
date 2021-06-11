import {useState} from 'react'
import axios from 'axios';
import {setUser} from '../redux/authReducer';
import {setCart} from '../redux/cartReducer';
import {connect} from 'react-redux';
import Dash from './Dash'
import {useDispatch} from 'react-redux';

const Auth = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showMenu, setShowMenu] = useState(false)
    const dispatch = useDispatch()

    const toggleMenu = () => {
        // alert(showMenu)
        setShowMenu(!showMenu)
      }

    const handleRegister = () => {
        axios.post('/auth/register', {email, password})
        .then((res) => {
            console.log(res.data)
            dispatch(setUser(res.data))
            axios.get('/api/cart').then((response) => {
                dispatch(setCart(response.data))
                props.history.push('/')
            })
        })
        .catch(err => console.log(err))
    }
    const handleLogin = () => {
        axios.post('/auth/login', {email, password})
        .then((res) => {
            console.log(res.data)
            dispatch(setUser(res.data))
            axios.get('/api/cart').then((response) => {
                dispatch(setCart(response.data))
                props.history.push('/')
            })
        })
        .catch(err => console.log(err))
    }

    return(
<div>

<header>

<div className={`loginPopUp ${showMenu ? "show" : ""}`}>

    <p className="startOfSomethingText">The Start of <br></br><b className="somethingGoodText">Something Good</b></p>
    <input className='homeLoginEmail' placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} ></input>
    <input className='homeLoginPassword' placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)}></input>
    <div className="holdsAuthButtons">
        <button className='homeLoginBtn' onClick={handleLogin}><b>Login</b></button>
        <button className='homeSignUpBtn' onClick={handleRegister}><b>Sign Up</b></button>
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








            {/* <h1>Auth Page</h1>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button> */}
        </div>
    )
}
export default Auth
// export default connect(null, {setUser})(Auth)