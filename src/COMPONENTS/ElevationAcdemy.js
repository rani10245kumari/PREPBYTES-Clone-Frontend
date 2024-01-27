import React from 'react'
import '../COMPONENT-CSS/ElevationAcdemy.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ElevationAcdemy() {
    const [ShowSyllabus, setShowSyllabus] = useState(false);
    const [Syllabus, setSyllabus] = useState([]);

    useEffect(() => {

        axios.get("https://prepbytes-clone-backend-mehz.onrender.com/syllabusdata").then((response) => {
            setSyllabus(response.data)

        });


    }, []);



    const handleShowSyllabus = (e) => {
        e.preventDefault();
        e.target.classList.toggle("fa-circle-minus")
        e.target.classList.toggle("fa-circle-plus")
        e.target.parentElement.nextSibling.classList.toggle("EA_ProgramSyllabus_ActiveContentBox")
        setShowSyllabus(!ShowSyllabus)

    }
    return (
        <div className='elevationMain'>
            <div className='elevation1'>
                <div className='elevation1-left'>
                    <h1>PrepBytes Elevation Academy - Full Stack Web Development Career</h1>
                    <p className='para'>Enroll in PrepBytes Elevation Academy
                        - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.</p>
                    <ul>
                        <li className='list'>
                            <img src='/images/mini-arrow.svg' alt='#'></img>
                            <p>Complete Live Class from experts</p></li>
                        <li className='list'>
                            <img src='/images/mini-arrow.svg' alt='#'></img>
                            <p>Be the best Full stack developer</p>
                        </li>
                        <li className='list'>
                            <img src='/images/mini-arrow.svg' alt='#'></img>
                            <p>Job Guarantee</p>
                        </li>
                    </ul>
                    <div className='ele1-button'>
                        <button className='ele1-buttonA'>Apply Now</button>
                        <button className='ele1-buttonB'>Get a call back </button>
                    </div>
                </div>
                <div className='elevation1-right'>
                    <img src='/images/elebanner.webp' alt='#'></img>
                </div>
            </div>
            <div className='elevation2'>
                <div className='elevation-2'>
                    <div className='ele2-left'>
                        <h5>For 2023, 2022 & 2021 graduates</h5>
                        <p>Batch Starting: 1st May 2023</p>
                    </div>
                    <div className='ele2-right'>
                        <div className="EA_Batch__SessionInforContainer">

                            <div className="EA_Batch_SessionBox">
                                <div className='Ea_batch_SessionIconContainer'>
                                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/free_class.webp" alt="ICON" className='EA_Batch_sessionICon' />
                                </div>
                                <h3 className='Ea_SessionBoxTitle'>Free Webinar</h3>
                                <p className="Ea_session_date">17th April</p>
                            </div>

                            <div className="EA_Batch_SessionBox">
                                <div className='Ea_batch_SessionIconContainer'>
                                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Start+Assesment.webp" alt="ICON" className='EA_Batch_sessionICon' />
                                </div>
                                <h3 className='Ea_SessionBoxTitle'>1:1 Counselling session</h3>
                                <p className="Ea_session_date">From 18th April</p>
                            </div>

                            <div className="EA_Batch_SessionBox">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Batch+Starts.webp" alt="ICON" className='EA_Batch_sessionICon' />
                                <h3 className='Ea_SessionBoxTitle'>Batch Start</h3>
                                <p className="Ea_session_date dd">01 May'23, Mon-Fri (7-10PM)</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className='elevation3'>
                <div className="EA__Job_PathMainContainer">
                    <h2 className="EA_jobPath_heading">How will you reach to your dream Job?</h2>

                    <div className="EA_jobpathContainer">

                        <div className="EA_JobPath_List_Container">

                            <div className="EA_JobList_Box">
                                <span className="EA_jobList_number">1</span>
                                Application & Shortlisting
                            </div>
                            <div className="EA_JobList_Box">
                                <span className="EA_jobList_number">2</span>
                                Attend Free Webinar
                            </div>
                            <div className="EA_JobList_Box">
                                <span className="EA_jobList_number">3</span>
                                Batch Commencement
                            </div>
                            <div className="EA_JobList_Box">
                                <span className="EA_jobList_number">4</span>
                                7 Months Program
                            </div>
                            <div className="EA_JobList_Box">
                                <span className="EA_jobList_number">5</span>
                                Guaranteed Placement

                            </div>

                        </div>

                        <div className="EA_JobPath_List_Desc_Container">

                            <div className="EA_jobPath_descBox">
                                <p className="EA_jobPath_descBox_text">Apply, fill the form & wait till we review your application. You will be selected based on the eligibility criteria (2023, 2022 & 2021 passouts)</p>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Application%2B%2BShortlisting.webp" alt="icon" className='Ea_JobPath_descBox_poster' />
                            </div>


                            <div className="EA_jobPath_descBox">
                                <p className="EA_jobPath_descBox_text">Go through the free classes and learn the important concepts while understanding how the program unfolds.</p>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/5%2BDays%2BFree%2BClass.webp" alt="icon" className='Ea_JobPath_descBox_poster' />
                            </div>


                            <div className="EA_jobPath_descBox">
                                <p className="EA_jobPath_descBox_text">Embark on your journey of success once you receive the offer letter for successful enrolment.</p>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Complete%2BEnrollment%2B.webp" alt="icon" className='Ea_JobPath_descBox_poster' />
                            </div>


                            <div className="EA_jobPath_descBox">
                                <p className="EA_jobPath_descBox_text">You have now signed up for a learning-filled journey of 7 months that ends with you being placed in your dream company.</p>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/4%2BMonths%2BPrograms.webp" alt="icon" className='Ea_JobPath_descBox_poster' />
                            </div>


                            <div className="EA_jobPath_descBox">
                                <p className="EA_jobPath_descBox_text">The program comes with interview opportunities and a placement guarantee of minimum 5 LPA.</p>
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview%2BOpportunities%2B.webp" alt="icon" className='Ea_JobPath_descBox_poster' />
                            </div>


                        </div>

                    </div>
                </div>

            </div>
            <div className='elevation4'>
                <h2>Why PrepBytes Elevation Academy?</h2>
                <div className='ele-cards'>
                    <div className='ele4-cards'>
                        <img src='/images/ee1.webp' alt='#'></img>
                        <div className='ele4-innercard'>
                            <h4>Live Learning</h4>
                            <p>Master Mern Stack in Live Classes taken by Experts</p>
                        </div>
                    </div>
                    <div className='ele4-cards'>
                        <img src='/images/ee1.webp' alt='#'></img>
                        <div className='ele4-innercard'>
                            <h4>Live Learning</h4>
                            <p>Master Mern Stack in Live Classes taken by Experts</p>
                        </div>
                    </div>
                    <div className='ele4-cards'>
                        <img src='/images/ee1.webp' alt='#'></img>
                        <div className='ele4-innercard'>
                            <h4>Live Learning</h4>
                            <p>Master Mern Stack in Live Classes taken by Experts</p>
                        </div>
                    </div>
                    <div className='ele4-cards'>
                        <img src='/images/ee1.webp' alt='#'></img>
                        <div className='ele4-innercard'>
                            <h4>Live Learning</h4>
                            <p>Master Mern Stack in Live Classes taken by Experts</p>
                        </div>
                    </div>
                    <div className='ele4-cards'>
                        <img src='/images/ee1.webp' alt='#'></img>
                        <div className='ele4-innercard'>
                            <h4>Live Learning</h4>
                            <p>Master Mern Stack in Live Classes taken by Experts</p>
                        </div>
                    </div>
                    <div className='ele4-cards'>
                        <img src='/images/ee1.webp' alt='#'></img>
                        <div className='ele4-innercard'>
                            <h4>Live Learning</h4>
                            <p>Master Mern Stack in Live Classes taken by Experts</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='elevation5'>
                <div className="EA_ProgramSyllabus_MainContainer">

                    <h2 className="EA_ProgramSyllabus__Mainheading">Program Syllabus</h2>
                    <h2 className="EA_ProgramSyllabus__Secondaryheading">Learn from the best and be prepared to crack full stack developer jobs</h2>

                    {
                        Syllabus?.map((ele) => {
                            return <div className="EA_programSyllabus_Container" key={ele.syllabusID}>
                                <h2 className="EA_ProgramSyllabus_Container_heading">{ele.syllabusDuration}</h2>

                                <div className="EA_programSyllabus_box">
                                    <p className="EA_programSyllabus_numbering"> <span>{ele.syllabusID}</span></p>
                                    <p className="EA_programSyllabus_topic">{ele.syllabusTitle}</p>
                                    <i className={`fa-solid fa-circle-plus EA_ProgramSyllabus_plusICon`} onClick={handleShowSyllabus}></i>
                                </div>
                                <div className="EA_ProgramSyllabus_ContentBox">
                                    <h3 className="EA_programSyllabus_content_heading">{ele.syllabusContentTitle}</h3>
                                    {
                                        ele?.syllabusContent.map((content, index) => <p className="EA_ProgramSyllabus_Content" key={index + ele.syllabusID}>{content}</p>)
                                    }
                                </div>

                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ElevationAcdemy
