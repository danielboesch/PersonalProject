import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <Link to='/'>Dash</Link>
            <Link to='/auth'>Auth</Link>
            <Link to='/utah'>Utah</Link>
            <Link to='/california'>California</Link>
            <Link to='/cart'>Cart</Link>
        </header>
    )
}
export default Header