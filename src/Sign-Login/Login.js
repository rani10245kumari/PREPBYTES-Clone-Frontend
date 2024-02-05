import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { userLoginAction } from '../ReduxSlice/Slice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Login() {


    const navigateTO = useNavigate();
    const dispatch = useDispatch();
    const [IsUserLoading, setIsUserLoading] = useState(false)


    const [Message, setMessage] = useState({ "msgVal": "" });


    // const userData = useSelector(state => state.AppUser.UserDetails);
    // console.log(userData)


    const [userDetails, setUserDetails] = useState({
        "userEmail": "",
        "userPassword": "",
    });

    const handleOnChangeInput = (e) => {
        setMessage({ "msgVal": "" })
        setUserDetails({
            ...userDetails, [e.target.name]: e.target.value
        });
    }

    const handlSIGNINclick = (e) => {
        e.preventDefault();
        if (userDetails.userEmail.length === 0 || userDetails.userPassword.length === 0) {
            setMessage({ "msgVal": "One or more required fields is missing or invalid" });
        } else {
            setIsUserLoading(true)
            axios.post("https://prepbytes-clone-backend-mehz.onrender.com/user/login", userDetails).then((response) => {

                console.log(response)
                if (response.data.User) {
                    dispatch(userLoginAction(response.data.User))
                    const usern = response.data.User.userName
                    console.log(usern)

                    navigateTO("/");
                    setIsUserLoading(false);
                    return
                }
                setMessage({ "msgVal": response.data.resMsg })
                setIsUserLoading(false)
            })
        }
    }
    return (


        <div className='register'>
            <div className='register-left'>
                <img src='/images/signup-left.webp' alt='#' className='back-img'></img>

                <div className='register-left2'>
                    <img src='/images/log-6.webp' alt='#' className='pb-logo'></img>

                    <div className='register-left3'>
                        <img src='/images/log-2.webp' alt='#' className='logo1'></img>
                        <div><h5>10K+</h5>
                            <p>Students Enrolled</p></div>
                    </div>
                    <div className='register-left3'>
                        <img src='/images/log-3.webp' alt='#' className='logo1'></img>
                        <div><h5>1000+</h5>
                            <p>Reach in Colleges</p></div>
                    </div>
                    <div className='register-left3'>
                        <img src='/images/log-4.webp' alt='#' className='logo1'></img>
                        <div><h5>10K+</h5>
                            <p>Hours of Learning</p></div>
                    </div>
                    <div className='register-left3'>
                        <img src='/images/log-5.webp' alt='#' className='logo1'></img>
                        <div><h5>150K+</h5>
                            <p>Social Community</p></div>
                    </div>
                </div>
            </div>


            <form className='register-right'>
                <div className='reg-right1'>
                    <Link to='/signup' className='link1'>Signup</Link>
                    <Link to='/login' className='link1'>Login</Link>
                </div>

                <div className='reg-right2'>

                    <h2 className="userLOGINFORM_Heading">Sign in to your account</h2>

                    <div className='form__itemBOX'>
                        <input type="email" name='userEmail' id='userEmail' className='formITEM' onChange={handleOnChangeInput} autoComplete='userEmail' />
                        <label className='formITEM_LABEL'>Email</label>
                    </div>
                    <div className='form__itemBOX'>
                        <input type="password" name='userPassword' id='userPassword' className='formITEM' onChange={handleOnChangeInput} autoComplete='current-password' />
                        <label className='formITEM_LABEL'>Password</label>
                    </div>
                    <p className="forgetlink">Forgot your password?</p>
                    <button className='formCommonBtn singinButton' onClick={handlSIGNINclick}>SIGN IN</button>
                    <button className='formCommonBtn loginByOTPBTN'>Login Via OTP</button>


                    {
                        Message.msgVal && <p className='formResponseMsg'>{Message.msgVal}</p>
                    }
                    {
                        IsUserLoading && <p className='formResponseMsg'>Signing in...</p>
                    }



                </div>
            </form>
        </div>
    )
}

export default Login