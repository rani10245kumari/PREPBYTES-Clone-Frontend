import React from 'react'
import Project from '../Project';
import '../PROJECT/Html.css';

function Node() {
    return (
        <div>
            <Project></Project>
            <div className='html-main'>
                <img src='/Allimg/node.png' alt='#' className='html-left'></img>
                <div className='html-right'>
                    <h3>Topics</h3>
                    <div className='html-right2'>
                        <p>EXPRESS</p>
                        <p>NODEMON</p>
                        <p>CORS</p>
                        <p>.ENV</p>
                        <p>ROUTING</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Node
