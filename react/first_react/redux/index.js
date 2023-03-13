import ReactDOM from 'react-dom/client'

import App from './App'
// import store from './redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)

// store.subscribe(()=>{
//     root.render(<App/>)
// })

//可以再index就監測store的變化