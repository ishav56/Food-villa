import { fetchrestrauntdata } from "./constant";
import { SpecialShowImages } from "./SpecialShowDetail-";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
const ShowSpecialMenus= (displaydata) => {


    const [specialitems, setspecialitems] = useState([]);

    useEffect(() => {
        fetchdata();
    }, [])
    async function fetchdata() {

        const data = await fetch(fetchrestrauntdata);
        const json = await data.json();
        setspecialitems(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    }
    return (
        <div className="special-items">

            {
                specialitems?.map((datas) => {
                    return (
                        <>
                            <Link to={"/hello/"+datas.id} key={datas?.id}><SpecialShowImages key={datas?.id} {...datas}/></Link>
                            <h1>{}</h1>
                        </>
                    )
                })
            }
        </div>

    )
}
export default ShowSpecialMenus