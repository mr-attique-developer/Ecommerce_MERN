import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {  RouterProvider } from 'react-router-dom'
import {Provider} from "react-redux"
import store from './redux/app/store.js'
import router from './routers/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Provider store={store}>

   <RouterProvider router={router}/>
    </Provider>
    
    <ToastContainer/>
  </StrictMode>,
)
