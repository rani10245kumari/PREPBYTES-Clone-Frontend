import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../COMPONENT-CSS/Mock-test.css'

function MockTest() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://prepbytes-clone-backend-mehz.onrender.com/").then(response => { setData(response.data) })

    })
    console.log(data)
    return (
        <div>
            <div className='upper-content'>
                <h2>Mock Tests</h2>
                <p>Technical and Aptitude Test is a very important process of most of
                    the placement tests. Crack your next placement with series of
                    PrepBytes practice and mock tests. Practice subject-wise and
                    company-wise tests. Take real-time mock tests with other students
                    and test your preparation.</p>
            </div>
            <div className='featured-mock'>
                <p>Featured Mock Tests</p>
                <h2>PAST MOCK TEST</h2>
                <div className='feattured-mock-test'>

                    {data.filter((item) => item.testCategory === "FeaturedMock").map(item => {
                        return (
                            // <div className='item-container' onClick={() => Navigate(`/product/${item.id}`)}>
                            <div className='mock1'>
                                <div className='mock-icon'>
                                    <img src='/images/mock-test-left-icon.svg' alt='#'></img>
                                    <img src='/images/mock-test-right-icon.svg' alt='#'></img>
                                </div>
                                <img src={item.testImg} alt='#' className='image-mock' />

                                <h4>{item.testTitle}</h4>
                                <div className='mock-details'>
                                    <div className='mock-d'>
                                        <p>{item.testDate}</p>
                                        <p>Date</p>
                                    </div>
                                    <div className='mock-d'>
                                        <p>{item.testParticipants}</p>
                                        <p>Participants</p>
                                    </div>
                                    <div className='mock-d'>
                                        <p>{item.testDurition}</p>
                                        <p>Duration</p>
                                    </div>
                                </div>
                                <h5 className='pp'>${item.testPrice}</h5>
                                <button className='buynow'>Buy Now</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/*------------topic wise mock test-------------------------
            --------------------------------------*/}
            <div className='featured-mock'>
                <p>Featured Mock Tests</p>
                <h2>PAST MOCK TEST</h2>
                <div className='feattured-mock-test'>

                    {data.filter((item) => item.testCategory === "TopicWise").map(item => {
                        return (
                            // <div className='item-container' onClick={() => Navigate(`/product/${item.id}`)}>
                            <div className='mock1'>
                                <img src={item.testImg} alt='#' className='image-mock' />

                                <h4>{item.testTitle}</h4>
                                <div className='mock-details'>

                                </div>
                                <h5 className='pp'>${item.testPrice}</h5>
                                <button className='buynow'>Buy Now</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/*=====================company wise mock test=======
            ===================================================*/}
            <div className='featured-mock'>
                <p>Featured Mock Tests</p>
                <h2>PAST MOCK TEST</h2>
                <div className='feattured-mock-test'>

                    {data.filter((item) => item.testCategory === "CompanyWise").map(item => {
                        return (
                            // <div className='item-container' onClick={() => Navigate(`/product/${item.id}`)}>
                            <div className='companywise'>

                                <img src={item.testImg} alt='#' className='image-m' />

                                <h4>{item.testTitle}</h4>

                                <h5 className='pp'>${item.testPrice}</h5>
                                <button className='buynow'>Buy Now</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MockTest
