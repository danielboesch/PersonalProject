import {Link} from 'react-router-dom'
import {logout} from '../redux/authReducer'
import {initialState} from '../redux/authReducer'
import {useState} from 'react'
import axios from 'axios';
import {setUser} from '../redux/authReducer';
import {connect} from 'react-redux';
import Dash from './Dash'
import {useSelector, useDispatch} from 'react-redux'



const Header = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showMenu, setShowMenu] = useState(false)
    const {user} = useSelector((store) => store.auth)



    const nodemailer = require('nodemailer');

    const toggleMenu = () => {
        // alert(showMenu)
        setShowMenu(!showMenu)
      }

    const handleRegister = () => {
        axios.post('/auth/register', {email, password})
        .then((res) => {
            console.log(res.data)
            props.setUser(res.data)

            toggleMenu()

            // props.history.push('/')
        })
        .catch(err => console.log(err))
    }
    const handleLogin = () => {
        axios.post('/auth/login', {email, password})
        .then((res) => {
            console.log(res.data)
            props.setUser(res.data)
            toggleMenu()

            // props.history.push('/')
        })
    }
    const logout = () => {
        axios
          .get('/auth/logout')
          .then(() => {
            props.logout({});
          })
          .catch(err => console.log(err));
      }

    return(
        <div>



<div>

<header>


<div className={`loginPopUp ${showMenu ? "show" : ""}`}>

    <p className="startOfSomethingText">The Start of <br></br><b className="somethingGoodText">Something Good</b></p>
    <input className='homeLoginEmail' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
    <input type='password' className='homeLoginPassword' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
    <div className="holdsAuthButtons">
    <button className='homeLoginBtn' onClick={handleLogin}><b>Login</b></button>
    <button className='homeSignUpBtn' onClick={handleRegister}><b>Sign Up</b></button>

    </div>
    <div className='authHeaderColor'></div>
   </div>


{/* <h5 className='learnMoreText'>Learn More</h5>
<div className="worldDiv" >
<img className='worldBtn' alt='locations button' src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/globe-icon-18-256.png"></img>
</div> */}
<div className='userBtn' onClick={toggleMenu}>
    <img className='hamburgerBtn' src='https://static.thenounproject.com/png/659800-200.png'></img>
    <div className='profilePicImg'>
        <div className='profilePicColor'></div>
        <img className='profilePicImg2' src='https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png'></img>
    </div>
</div>
</header>









            {/* <h1>Auth Page</h1>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button> */}
        </div>




        <header className="headerMain">
            {/* <Link to='/'>Dash</Link> */}
            {/* <Link to='/auth'>Auth</Link> */}
            {/* <Link to='/utah'>Utah</Link> */}
            {/* <Link to='/california'>California</Link> */}
            {/* <Link to='/cart'>Cart</Link> */}
            
            {/* <Link onClick={() => {logout()}}>Logout</Link> */}
        </header>

        </div>
        
    )
}
export default connect(null, {setUser})(Header)
// export default Header
