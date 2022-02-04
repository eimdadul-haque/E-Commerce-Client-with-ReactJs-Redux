import React from 'react';
import "./Registration.css";

export default function Registration() {
    return (
        <>
            <div className='reg-container'>
                <div className='reg-warpper'>
                    <h1 className='pro-title'>Create an Account</h1>
                    <form className='reg-from'>
                        <input className='reg-input' placeholder='name' />
                        <input className='reg-input' placeholder='last name' />
                        <input className='reg-input' placeholder='username' />
                        <input className='reg-input' placeholder='email' />
                        <input className='reg-input' placeholder='password' />
                        <input className='reg-input' placeholder='confirm password' />
                        <span className='reg-agreement'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <b>A, nemo</b>.
                        </span>
                        <button className='reg-button'>CREATE</button>
                    </form>
                </div>
            </div>
        </>
    );
}
