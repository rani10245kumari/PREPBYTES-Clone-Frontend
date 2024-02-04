import React from 'react'
import Project from '../Project';
import '../PROJECT/Html.css';

function Html() {
    return (
        <div>
            <Project></Project>
            <div className='html-main'>
                <img src='/Allimg/html.png' alt='#' className='html-left'></img>
                <div className='html-right'>
                    <h3>Topics</h3>
                    <div className='html-right2'>
                        <p>HTML</p>
                        <p>Form</p>
                        <p>Table</p>
                        <p>Tags</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Html
