import React from 'react'
import Project from '../Project';
import '../PROJECT/Html.css';

function Html() {
    return (
        <div>
            <Project></Project>
            <div className='html-main'>
                <div className='html-left'>
                    <img src='/Allimg/html.png' alt='#' ></img>
                    <p>HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. Learning HTML provides a foundation for understanding how web pages are structured and how content is presented on the internet</p>
                </div>
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
