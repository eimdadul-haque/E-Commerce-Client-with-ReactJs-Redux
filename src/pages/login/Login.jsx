import React from 'react';
import "./Login.css";

export default function Login() {
    return (
        <>
            <div className='log-container'>
                <div className='log-warpper'>
                    <h1 className='log-title'>Create an Account</h1>
                    <form className='log-from'>
                        <input className='log-input' placeholder='username' />
                        <input type='password' className='log-input' placeholder='password' />
                        <button className='log-button'>LOGIN</button>
                        <a className='log-link'>Forgotten password?</a>
                        <a className='log-link'>Create an account</a>
                    </form>
                </div>
            </div>
        </>
    );
}
