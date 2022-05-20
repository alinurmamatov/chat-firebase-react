import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user, signUpWithEmail, signInWithGmail} = useAuthContext();

    const onSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) {
            alert("Please, enter email and password");
        } else {
            signUpWithEmail({email, password});
        }
    }

    return user ? (
        <Navigate to='/'/>
    ) : (
        <div className="container"> 
            <div className="form-card">
                <h2 className='title'>Join the Chat</h2>
                <form onSubmit={onSubmit}>
                <p className='label'>Email</p>
                <input type="email" placeholder='email' className='input' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className='label'>Password</p>
                <input type="password" placeholder='password' className='input' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className='sign-btn' type='submit'>Sign Up</button>
                <hr />
                <button className='gmailSign-btn' onClick={() => signInWithGmail()}>Sign In with Gmail</button>
                </form>
            </div>
        </div>
    )
}

export default Login;