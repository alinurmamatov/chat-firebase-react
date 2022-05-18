import React from 'react';
import { useAuthContext } from '../context/AuthContext';

function Login() {
    const {user} = useAuthContext();


    return (
        <div className="container"> 
            <div className="form-card">
                <h2 className='title'>Join the Chat</h2>
                <form>
                <p className='label'>Email</p>
                <input type="text" className='input'/>
                <p className='label'>Password</p>
                <input type="text" className='input'/>
                <button className='sign-btn'>Sign In</button>
                <hr />
                <button className='gmailSign-btn'>Sign In with Gmail</button>
                </form>
            </div>
        </div>
    )
}

export default Login;