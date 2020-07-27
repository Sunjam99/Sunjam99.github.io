import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Simbarashe Musanjeya born in a humble home of a pastor in the city of Harare.First time i switched on a computer at the age of 9 it also switched on an aspect of my life i never knew existed.Introduced to coding at the age of 15 it has developed into not only a love but a passion that will eventually become a lifetime worth lived.Besides playing video games,rugby and reading books in my spare time i have a keen intrested in penetration testing and ethical hacking.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>3 BellyGreens Summergreens<br />
						         Cape Town, 4444
                   </span><br />
						   <span>068-295-6645</span><br />
                     <span>simzmusaz@gmail.com</span>
					   </p>
               </div>

            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
