import React from 'react';
import { Send } from "@material-ui/icons";

export default function Newsletter() {
    return (
        <>
            <div className='news-container'>
                <div className='news-description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, debitis?
                </div>
                <div className='news-input-container'>
                    <input placeholder='Your Email' />
                    <button>
                        <Send />
                    </button>
                </div>
            </div>
        </>
    );
}
