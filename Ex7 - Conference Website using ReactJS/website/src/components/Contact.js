import React, { Component } from 'react';


function Contact()
{
    return(
        <div>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
            <title>ICSA2021</title>
  <header>INTERNATIONAL CONFERENCE ON <br /> SPORTS ANALYTICS</header>
  
  <article id="content" style={{fontFamily: 'sans-serif', fontSize: 25, margin: 10}}>
    <h2 id="title">CONTACT US</h2>
    <p>In case of further queries regarding the event or the registration process and to know more about the event, feel free to contact our helpdesk.</p>
  </article>
  <div className="row">
    <div className="column1">
      <h3 id="name">SREYAS VENKATARAMANAN <i className="material-icons">verified</i></h3>
      <p style={{fontSize: 20}}><i className="material-icons">call</i> Contact No. : 7448472807 <br /><br /></p>
      <a id="button" href="mailto:primary@icsa.com">Mail here!  <i className="material-icons">mail</i></a><br /><br />
      <a className="contact" href="https://twitter.com/imsreyas_7">
        <img src="twitter.png" width={65} height={65} alt="twitter" title="Twitter link" />
      </a>
      <a className="contact" href="https://www.instagram.com/imsreyas_7/?hl=en">
        <img src="insta.png" width={65} height={65} alt="insta" title="Instagram link" />
      </a>
    </div>
    <div className="column3"><p style={{fontSize: 45, fontStyle: 'italic'}}>REGISTER NOW!  <i className="material-icons" style={{fontSize: 45}}>sports_esports</i></p></div>
  </div>
  <br />
  <footer align="center">
    <p>© 2021 by Sreyas Venkataramanan.</p><p>
    </p><address> Contact us at <a href="sreyasv13@gmail.com">sreyasv13@gmail.com</a></address>
  </footer>
        </div>
    )
}

export default Contact;