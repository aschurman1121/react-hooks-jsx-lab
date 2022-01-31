import React from "react";
import { name, city } from "../data/data.js";

const style = {
  color: "firebrick"
}




const Home = () => {
  return (
    <div id='home'> 
    <h1 style = {style}> Your {name} is a Web Developer from Your {city}</h1>
  </div>
  );

};

// function Home() {
//   return <div>Home
//     <DivHome />
//   </div>;
// }

export default Home;
