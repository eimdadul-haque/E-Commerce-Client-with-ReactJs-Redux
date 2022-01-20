import React from 'react';
import { Send } from "@material-ui/icons";
import "./Newsletter.css";

export default function Newsletter() {
    return (
        <>
            <div className='news-container'>
                <h1 className='news-title'>
                    NewsLetter
                </h1>
                <div className='news-description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, debitis?
                </div>
                <div className='news-input-container'>
                    <input className='news-input' placeholder='Your Email' />
                    <button className='news-btn'>
                        <Send className='news-icon' />
                    </button>
                </div>
            </div>
        </>
    );
}
