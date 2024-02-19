import React from 'react'
import '../COMPONENT-CSS/Master-com.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MasterComp() {

    function scrollToSection(wantTobuy) {
        const targetElement = document.getElementById(wantTobuy);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    const navigate = useNavigate()
    const { User } = useSelector((state) => state.AppUser.UserDetails);
    const { isLoggedIN } = useSelector((state) => state.AppUser.UserDetails);
    console.log(isLoggedIN);

    const [tempData, setTempData] = useState({
        "testID": 1,
        "testImg": 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp',
        "testTitle": "master-competitive-programming",
        "testCategory": 'Programming-Course',
        "testPrice": "25000",
        "testDate": "1st May",
        "userEmail": User.length > 0 ? User[0].userEmail : ""
    });


    const handleActiveOption = (batchDate) => {
        setTempData({ ...tempData, "testDate": batchDate });
    };



    const handleBuyNow = async () => {
        if (isLoggedIN) {
            try {
                await axios.post(
                    "https://prepbytes-clone-backend-mehz.onrender.com/pages/dashboardpush",
                    tempData // Passing tempData instead of the event
                );
                navigate('/paynow');
            } catch (error) {
                console.error('Error while posting data:', error);
                // Handle error as needed
            }
        } else {
            alert("You must be logged in");
            navigate('/login');
        }
    };

    return (
        <div className='master-main'>
            <div className='master'>
                <div className='left'>
                    <h2>MASTER COMPETITIVE PROGRAMMING</h2>
                    <p>Master Competitive Programming Fom Zero And Become
                        A Top-Rated Coder <span>Under The Guidance Of Top Competitive Programmers</span></p>
                    <button className='enrol' onClick={() => scrollToSection('wantTobuy')}>Enrol Now</button>
                </div>
                <div className='right'>
                    <img src='/images/master-logo.webp' alt='#'></img>
                </div>
            </div>
            <div className='container-2'>
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
            <div className='container-3'>
                <h5>Get Guidance From Industry Leading Mentors</h5>
                <p>Other Mentors You Will Be Interacting With</p>
                <div className='mentor-main'>


                    <div className='mentor-sub'>
                        <img src='/images/empl-1.webp' alt='#' className='mentr'></img>
                        <div className='descriptn'>
                            <h3>Mamta</h3>
                            <p>Co-Founder,PrepBytes</p>
                            <img src='/images/branda.webp' alt='#' className='company'></img>
                        </div>
                    </div>

                    <div className='mentor-sub'>
                        <img src='/images/empl-2.webp' alt='#' className='mentr'></img>
                        <div className='descriptn'>
                            <h3>Kushdeep</h3>
                            <p>SDE,ShareChat</p>
                            <img src='/images/brandb.webp' alt='#' className='company'></img>
                        </div>
                    </div>

                    <div className='mentor-sub'>
                        <img src='/images/empl-3.webp' alt='#' className='mentr'></img>
                        <div className='descriptn'>
                            <h3>Aveek</h3>
                            <p>Mentor,PrepBytes</p>
                            <img src='/images/brandc.webp' alt='#' className='company'></img>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container4'>
                <h5>Master Competitive Programming With Us</h5>


                <div className='contain4-sub'>
                    <div className='cont4'>
                        <div className='C4-1'>
                            <div className='bb'>
                                <h4>Personalised Program</h4>
                                <p>Master your skills from where you are,
                                    with India's only personalised program</p>
                            </div>
                            <div className='cir'>
                                <img src='/images/tb-1.webp' alt='#'></img>
                            </div>
                        </div>
                        <div className='C4-1'>
                            <div className='bb'>
                                <h4>Quick Doubt Support</h4>
                                <p>Get your doubts cleared by coding
                                    experts and have a smooth learning</p>
                            </div>
                            <div className='cir'>
                                <img src='/images/tb-2.webp' alt='#'></img>
                            </div>
                        </div>
                        <div className='C4-1'>
                            <div className='bb'>
                                <h4>Personalised Program</h4>
                                <p>Master your skills from where you are,
                                    with India's only personalised program</p>
                            </div>
                            <div className='cir'>
                                <img src='/images/tb-3.webp' alt='#'></img>
                            </div>
                        </div>
                        <div className='C4-1'>
                            <div className='bb'>
                                <h4>Personalised Program</h4>
                                <p>Master your skills from where you are,
                                    with India's only personalised program</p>
                            </div>
                            <div className='cir'>
                                <img src='/images/tb-4.webp' alt='#'></img>
                            </div>
                        </div>
                    </div>
                    <div className='cont4'>

                        <img src='/images/MASTER-BIG.svg' alt='#' className='middle-img'></img>

                    </div>
                    <div className='cont4'>
                        <div className='C4-2'>
                            <div className='cir2'>
                                <img src='/images/tb-5.webp' alt='#'></img>
                            </div>
                            <div>
                                <h4>Personalised Program</h4>
                                <p>Master your skills from where you are,
                                    with India's only personalised program</p>
                            </div>

                        </div>
                        <div className='C4-2'>
                            <div className='cir2'>
                                <img src='/images/tb-6.webp' alt='#'></img>
                            </div>
                            <div>
                                <h4>Personalised Program</h4>
                                <p>Master your skills from where you are,
                                    with India's only personalised program</p>
                            </div>

                        </div>
                        <div className='C4-2'>
                            <div className='cir2'>
                                <img src='/images/tb-7.webp' alt='#'></img>
                            </div>
                            <div>
                                <h4>Personalised Program</h4>
                                <p>Master your skills from where you are,
                                    with India's only personalised program</p>
                            </div>
                        </div>
                        <div className='C4-2'>
                            <div className='cir2'>
                                <img src='/images/tb-5.webp' alt='#'></img>
                            </div>
                            <div>
                                <h4>Personalised Program</h4>
                                <p>Master your skills from where you are,
                                    with India's only personalised program</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container5'>
                <div>
                    <h1>10K+</h1>
                    <p>Students Enrolled</p>
                </div>
                <div>
                    <h1>1000K+</h1>
                    <p>Doubts Solved</p>
                </div>
                <div>
                    <h1>2K+ hrs</h1>
                    <p>Mentor Interaction</p>
                </div>
            </div>
            <div className='container6'>
                <h2>Crack Reputed Coding Contests</h2>
                <img src='/images/comp-banner.webp' alt='#'></img>
            </div>
            <div className='container7'>
                <h3>Curriculum</h3>
                <div className='box7'>
                    <div className='box7a'>
                        <div className='box7a1'>
                            <img src='/images/13.webp' alt='#'></img>
                            <p>Language Fundamentals (Choose any one of C/C++/Java/Python)</p>
                        </div>
                        <div className='box7a1'>
                            <img src='/images/12.webp' alt='#'></img>
                            <p>Language Fundamentals (Choose any one of C/C++/Java/Python)</p>
                        </div>
                        <div className='box7a1'>
                            <img src='/images/11.webp' alt='#'></img>
                            <p>Language Fundamentals (Choose any one of C/C++/Java/Python)</p>
                        </div>
                        <img src='/images/cur-img.webp' alt='#'></img>
                    </div>
                    <div className='box7b'>
                        <ul>
                            <li className='subtopic'>C/C++/Java/Python Overview</li>
                            <li className='subtopic'>Logic Building</li>
                            <li className='subtopic'>Data Types</li>
                            <li className='subtopic'>Loops and Condition</li>
                            <li className='subtopic'></li>
                            <li className='subtopic'></li>
                            <li className='subtopic'></li>
                            <li className='subtopic'></li>
                            <li className='subtopic'></li>
                            <li className='subtopic'></li>
                            <li className='subtopic'></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="batchSelectionContainer" id='selectBatch'>
                <p className='SelectBatchText' id='wantTobuy'>Select Batch</p>

                <div className="batchSelection__option batchSelection__SelectedOption" onClick={(e) => handleActiveOption(e, "1st May")}>
                    <p className="batchStartingDate">1st May</p>
                    <p className="bathStartingDate_text">Enrolment Started</p>
                </div>

                <div className="batchSelection__option" onClick={(e) => handleActiveOption(e, "15th May")}>
                    <p className="batchStartingDate">15th May</p>
                    <p className="bathStartingDate_text">Enrolment Started</p>
                </div>

                <div className="batchPriceContainer">
                    <p className="batchPrice_text">₹25000</p>
                    <button className='EnrolButton' onClick={(e) => handleBuyNow(e)}>Enrol Now</button>
                </div>

            </div>
            <div className='container9'>
                <h5>By The End Of This Course, You Will Be Able To</h5>
                <div className='cont9-1'>
                    <img src='/images/star.webp' alt='#'></img>
                    <div className='cont9-2'>
                        <div className='cont9-2A one'>
                            <img src='/images/num1.webp' alt='#'></img>
                            <p>4 star and above in CodeChef</p>
                        </div>
                        <div className='cont9-2A two'>
                            <img src='/images/num2.webp' alt='#'></img>
                            <p>Crack contests like Facebook Hacker Cup, Google Kickstart, ACM ICPC</p>
                        </div>
                        <div className='cont9-2A three'>
                            <img src='/images/num3.webp' alt='#'></img>
                            <p>Candidate master and above in CodeForces</p>
                        </div>
                        <div className='cont9-2A four'>
                            <img src='/images/num4.webp' alt='#'></img>
                            <p>Specialist and above in SPOJ.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterComp
