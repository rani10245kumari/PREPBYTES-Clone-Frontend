import React from 'react'
import '../COMPONENT-CSS/Fullstack.css';
function Fullstack() {
    return (
        <div>
            <div className='container1'>
                <div className='container1-A'>
                    <div className='container1-A-left'>
                        <p>Partner with</p>
                        <img src='/images/brand3.webp' alt='#'></img>
                        <h1>Learn Full Stack Web Development & Build Real World Projects using React & Node</h1>
                        <p className='prg'>Full Stack Web Development Certification Course -
                            Accredited by Nasscom, approved by the Government India.</p>
                        <button className='buttn'>Download Syllabus</button>
                    </div>
                    <div className='container1-A-right'>

                        <div className='right-box'>
                            <p className='para1'>Next Batch starts: 1st May, 2023</p>

                            <p className='para2'> Limited seats available</p>
                        </div>
                        <div className='right-box'>
                            <p className='para1'>Program Duration: 4 - 5 months</p>
                            <p className='para2'>15-20 hours/week</p>
                        </div>
                        <div className='right-box'>
                            <p className='para1'>Learning Format</p>
                            <p className='para2'>Recorded Lectures + Online Live Classes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container2'>
                <h4>SELECT BATCH</h4>
                <div>
                    <label for></label>
                </div>
            </div>
        </div>
    )
}

export default Fullstack
