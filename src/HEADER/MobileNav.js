import React from 'react'
import { useSelector } from 'react-redux'
import { userLogOut } from '../ReduxSlice/Slice'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

function MobileNav({ handleHideNav }) {
    const navigateTO = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIN, User } = useSelector((state) => state.AppUser.UserDetails);
    return (
        <aside className='mobileNavbar__Container'>

            {isLoggedIN && <div className="mobileNav__UserBox">
                <p className="mobileNav__userGreeting"><i className="fa-solid fa-user"></i>Hi {User[0]?.userName}</p>
                <Link to="/dashboard" className='mobileNav__userGreeting' onClick={handleHideNav}><i className="fa-solid fa-chalkboard-user"></i>My Dashboard</Link>
            </div>}

            <Link onClick={handleHideNav} to="/mocktest" className='mobilenav__items'>Mock Tests</Link>

            <Link onClick={handleHideNav} to="/videotutorial" className='mobilenav__items'>Video Tutorial</Link>

            <Link onClick={handleHideNav} to="/FullStackProgram" className='mobilenav__items'> Full Stack Program</Link>

            <Link onClick={handleHideNav} to="/MasterCompetitiveProgramming" className='mobilenav__items'>Master Competitive Programming</Link>

            <Link onClick={handleHideNav} to="/Elevation-Acdemy" className='mobilenav__items'>  Elevation Academy </Link>

            <Link onClick={handleHideNav} to="/project/html" className='mobilenav__items'>Project</Link>

            {isLoggedIN ? <Link className='mobilenav__items Mobilenav__loginSignUpLink' onClick={() => {
                dispatch(userLogOut());
                handleHideNav();
                navigateTO("/")
            }}>Log Out</Link> : <Link to="/login" className='mobilenav__items Mobilenav__loginSignUpLink' onClick={handleHideNav}>Login/SignUp</Link>}
        </aside>
    )
}

export default MobileNav