import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../COMPONENT-CSS/videotest.css'

function VideoTutorial() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/pages/videodatafind")
            .then(response => { setData(response.data) })

    }, [])
    console.log(data)
    return (
        <div className='main-container'>
            <div className='video-top'>
                <div className='video-left'>
                    <h4>Prepbytes Video Library</h4>
                    <p>Increase your knowledge with PrepBytes free videos.
                        PrepBytes video library is a repository of more than 250
                        videos containing videos on Competitive Programming ,
                        Language Fundamentals - C, C++, Java, Data Structures and
                        Algorithms, Aptitude, Operating System, Interview Questions
                        and much more all at one place.</p>
                </div>
                <div className='video-right'>
                    <img src='/images/videobanner.png' alt='#'></img>
                </div>
            </div>
            <h3 className='category'>CATEGORIES</h3>

            <div className='v-tutorial'>
                {data.filter((item) => item.videoCount === 30).map(item => {
                    console.log(typeof (item.videoCount))
                    return (
                        <div >
                            {/* <div className='item-container' onClick={() => Navigate(`/product/${item.id}`)}> */}
                            <div className='flex-item'>

                                <img src={item.videoPoster} alt='#' className='image-mock' />

                                <h4>{item.videoTitle}</h4>

                                <h5>${item.videoDesc}</h5>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VideoTutorial
