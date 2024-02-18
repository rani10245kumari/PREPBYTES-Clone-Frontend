import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { userLogOut } from '../ReduxSlice/Slice'
import MobileNav from './MobileNav'



function Header() {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.AppUser.UserDetails);
    console.log(userData)
    console.log(userData.isLoggedIN)

    const [useDropDownShow, setUserDropDown] = useState(false);
    const [ShwoMobileNav, setShowMobileNav] = useState(false);
    const navigateTO = useNavigate();

    const handleHideNav = (e) => {
        setShowMobileNav(false)
    }

    return (
        <div className='head-Main-Container'>

            <Link to='/'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt='#' className='logo'></img>
            </Link>
            <div className='header'>


                {
                    !userData.isLoggedIN && <div className='login-signup'>
                        <Link to='/signup' className='signup'>Signup</Link>

                        <Link to='/login' className='login'>Login</Link>
                    </div>
                }
                <div className='all-content'>

                    <div className='study-mat'>Study Material<span><i class="fa-solid fa-caret-down"></i></span>
                        <div className='box'>
                            <Link to='/videotutorial' className='video'>VideoTutorial</Link>
                            <Link to='/mocktest' className='video'> MockTest</Link>
                        </div>
                    </div>

                    <div className='study-mat'>Courses and Programs<span><i class="fa-solid fa-caret-down"></i></span>
                        <div className='box'>
                            <Link to='/MasterCompetitiveProgramming' className='video'>Master Competitive Programming</Link>
                            <Link to='/FullStackProgram' className='video'> Full Stack Program</Link>
                        </div>
                    </div>

                    <div >
                        <Link to='/Elevation-Acdemy' className='study-mat  ele'>Elevation Academy</Link>
                    </div>

                    <div className='study-mat'>Project <span><i class="fa-solid fa-caret-down"></i></span>
                        <div className='box2'>
                            <Link to='/project/html' className='video'>HTML</Link>
                            <Link to='/project/css' className='video'> CSS</Link>
                            <Link to='/project/javascript' className='video'>javascript</Link>
                            <Link to='/project/reactjs' className='video'>React Js</Link>
                            <Link to='/project/node' className='video'>Node js</Link>
                            <Link to='/project/mongodb' className='video'>Mongodb</Link>
                        </div>
                    </div>

                    <div className='myname'>
                        {
                            userData.isLoggedIN && <div className='only'>
                                <div className='names' onClick={() => setUserDropDown(!useDropDownShow)}>
                                    <p className='circlen'>{userData.User[0].userName.slice(0, 1)}</p>
                                    <span>Hii, {userData.User[0].userName}</span>
                                </div>
                                {
                                    useDropDownShow && <div className="dropDownContainer userDropownContainer">
                                        <Link to="/dashboard" className='dropDownContainer__Item' onClick={() => setUserDropDown(false)}><i className="fa-solid fa-chalkboard-user"> </i>My Dashboard </Link>
                                        <span style={{ "color": "#ff8787" }} className='dropDownContainer__Item' onClick={() => {
                                            setUserDropDown(false)
                                            dispatch(userLogOut());
                                            navigateTO("/")
                                        }} >Log Out</span>
                                    </div>
                                }
                            </div>
                        }
                    </div>




                </div>




            </div >
            <div className='hampburger'>
                <i className={`fa-solid ${ShwoMobileNav ? "fa-xmark" : "fa-bars"} header__hamMenuButton`} onClick={() => setShowMobileNav(!ShwoMobileNav)}></i>
                {
                    ShwoMobileNav && <MobileNav handleHideNav={handleHideNav} />
                }

            </div>
        </div>
    )
}

export default Header
