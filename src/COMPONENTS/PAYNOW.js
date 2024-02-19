import React from 'react'
import axios from 'axios'
import '../COMPONENT-CSS/PAYNOW.css';
import { useNavigate } from 'react-router-dom';


function PAYNOW() {
    const navigate = useNavigate()
    // const data = async () => {

    //     await axios.post(
    //         "https://prepbytes-clone-backend-mehz.onrender.com//pages/dashboardpush"
    //     )
    // }

    const handelClick = async () => {
        await axios.post(
            "https://prepbytes-clone-backend-mehz.onrender.com//pages/dashboardpush"
        )
        navigate('/')
    }
    return (

        <div className="success-page">
            <div className="success-content">
                <img src='https://funtura.in/tvm/wp-content/themes/funtura/assets/images/success.svg' alt='#'></img>
                <h2>Payment Successful!</h2>
                <p>Thank you for your payment.</p>
                <p>Your order has been confirmed.</p>
                <p>You will receive a confirmation email shortly.</p>
                <button className="home-button" onClick={() => handelClick()}>Back to Home</button>
            </div>


        </div>
    )
}

export default PAYNOW
