import React from "react";
import { NavLink, Route, Routes, Navigate } from 'react-router-dom'

import Home from "./components/Home";
import About from "./components/About";

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <h1>頁面跳轉</h1>
            </div>
            <div className="row">
                <div className="col-2">
                    <div className="list-group">
                        {/* <a className="list-group-item" href="/">About</a>
                        <a className="list-group-item active" href="/" >Home</a> */}
                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        <NavLink className="list-group-item" to="/home" >Home</NavLink>
                    </div>

                </div>
                <div className="col-8">
                    
                    <div className="panel">

                        <Routes>
                            <Route  path="/about" element={<About />} />
                            {/* exact={true}開啟精準path匹配 V6以後版本預設開啟 */}
                            <Route path="/home/*" element={<Home />} />
                            <Route path="*" element={<Navigate to="/about" />} />
                            {/* <Navigate />初始化時預設路由  path="*"為未定義路徑將都轉到設定的路由  
                                舊版為Redirect
                            */}
                        </Routes>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default App