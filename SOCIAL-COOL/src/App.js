import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import firebaseApp from "./utils/firebase"
import { getFirestore, getDocs, collection } from "firebase/firestore";


import Header from "./Header";
import Signin from './pages/Signin';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';

function App() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getDocs(collection(getFirestore(firebaseApp), "topics"))
            .then(
                (querySnapshot) => {
                    const data = querySnapshot.docs.map((doc) => {
                        return doc.data()
                    })
                    setTopics(data)
                }
            );
    }, [])
    //取得topics

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Posts topics={topics}/>} >
                </Route>
                <Route path="/Signin" element={<Signin />} exact >
                </Route>
                <Route path="/new-post" element={<NewPost topics={topics} />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;