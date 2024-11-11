import { useState } from "react"
import { Link } from "react-router-dom"
import Useonlines from "../utilites/useonline"



export const HeaderComponents = (prop) => {

    const [loggeduser, setloggeduser] = useState(true)
    

    const lognin = () => {
        loggeduser ? setloggeduser(false) : setloggeduser(true) ? alert("you are logged in") : alert("you not logged out");

    }
    const isonline = Useonlines();

    const [displaydata,setdisplaydata]=useState(false);



    return (
        <>

            <label className="switch">
                <input type="checkbox" onClick={() => {
                  displaydata === false ? setdisplaydata(true) : setdisplaydata(false)
                }} />
                <span className="slider round"></span>
            </label>

            <div className='flex  md:flex-wrap border-spacing-2 lg:bg-red-500 justify-between shadow-lg lg:bg-purple-50  '>
                <a href="/" ><img className="h-32 p-3" src="logo.jpg" alt='logo' /> </a>



                <div className='flex lg:flex-wrap'>
                    <ul className="flex py-12 space-x-5  " >
                        <li className=""> <Link to="/home">Home</Link></li>
                        <li> <Link to="/about">About</Link ></li>
                        <li> <Link to="/contact">Contact</Link></li>
                        <li><Link to="instamart">Instamart</Link></li>
                        {displaydata===true?<h6>{prop.name}</h6>:<h1>hy</h1>}
                        <li>Cart</li>

                    </ul>
                </div>
                <h1 className=" py-7 space-x-10"  >{isonline ? "you are online" : "you are offline "}</h1>

              
                {loggeduser ? <Link to="/loginin"><button className=" py-10 " onClick={() => setloggeduser(lognin)}>LogIn</button></Link> : <Link to="/"><button onClick={lognin}>loggedout</button></Link>}
                {/* {loggedout===""?<button className=" py-10 " onClick={() => setloggeduser(lognin)}>LogIn</button>:<button onClick={loggedout}>loggedout</button>} */}

            </div>



        </>
    )
}

