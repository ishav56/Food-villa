// import { useEffect, useState } from "react"

// export const Profilefunctionbased = (prop) => {
//     const [count,setcount]=useState(0);

//     useEffect(()=>{

//         const clear=setInterval(()=>{

//             console.log("namste react")
//         },1000)

//         // so ho we can clear this setinterval we can use some return function

//         return()=>{
// // so in this function we can write a clear this setinterval and this return likes work as the componentwillunmount from the classbaesd component

// clearInterval(clear);
//         }
//     },[])
//     // console.log("default render")
//     return (
//         <div>
//             <h1>Hello ishav</h1>
//             <h1>{prop.name}</h1>
//             <h1>{count}</h1>
//             <button onClick={()=>(setcount(count+1))}>click</button>
//         </div>
//     )
// }

