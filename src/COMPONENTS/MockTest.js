import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../COMPONENT-CSS/Mock-test.css';
import Loader from './Loader';
import usePAYMENT from './usePayment'



function MockTest() {
    const [checkpayment, setCheckpayment] = useState({});
    // console.log(checkpayment);
    const payment = usePAYMENT(checkpayment);
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    // const { User } = useSelector((state) => state.AppUser.UserDetails);

    useEffect(() => {
        setIsloading(true);
        axios.get("https://prepbytes-clone-backend-mehz.onrender.com/pages/mockdatasfind")
            .then(response => {
                setData(response.data);
                setIsloading(false); // Move this inside the then block to ensure it's called after data is set
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsloading(false);
            });
    }, []);

    useEffect(() => {
        axios.get("https://prepbytes-clone-backend-mehz.onrender.com/pages/getcartdata")
            .then((res) => setCartItems(res.data))
            .catch((err) => console.error(err));
    }, []);


    return (
        <>
            {
                isLoading ? <Loader /> : <>

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

                                {
                                    data.length > 0 && <>

                                        {data?.filter((item) => item.testCategory === "FeaturedMock").map((item, index) => {

                                            return (
                                                // <div className='item-container' onClick={() => Navigate(`/product/${item.id}`)}>
                                                <div className='mock1' key={index}>
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
                                                    <button className='buynow' onClick={() => setCheckpayment(item)}>Buy Now</button>
                                                </div>
                                            )
                                        })}
                                    </>
                                }
                            </div>
                        </div>
                        {/* ------------topic wise mock test-------------------------
                        -------------------------------------- */}
                        <div className='featured-mock'>
                            <p>Featured Mock Tests</p>
                            <h2>PAST MOCK TEST</h2>
                            <div className='feattured-mock-test'>

                                {
                                    data.length > 0 && <>

                                        {data?.filter((item) => item.testCategory === "TopicWise").map(item => {
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
                                    </>


                                }
                            </div>
                        </div>
                        {/*=====================company wise mock test=======
            ===================================================*/}
                        <div className='featured-mock'>
                            <p>Featured Mock Tests</p>
                            <h2>PAST MOCK TEST</h2>
                            <div className='feattured-mock-test'>

                                {
                                    data.length > 0 && <>
                                        {data?.filter((item) => item.testCategory === "CompanyWise").map(item => {
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
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </>
            }

        </>

    )

}


export default MockTest
