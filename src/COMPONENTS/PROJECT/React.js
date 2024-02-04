import React from 'react'
import Project from '../Project';
import '../PROJECT/Html.css';

function Reactjs() {
    return (
        <div>
            <Project></Project>
            <div className='html-main'>
                <img src='/Allimg/react.png' alt='#' className='html-left'></img>
                <div className='html-right'>
                    <h3>Topics</h3>
                    <div className='html-right2'>
                        <p>REACT-LIFECYCLE</p>
                        <p>HOOKS</p>
                        <p>CONTEXT-API</p>
                        <p>REDUX</p>
                        <p>AXIOS</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reactjs
