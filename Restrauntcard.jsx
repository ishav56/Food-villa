/* eslint-disable react/prop-types */



import { IMG_CDN_IMAGES } from "./constant";


const RestaurantCard = ({

    name,
    cuisines,
    avgRating,
    slaString,
    cloudinaryImageId,
    user,
    displaydata
}) => {



    return (
        <div className="card">
            <div className="card2">
                <img src={IMG_CDN_IMAGES + cloudinaryImageId} alt={name} />
                <h1>{name}</h1>
                <h4>{cuisines?.join(", ")}</h4> {/* Join cuisines array */}
                <h5>{avgRating} Stars</h5>
                <h5>{slaString}</h5>
               {displaydata===false?<h6>{user.GSTno}</h6>:<h1></h1>}
            </div>
        </div>
    )
}
export default RestaurantCard;
