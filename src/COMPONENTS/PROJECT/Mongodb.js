import React from 'react'
import Project from '../Project';
import '../PROJECT/Html.css';

function Mongodb() {
    return (
        <div>
            <Project></Project>
            <div className='html-main'>
                <img src='/Allimg/mongodb.png' alt='#' className='html-left'></img>
                <div className='html-right'>
                    <h3>Topics</h3>
                    <div className='html-right2'>
                        <p>Mongodb</p>
                        <p>DATABASE</p>
                        <p>MONGOOSE</p>
                        <p>NESTED-ROUTING</p>
                        <p>PAYMENT-INTEGRATION</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mongodb
