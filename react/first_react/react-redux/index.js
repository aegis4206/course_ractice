import ReactDOM from 'react-dom/client'

import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

// store.subscribe(()=>{
//     root.render(<App/>)
// })

//可以再index就監測store的變化
//react-redux不需要