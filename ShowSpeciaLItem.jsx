import { useState } from "react"
import data from "./data.json"
import { useParams } from "react-router-dom";

const MenuSpecialDetails = () => {

const {resid}=useParams();

console.log(data);
console.log(resid);
return (
    <h1>{resid}</h1>
    )
        
}
export default MenuSpecialDetails

