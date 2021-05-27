import {Link} from 'react-router-dom'
import {logout} from '../redux/authReducer'

const Header = () => {
    return(
        <header>
            <Link to='/'>Dash</Link>
            <Link to='/auth'>Auth</Link>
            <Link to='/utah'>Utah</Link>
            <Link to='/california'>California</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/auth' onClick={() => {logout()}}>Logout</Link>
        </header>
    )
}
export default Header