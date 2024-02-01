import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Login from '../Sign-Login/Login'
import Signup from '../Sign-Login/Signup'
import Home from '../COMPONENTS/Home'
import MockTest from '../COMPONENTS/MockTest'
import VideoTutorial from '../COMPONENTS/VideoTutorial'
import MasterComp from '../COMPONENTS/MasterComp'
import Fullstack from '../COMPONENTS/Fullstack'
import ElevationAcdemy from '../COMPONENTS/ElevationAcdemy'
import Project from '../COMPONENTS/Project'
import Html from '../COMPONENTS/PROJECT/Html'
function Routing() {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/header' element={<Header></Header>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/signup' element={<Signup></Signup>}></Route>
                <Route path='/mocktest' element={<MockTest></MockTest>}></Route>
                <Route path='/videotutorial' element={<VideoTutorial></VideoTutorial>}></Route>
                <Route path='/MasterCompetitiveProgramming' element={<MasterComp></MasterComp>}></Route>
                <Route path='/FullStackProgram' element={<Fullstack></Fullstack>}></Route>
                <Route path='/Elevation-Acdemy' element={<ElevationAcdemy></ElevationAcdemy>}></Route>
                <Route path='/project' element={<Project></Project>}></Route>
                <Route path='/project/html' element={<Html></Html>}></Route>
            </Routes>

        </div>
    )
}

export default Routing
