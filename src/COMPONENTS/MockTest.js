import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


function MockTest() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://prepbytes-clone-backend-mehz.onrender.com/").then(response => { setData(response.data) })

    })
    console.log(data)
    return (
        <div className='main-container'>
            <div className='container2'>
                {data.filter((item) => item.testCategory === "TopicWise").map(item => {
                    return (
                        // <div className='item-container' onClick={() => Navigate(`/product/${item.id}`)}>
                        <div>
                            <img src={item.testImg} alt='#' className='image' />

                            <h4>{item.testTitle}</h4>

                            <span>${item.testPrice}</span>


                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MockTest
