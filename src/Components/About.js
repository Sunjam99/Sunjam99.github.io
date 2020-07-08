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

            <p>An African Lion making a dent in the world using technology.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Simba</span><br />
						   <span>3 bellygreens Summergreens<br />
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
