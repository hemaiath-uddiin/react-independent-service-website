import React from 'react';
import img  from "../../images/protfolio.jpg" ;
import "./About.css"
const About = () => {
    return (
        <div className='container' id='container'>
            <div className="row"> 
               <div className="col-lg-6"> 
                  <img id='img' src= {img} alt="" />
               </div> 
               <div className="col-lg-6 des"> 
                  <h1> Hemaiath Uddin Shifat</h1> 
                  <article className='titles'> 
                  <p > i want to be a professional web developer,  i try to hard work to reach my goal through the programming hero course, i hope i will be a good developer</p> 
                  <button className='btn btn-primary'> Download Cv</button>
                  </article>
               </div>
            </div>
        </div>
    );
};

export default About;