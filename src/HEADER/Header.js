import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


function Header() {
    const userData = useSelector(state => state.AppUser.UserDetails);
    console.log(userData)
    console.log(userData.isLoggedIN)
    return (
        <div className='header'>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt='#' className='logo'></img>

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

                <div>
                    {
                        userData.isLoggedIN && <div>
                            <span>{userData.User[0].userName.slice(0, 1)}</span>
                            <p>Hii, {userData.User[0].userName}</p>
                        </div>
                    }
                </div>


            </div>

        </div >
    )
}

export default Header
