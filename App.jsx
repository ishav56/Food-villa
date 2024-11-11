
import './App.css'
// default  import 
import { HeaderComponents } from './components/navbar'
// named import 
// import {Restraurantcard} from './restrauntcred'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HOME } from "./pages/HOME"
import Contact from "./pages/Contact"
import Footer from './pages/Footer'
import { RestraurantMenu } from './components/Restraurantmenu'
import { Resgestration } from './components/Resgestratoin'
import { Signup } from './pages/SignUp'
import { lazy, Suspense,useState } from 'react'
import Shimmer from './components/shimmer'
import MenuSpecialDetails from './components/ShowSpeciaLItem'




//this lazy import are not a common import it is the special import for diffrent bundaler create 

const Instamart = lazy(() => import('./components/instamart'));
const Abouts = lazy(() => import('./pages/About'))
//upon on demand loading  ->Upon render->suspend learing

const App = () => {
    
    return (
        <>
           
                <BrowserRouter>
                    <HeaderComponents name="harsh" />
                    <div>
                        <Routes>
                            <Route path='/about' element={<Suspense fallback={<Shimmer />}><Abouts /></Suspense>}></Route>
                            <Route path='/home' element={<HOME />}></Route>
                            <Route path='/' element={<HOME />}></Route>
                            <Route path="/contact" element={<Contact />} />
                            {/* the when the first time are click in to istamart so it is not show the data so for show the data use a suspence are use for */}
                            {/* fallback is use for the when we can add any functionality so we can use it  */}
                            <Route path='/instamart' element={<Suspense fallback={<Shimmer />}><Instamart /></Suspense>}></Route>
                            <Route path='/restraunt/:resId' element={<RestraurantMenu />}></Route>
                            <Route path='/loginin' element={<Resgestration />}></Route>
                            <Route path='/hello/:resid' element={<MenuSpecialDetails />}></Route>

                            <Route path='/signup' element={<Signup />}></Route>
                        </Routes>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </BrowserRouter>
           
        </>


    )

}


export default App


{/* <BrowserRouter>
<div>
</div>
<Routes>
  <Route path='/about' element={<Abouts name="ishav" />}></Route>
  <Route path='/home' element={<HOME />} ></Route>

  {/* this path="/" for show the default page */}
//   <Route path='/' element={<HOME />} ></Route>
//   <Route path='/contact' element={<Contact />}></Route>
//   <Route path='/restraunt/:resId' element={< RestraurantMenu/>}></Route>

// </Routes>

{/* <div>
  <Footer /> */}
// </div>
// </BrowserRouter> */}