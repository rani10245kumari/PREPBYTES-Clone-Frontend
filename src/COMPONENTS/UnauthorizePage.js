import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../COMPONENT-CSS/Unauth.css'

function UnauthorizedPage() {
    const navigateTO = useNavigate();
    return (
        <div className='UnauthorizedPageContainer'>
            <img src='/images/download.svg' alt='#'></img>
            <h1 className='unAuthMsg'>Locked for you</h1>
            <button className='knowMoreButton' onClick={() => navigateTO("/")}>Go To Home Page</button>
        </div>
    )
}

export default UnauthorizedPage