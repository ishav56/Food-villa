
import { IMG_CDN_IMAGES } from "./constant";

import Shimmer from "./shimmer";
// import Userestraunt from "../utilites/useRestraunthook"
import { useEffect, useState, } from "react";
import { fetchdata } from "../components/constant";
import { useParams } from "react-router-dom";

export const RestraurantMenu = () => {


    const {resId}=useParams();

    //  it is use for read Dynamic URL params       




    const [menushow, setshowmenu] = useState([]);
    const [iteamshow, setitemsshows] = useState([]);

    useEffect(() => {
        menuitems()
    }, []);

        async function menuitems() {
        const data = await fetch(fetchdata+resId)
        const json = await data.json();
       
        
        setshowmenu(json?.data?.cards[2]?.card?.card?.info);
    console.log(json);
        setitemsshows(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards); 
    }



    return menushow.length === 0 ? <Shimmer /> : (
        <>

<div>
                
                <h1>{menushow?.name}</h1>
                <h1>{menushow?.areaName}</h1>
                <h1>{menushow?.avgRating}</h1>
                <img className="w-96"src={IMG_CDN_IMAGES + menushow?.cloudinaryImageId}></img>

                <h1>{menushow?.cuisines}</h1>
                <h1>{menushow?.city}</h1>

                <h1>{menushow?.costForTwoMessage}</h1>
          
                </div>

            {
                iteamshow?.map((check,index)=>{
                    return(
                        <>
                    <h1 key={index}>{check?.card?.info?.name}</h1>
                   
                    <img className="w-24"   src={IMG_CDN_IMAGES+check.card.info.imageId}></img>
                    </>
                    )
                })
                    
 }

        </>
    )
}