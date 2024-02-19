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
import Css from '../COMPONENTS/PROJECT/Css'
import Javascript from '../COMPONENTS/PROJECT/Javascript'
import Reactjs from '../COMPONENTS/PROJECT/React'
import Node from '../COMPONENTS/PROJECT/Node'
import Mongodb from '../COMPONENTS/PROJECT/Mongodb'
import Dashboard from '../COMPONENTS/Dashboard'
import PAYNOW from '../COMPONENTS/PAYNOW'
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
                <Route path='/project/css' element={<Css></Css>}></Route>
                <Route path='/project/javascript' element={<Javascript></Javascript>}></Route>
                <Route path='/project/reactjs' element={<Reactjs></Reactjs>}></Route>
                <Route path='/project/node' element={<Node></Node>}></Route>
                <Route path='/project/mongodb' element={<Mongodb></Mongodb>}></Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='/paynow' element={<PAYNOW></PAYNOW>}></Route>
            </Routes>

        </div>
    )
}

export default Routing
