import React from 'react'
import '../COMPONENT-CSS/Project.css'
import { Link } from 'react-router-dom'
export default function Project() {
    return (
        <div>
            <div className='project-main'>
                <h2 >
                    <a href='https://friendly-piroshki-b25051.netlify.app/' className='proj-title'>PrepBytes Blog</a>
                </h2>
                <p className='top'>ONE-STOP RESOURCE FOR EVERYTHING RELATED TO CODING</p>
                <div className='project-navbar'>
                    <Link to='/project/html'>HTML</Link>
                    <Link to='/project/css'> CSS</Link>
                    <Link to='/project/javascript'>javascript</Link>
                    <Link to='/project/reactjs' >React Js</Link>
                    <Link to='/project/node' >Node js</Link>
                    <Link to='/project/mongodb'>Mongodb</Link>
                </div>
            </div>
        </div>
    )
}
