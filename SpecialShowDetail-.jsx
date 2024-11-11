import { IMG_CDN_IMAGES } from "./constant";
/* eslint-disable react/prop-types */ 

export const SpecialShowImages = ({
    imageId,
    
}) => {

    return(
        <div className="special-items2">
                  <img className="specialmenu-image" src={ IMG_CDN_IMAGES+imageId}></img>
                </div>
    )
}

















