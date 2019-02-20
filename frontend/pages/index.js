// import React from "react";
import Link from "next/link"

// class Home extends React.Component {
//     render() {
//         return (
//         <div>
//              <h1>Title of page: Home</h1>

//         </div>
//         )
//     }
// }
const Home = props => (
    <div>
        <h1>Title of page: Home</h1>
        <Link href="/sell"> Go to Sell</Link> 
    </div>
)


export default Home;