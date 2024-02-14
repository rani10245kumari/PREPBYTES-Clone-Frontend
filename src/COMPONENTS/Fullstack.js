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
                <div className='radio'>
                    <div className='radio1'>
                        <label >
                            <input type="radio" name="group1"></input>
                        </label>
                        <span className='spn'>
                            <h5>1st May</h5>
                            <p>Enrolment Started</p>
                        </span>

                    </div>
                    <div className='radio1'>
                        <label >
                            <input type="radio" name="group1"></input>
                        </label>
                        <span className='spn'>
                            <h5>15th May</h5>
                            <p>Enrolment Started</p>
                        </span>

                    </div>
                </div>
                <div className='boxx3'>
                    <h5>₹ 30000</h5>
                    <div className='box3-A'>
                        <button className='box3-bttn' onClick={() => setCheckpayment({ testTitle: "Enroll", testPrice: 3000 })}>Enroll Now</button>
                        <button className='box3-bttn2'>Try for free</button>
                    </div>
                </div>
            </div>
            <div className='containerr3'>
                <div className='cont3-left'>
                    <h4>Languages & Tools you will learn</h4>
                    <p>Start learning web development from basics of HTML,
                        CSS, Javascript.Master latest technologies like
                        React, Node, Express. Get hands on Github, Mongo
                        DB, Google Analytics, Facebook Analytics</p>
                </div>
                <div className='cont3-right'>
                    <img src='/images/course-img.png' alt='#'></img>
                </div>
            </div>
            <div className='containerr4'>
                <div className='cont4-left'>
                    <img src='/images/girl-img.webp' alt='#'></img>
                </div>
                <div className='cont4-right'>
                    <h5>What you will be after finishing the program?</h5>
                    <div className='cont4-right-A'>
                        <div className='C4-right1'>
                            <img src='/images/certificate.svg' alt='#'></img>
                            <p>Certified Full stack Developer</p>
                        </div>
                        <div className='C4-right1'>
                            <img src='/images/realtime.svg' alt='#'></img>
                            <p>Experience of Real world work</p>
                        </div>
                        <div className='C4-right1'>
                            <img src='/images/excellent.svg' alt='#'></img>
                            <p>Ready to crack any web developer interview</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='containerr5'>
                <h4 className='head'>Companies that hire for the roles</h4>
                <div className='cont-5'>
                    <div className='cont-5A'>
                        <h5>Tech Giants</h5>
                        <p>Tech giants keep hiring for web developement roles. You will often find opening for Frontend, Backend or Full Stack Developers.
                            Strong knowledge and good projects will help you grab an oppurtunity here</p>
                    </div>
                    <div className='cont-5A'>
                        <h5>Established Startups</h5>
                        <p>All the well known start ups have their website and
                            they use latest tech to build them. Experience with web
                            development and good problem skill is all you need to crack these companies.</p>
                    </div>
                    <div className='cont-5A'>
                        <h5>Growing Startups</h5>
                        <p>Almost Every Startup have a web app or mobile app.
                            Hundreds of growing startups or Early-stage startup keep looking for interns or web developers to help them convert their idea to reality.</p>
                    </div>
                    <div className='cont-5A'>
                        <h5>Growing Startups</h5>
                        <p>Almost Every Startup have a web app or mobile app.
                            Hundreds of growing startups or Early-stage startup keep looking for interns or web developers to help them convert their idea to reality.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fullstack
