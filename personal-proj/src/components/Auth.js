import {useState} from 'react'
import axios from 'axios';
import {setUser} from '../redux/authReducer';
import {connect} from 'react-redux';

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <div>
            <h1>Auth Page</h1>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
            <button>Register</button>
        </div>
    )
}

export default connect(null, {setUser})(Auth)