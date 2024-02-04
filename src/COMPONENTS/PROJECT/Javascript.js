import React from 'react'
import Project from '../Project';
import '../PROJECT/Html.css';

function Javascript() {
    return (
        <div>
            <Project></Project>
            <div className='html-main'>
                <img src='/Allimg/javascript.png' alt='#' className='html-left'></img>
                <div className='html-right'>
                    <h3>Topics</h3>
                    <div className='html-right2'>
                        <p>DOM</p>
                        <p>EVENTLOOP</p>
                        <p>CALLBACK</p>
                        <p>CLOUSRE</p>
                        <p>HOF</p>
                        <p>ARRAYMETHODS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Javascript
