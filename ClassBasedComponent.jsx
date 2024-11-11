// // import Profile from "./ClassBasedComponent"
// import { Profilefunctionbased } from "./Howthe UseEffect work And profileshow"
// import { Component } from "react"
// import { Component } from 'react'

// class Profile extends Component {
//     constructor(props) {
//         super(props)
//         // create state variable in this
//         this.state = {

//             count: 0,
//             count2: false,
//         }

//         this.state = { 
//             usersInfo: {
//                 firstName: "Dummy FirstName",
//                 lastName: 'Dummy LastName',
                
// maidenName:"Dummy Maidenname"
//             }
//         }
//         // Firsttime this is call 
//         console.log("child-contractor")
//     }
//     // Thirdtime this is call 
//     async componentDidMount() {
//         const data = await fetch('https://dummyjson.com/users')
//         const json = await data.json();

     
//         this.setState({

//             usersInfo: json
//         })

//     }

//     componentWillUnmount(){
// console.log("hello")
//     }
//     render() {
//         // Secondtime this is call
//         console.log("child-render")
//         return (
//             <>
//                 <h1>hello</h1>
//                 {/* eslint-disable react/prop-types  */}
//                 <img className="reactlifecycle" src="reactlifecycle.png"></img>

//                 <img src={this.state.usersInfo.image}></img>
//                 <h3>{this.state.usersInfo.lastName}</h3>
//                 <h3>{this.state.usersInfo.firstName}</h3>
//                 <h3>{this.state.usersInfo.maidenName}</h3>

//                 <button onClick={() => this.setState({
//                     count: this.state.count + 1,

//                 })}>click</button>
//             </>

//         )
//     }

// }
// export default Profile

// class Abouts extends Component {

//     constructor(props) {
//         super(props);


//                 this.state = {
//             count: "about"
//         }
       
//         // console.log("parent-contractor")
//     }
//     componentDidMount()
//     {
      
//     }
//     render() {
//         // console.log("parent-render")
//         return (
//             <div>
//                 <h1>the</h1>
//                 {/* <Profile name={"child1"} /> */}
//                 <Profilefunctionbased name={"ishav"} />
//                 <h1>{this.state.count}</h1>
//             </div>
//         )
//     }
// }
 
// // parent-contractor
// // parent-render