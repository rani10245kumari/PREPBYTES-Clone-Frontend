import React from 'react'
import Project from '../Project';
import '../PROJECT/Html.css';
function Css() {
    return (
        <div>
            <Project></Project>
            <div className='html-main'>
                <img src='/Allimg/css.png' alt='#' className='html-left'></img>
                <div className='html-right'>
                    <h3>Topics</h3>
                    <div className='html-right2'>
                        <p>BOX-MODEL</p>
                        <p>FLEX</p>
                        <p>GRID</p>
                        <p>POSITION</p>
                        <p>ANIMATION</p>
                        <p>MEDIA QUERRY</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Css
