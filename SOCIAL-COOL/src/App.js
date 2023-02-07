import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from "./Header";
import Signin from './pages/Signin';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element="首頁" exact></Route>
                <Route path="/Signin" element={<Signin/>} exact >
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;