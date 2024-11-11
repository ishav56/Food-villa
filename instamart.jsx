import { useState } from "react"



/* eslint-disable react/prop-types */     //this is way how we can writen the prop validation;
const Showmessage = ({ title, description, showmessage, setshowmessage, image }) => {

    return (
        <div className="border-8 border-rose-400">
            <h1 className="border-2 border-rose-400">{title}</h1>
            {showmessage === false ? <button onClick={() => setshowmessage(true)}>Show</button> : <button onClick={() => setshowmessage(false)}>hide</button>}
            {showmessage ? <p className="border-2 border-zinc-600">{description}</p> : <h1></h1>}
            {showmessage?<img src={image}></img>:<h1></h1>}
        </div>
    )
}
const Instamart = () => {
    const [visibleshowmessages, setvisibleshowmessages] = useState()
    return (
        <div>
            <Showmessage title={"About"}
                description={`A paragraph is a series of sentences that are organized and coherent, and are all 
    related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized 
    into paragraphs. `}
                image={"pizza.jpeg"}
                showmessage={visibleshowmessages==="about"}
               setshowmessage={()=>setvisibleshowmessages("text")}
            />
            <Showmessage title={"title component"}
                description={`A paragraph is a series of sentences that are organized and coherent, and are all 
      related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized 
      into paragraphs. `}
                showmessage={visibleshowmessages==="text"}
                image={"pizza.jpeg"}
                setshowmessage={()=>setvisibleshowmessages("about")}
             />
        </div>
    )
}
export default Instamart