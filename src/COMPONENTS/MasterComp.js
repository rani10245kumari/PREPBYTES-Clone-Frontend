import React from 'react'
import '../COMPONENT-CSS/Master-com.css';

function MasterComp() {
    return (
        <div className='master-main'>
            <div className='master'>
                <div className='left'>
                    <h2>MASTER COMPETITIVE PROGRAMMING</h2>
                    <p>Master Competitive Programming Fom Zero And Become
                        A Top-Rated Coder <span>Under The Guidance Of Top Competitive Programmers</span></p>
                    <button className='enrol'>Enrol Now</button>
                </div>
                <div className='right'>
                    <img src='/images/master-logo.webp' alt='#'></img>
                </div>
            </div>
            <div className='container2'>
                <div className='enrol1 one'>
                    <img src='/images/enroll-1.webp' alt='#'></img>
                    <h4>9 month intensive bootcamp</h4>
                </div>
                <div className='enrol1 two'>
                    <img src='/images/enroll-2.webp' alt='#'></img>
                    <h4>Quick doubt resolution</h4>
                </div>
                <div className='enrol1 three'>
                    <img src='/images/enroll-3.webp' alt='#'></img>
                    <h4>Live coding sessions with top-rated coders</h4>
                </div>
                <div className='enrol1 four'>
                    <img src='/images/enroll-4.webp' alt='#'></img>
                    <h4>Get certificate on course completion</h4>
                </div>


            </div>
            <div className='container3'>
                <h5>Get Guidance From Industry Leading Mentors</h5>
                <p>Other Mentors You Will Be Interacting With</p>
            </div>
        </div>
    )
}

export default MasterComp
