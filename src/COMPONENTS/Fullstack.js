import React, { useState } from 'react'
import '../COMPONENT-CSS/Fullstack.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Fullstack() {
    const navigate = useNavigate()
    const { User } = useSelector((state) => state.AppUser.UserDetails);
    const { isLoggedIN } = useSelector((state) => state.AppUser.UserDetails);
    console.log(isLoggedIN);


    const [tempData, setTempData] = useState({
        "testID": 3,
        "testImg": 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp',
        "testTitle": "Full Stack Web Development",
        "testCategory": 'Web-Development',
        "testPrice": 30000,
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
                        <span className='spn' onClick={(e) => handleActiveOption(e, "1st May")}>
                            <h5>1st May</h5>
                            <p>Enrolment Started</p>
                        </span>

                    </div>
                    <div className='radio1'>
                        <label >
                            <input type="radio" name="group1"></input>
                        </label>
                        <span className='spn' onClick={(e) => handleActiveOption(e, "15th May")}>
                            <h5>15th May</h5>
                            <p>Enrolment Started</p>
                        </span>

                    </div>
                </div>
                <div className='boxx3'>
                    <h5>₹ 30000</h5>
                    <div className='box3-A'>
                        <button className='box3-bttn' onClick={(e) => handleBuyNow(e)}>Enroll Now</button>
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

                </div>
            </div>

            <div className='containerr6'>
                <h2>Mentors & Instructors</h2>
                <div className="FSP_Mentor_cardContainer">

                    <div className="FSP_mentorCard">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/Mamta.webp" alt="MentorPoster" className='FSP_mentorCard_Profile' />
                        <p className="FSP_Mentorcard_mentorName">Mamta Kumari, Co-Founder PrepBytes</p>
                        <p className="FSP_MentorCard__metnorEXP">Mamta has over 5 years of experience working in tech giants like Amazon and Samsung and has mentored more than 2000 students to help them enhance their coding skills. She is all set to guide you in your journey of web development</p>
                    </div>

                    <div className="FSP_mentorCard">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/mentor_rahul.webp" alt="MentorPoster" className='FSP_mentorCard_Profile' />
                        <p className="FSP_Mentorcard_mentorName">Rahul Dutta, Software Developer OLA</p>
                        <p className="FSP_MentorCard__metnorEXP">Rahul has work experience of over 3 years and is currently working as Software Developer in OLA. Rahul has mentored many students in past and is excited about sharing his knowledge here.</p>
                    </div>

                    <div className="FSP_mentorCard">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/mentor_harshita.webp" alt="MentorPoster" className='FSP_mentorCard_Profile' />
                        <p className="FSP_Mentorcard_mentorName">Harshita Sharma, Product Engineer AskSid.ai</p>
                        <p className="FSP_MentorCard__metnorEXP">Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google.</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Fullstack
