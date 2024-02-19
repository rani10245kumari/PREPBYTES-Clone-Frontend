import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader';
import UnauthorizedPage from './UnauthorizePage'
import '../COMPONENT-CSS/Dasboard.css'

function Dashboard() {
    const [cartItems, setCartItems] = useState([]);
    const [activeSidebar, setActivesidebar] = useState(false);

    const userData = useSelector(state => state.AppUser.UserDetails);
    console.log(userData)
    console.log(userData.isLoggedIN)

    const [isLoading, setIsloading] = useState(false)

    useEffect(() => {
        setIsloading(true)
        axios
            .get('https://prepbytes-clone-backend-mehz.onrender.com//pages/dashboardget')
            .then((res) => setCartItems(res.data))
            .catch((err) => console.error(err));
        console.log(setCartItems)
        setIsloading(false)
    }, []);

    return (
        <div>

            {
                isLoading ? <Loader /> : <>



                    <div className='Dashbord__Container'>
                        {
                            userData.isLoggedIN ? <>
                                <aside className={` ${activeSidebar ? "activeSidebar" : "dashboard__sideBar"} `}>
                                    <p className='Dashboard_sideBar__item activeItem'><i className="fa-solid fa-graduation-cap sidebar__icon"></i> <span className='sidebar_item_text'>My Course</span></p>

                                    <p className='Dashboard_sideBar__item'><i className="fa-regular fa-user sidebar__icon"></i> <span className='sidebar_item_text'>My Profile</span></p>

                                    <p className='Dashboard_sideBar__item'><i className="fa-solid fa-users sidebar__icon"></i> <span className='sidebar_item_text'>Share & Earn</span></p>

                                </aside>

                                <div className="dashboard__courseDetails">

                                    <div className="CourseDetails__headingContainer">
                                        <i className={`fa-solid ${activeSidebar ? "fa-xmark" : "fa-bars"} dashboard__sidebarHamMenu`} onClick={() => setActivesidebar(!activeSidebar)}></i>
                                        <p className='CourseDetails__tabText'>Courses</p>
                                    </div>

                                    <div className="courseDetails__cardContainer">
                                        {cartItems.length > 0 ? <>

                                            {cartItems.map((item) => {

                                                return (
                                                    <div className='courseDetails__card' key={item._id}>

                                                        <img src={item.testImg} className='CourseDetails_cardICON' alt='#' />
                                                        <p className='card__itemText'>{item.testID}</p>
                                                        <p className='card__itemText'>{item.testTitle}</p>
                                                        <p className='card__itemText'>₹{item.testPrice}</p>

                                                    </div>

                                                )
                                            })}
                                        </> : <p style={{ color: "tomato", fontWeight: "700", width: "100%", marginTop: "20px", fontSize: "15px" }}>You are not purchased anything.</p>

                                        }
                                    </div>

                                </div>
                            </> : <UnauthorizedPage />
                        }
                    </div>
                </>
            }

        </div>
    )
}

export default Dashboard
