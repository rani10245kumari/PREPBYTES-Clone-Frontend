import React from 'react'
import '../COMPONENT-CSS/Home.css'
function Home() {
    return (
        <div>


            <div className='main'>
                <div className='heading'>
                    <h3>Start your journey of success</h3>
                    <h4>Personalised Coding Programs<br></br>to make coding easier for you</h4>
                    <h5>Want to know how PrepBytes can help you?</h5>
                    <button className='knowmore'>know More</button>
                </div>
                <div className='big-img'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Masterhead(web).svg' alt='#'></img>
                </div>
            </div>
            <div className='brand'>
                <img src='images/brand4.webp' alt='#'></img>
                <img src='images/brand3.webp' alt='#'></img>
                <img src='images/brand2.webp' alt='#'></img>
                <img src='images/brand1.webp' alt='#'></img>
            </div>
            {/*============ coding journey=============================
            ======================================================= 
            ===================================================*/}

            <div className='coding-journey'>
                <div className='code-jrny-left'>
                    <img src='images/study-per.svg' alt='#'></img>
                </div>
                <div className='code-jrny-right'>
                    <h1>How PrepBytes Mentorship driven Personalised Learning work?</h1>

                    {/* -----------------BOX ONE----------------- */}

                    <div className='boxx'>
                        <div className='boxone ONE'>
                            <h3>PERSONALISED LECTURES & WEEKLY PLAN</h3>
                            <div className='box1'>
                                <img src='/images/four.svg' alt='#'></img>
                                <p>Get learning videos & weekly plan based on your coding skills</p>
                            </div>
                        </div>

                        <div className='boxone'>
                            <img src='/images/arrow-down-r.svg'
                                className='arrow-right' alt='#'></img>
                        </div>
                    </div>

                    {/* ----------------BOX TWO---------------------- */}
                    <div className='boxx'>
                        <div className='boxone'>
                            <img src='/images/arrow-down-l.svg' alt='#'
                                className='arrow-left'></img>
                        </div>
                        <div className='boxone TWO'>
                            <h3>PERSONALISED CODING ASSIGNMENTS</h3>
                            <div className='box1 box2'>
                                <img src='/images/three.svg' alt='#'></img>
                                <p>Practice coding questions that adapts based on your progress</p>
                            </div>
                        </div>
                    </div>


                    {/*---------------BOX THREE--------------------*/}
                    <div className='boxx'>
                        <div className='boxone THREE'>
                            <h3>DOUBT SOLVING BY CODING EXPERTS</h3>
                            <div className='box1 box3'>
                                <img src='/images/two.svg' alt='#'></img>
                                <p>Getting Stuck While Coding? Get all your doubts resolved.</p>
                            </div>
                        </div>

                        <div className='boxone'>
                            <img src='/images/arrow-down-r.svg' alt='#'
                                className='arrow-right'></img>
                        </div>
                    </div>

                    {/* -----------------------BOX FOUR------------------------ */}

                    <div className='boxx'>
                        <div className='boxone'>
                            <img src='/images/arrow-down-l.svg' alt='#'
                                className='arrow-left'></img>
                        </div>
                        <div className='boxone FOUR'>
                            <h3>CODE LIVE WITH TOP CODERS</h3>
                            <div className='box1'>
                                <img src='/images/one.svg' alt='#'></img>
                                <p>Topic wise Live Coding sessions with top rated coders</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src='/images/achievement.svg' alt='#'></img>
                    </div>
                </div>

            </div>

            {/*-------------------I WANT TO BUY COURSE---------------*/}
            <div className='course-buy'>
                <h2>I WANT</h2>
                <div className='course-purchase'>

                    <div className='cardMain'>
                        <img src='/images/sect-1.webp' className='sect1' alt='#'></img>
                        <div className='cards'>
                            <img src='/images/sect-1-a.webp' className='sect1a' alt='#'></img>
                            <h5 className='S1'>PREPARE FOR CAMPUS PLACEMENTS</h5>
                            <div className='circle'>
                                <img src='/images/small-arrow.svg' alt='#'></img>
                            </div>
                        </div>
                    </div>


                    <div className='cardMain'>
                        <img src='/images/sect-2.webp' alt='#' className='sect1'></img>
                        <div className='cards'>
                            <img src='/images/sect-2-b.webp' alt='#' className='sect1a'></img>
                            <h5 className='S2'>MASTER COMPETITIVE PROGRAMMING</h5>
                            <div className='circle'>
                                <img src='/images/small-arrow.svg' alt='#'></img>
                            </div>
                        </div>
                    </div>


                    <div className='cardMain'>
                        <img src='/images/sect-3.webp' alt='#' className='sect1'></img>
                        <div className='cards'>
                            <img src='/images/sect3-c.webp' alt='#' className='sect1a'></img>
                            <h5 className='S3'>BUILD DEVELOPMENT PROJECTS</h5>
                            <div className='circle'>
                                <img src='/images/small-arrow.svg' alt='#'></img>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/*---------------GRID CONTAINER------------------------------*/}
            <div className='grid-main-container'>
                <div className='grid-container-left'>
                    <h2>Are you an Experienced Professional willing to Switch?</h2>
                    <div className='grid-left'>
                        <div className='grid-l'>
                            <img src='/images/grid-left1.svg' alt='#'></img>
                            <p>INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU</p>
                        </div>
                        <div className='grid-l'>
                            <img src='/images/grid-left2.svg' alt='#'></img>
                            <p>REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK</p>
                        </div>
                        <div className='grid-l'>
                            <img src='/images/grd-left3.svg' alt='#'></img>
                            <p>EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE</p>
                        </div>
                    </div>
                </div>
                <div className='grid-container-right'>

                    <div className='grid-right' id='grid-r1'>
                        <img src='/images/grid-right1.svg' alt='#'></img>
                    </div>
                    <div className='grid-right-2'>
                        <div className='grid-right' id='grid-r2'>
                            <img src='/images/grid-right2.svg' alt='#'></img>
                        </div>
                        <div className='grid-right' id='grid-r3'>
                            <img src='/images/grid-right3.svg' alt='#'></img>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Home
