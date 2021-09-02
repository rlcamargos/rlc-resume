import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var country = this.props.data.address.country;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Rafael Camargos Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I'm a born technology-enthusiast that graduated in Mechatronics Engineering while pursuing my dream of being a scientist. A few years ahead, here I stand in the software industry making, on a daily basis, that dream come true.</p>
            <br></br>
            <p>Some of my achievements:</p>
            <p>• Helped a world-class royalties trading company to succeed in their business through the delivery and maintenance of many exciting new features in their website where I played roles in the whole SDLC stack: from quality assurance tester and full-stack developer to tech leading and team management.</p>
            <p>• Developed and published an Android application to a sucessful innovative holographic experiences fin-tech.</p>
            <p>• Introduced and contributed to many technological improvements in a steel mill.</p>
            <p>• Lead a winning robotics team through 3 Latin American competitions.</p>
            <br></br>
            <p>Would like to get me on-boarded to a new adventure? Let's chat.</p>
            <br></br>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city}, {country}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
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
