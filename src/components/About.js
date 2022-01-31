import React from "react";
import { image } from "../data/data";

const aboutMe = (
  <div id='about'>
  <h2>About Me</h2>
  <p>Lorem Ipsum ~~~
  </p>
  <img src={image} alt='I made this'></img>
</div>)


function About() {

  return <div>{aboutMe}</div>;
}

export default About;
