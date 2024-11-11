
import Restraurantcard from "./Restrauntcard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { fetchrestrauntdata } from "./constant";
import { useEffect, useState } from "react";
import Usercontext from "../utilites/USeContext";
import { useContext } from "react";
import ShowSpecialMenus from "../components/MenuSpecialDetials"




/* eslint-disable react/prop-types */

//this is the propdriling;
export const Body = () => {
  const [searchtext, setsearchtext] = useState("");

  const [alldatastore, setalldatastore] = useState([]); // original data store
  const [filterdatastore, setfilterstore] = useState([]);// filterd data store
  const [displaydata, setdisplaydata] = useState(false);


  useEffect(() => {
    fetchdata();
  }, [])
  async function fetchdata() {
    const data = await fetch(fetchrestrauntdata);
    const json = await data.json();
    const restraunt = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setalldatastore(restraunt);
    setfilterstore(restraunt);
    // Specialmenu what's on your mind
    // console.log(json?.data?.cards)
  }

  const clickfilter = (searchtext, alldatastore) => {


    const filterdata = alldatastore.filter((filteritean) => {
      return (
        filteritean.info?.name?.toLowerCase().includes(searchtext.toLowerCase())
      )
    })
    return filterdata
  }
  const { user } = useContext(Usercontext)

  return alldatastore?.length === 0 ? <Shimmer /> : (
    <>

      <div className="flex justify-center align-middle">
        <div className="border-4 h-12 w-3/6 rounded-lg   border-sky-500 hover:border-sky-700">
          <input
            type="text"
            className=" h-10 w-5/6 outline-none p-1 text-xl text-red-900"
            placeholder="search"
            value={searchtext}
            onChange={(e) => setsearchtext(e.target.value)}
          />
        </div>
        <div className=" border-2 w-24 rounded-lg h-12 bg-purple-300 flex">
          <button className=" text-red-900 text-xl  h-11 w-24" type="button " onClick={() => { const data = clickfilter(searchtext, alldatastore); setfilterstore(data) }}>Click</button>

        </div>
        <label className="switch">
          <input type="checkbox" onClick={() => {
            displaydata === false ? setdisplaydata(true) : setdisplaydata(false)
          }} />
          <span className="slider round"></span>
        </label>
      </div>
      {/* // Specialmenu what's on your mind */}

      {<div className="special-iteams ">
        {filterdatastore?.length != 0 ?
          < ShowSpecialMenus  displaydata={displaydata}/> : <h1></h1>
        }
      </div>}


      <div className="card">
        {/* // we can added the no record found with shimmer */}
        {filterdatastore?.length === 0 ? <div className="notfoundimagediv"><img className="notfoundimage" src="notfound.jpg"></img></div> :
          filterdatastore?.map((restraunts) => {  // Use filteriteam instead of restaurantList
            return (
              <Link to={"/restraunt/" + restraunts?.info?.id} key={restraunts?.info?.id}>
                <Restraurantcard {...restraunts?.info}{...restraunts?.info?.sla} user={user} displaydata={displaydata} />
              </Link>
            );
          })}
      </div>
    </>
  );
}
