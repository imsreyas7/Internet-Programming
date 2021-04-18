import React, { Component } from 'react';


function Workshops()
{
    return(
        <div>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <title>ICSA2021</title>
  <header>INTERNATIONAL CONFERENCE ON <br /> SPORTS ANALYTICS</header>
 
  <article id="content" style={{fontFamily: 'sans-serif', fontSize: 25, margin: 10}}>
    <h2 id="title">WORKSHOPS</h2>
    <p>Given Below is the list of the various workshops to be hosted in the conference, along with the respective committees.</p>
  </article>
  <article id="content" style={{fontFamily: 'garamond', fontSize: 25, margin: 10}}>
    <table style={{border: 'black', backgroundColor: 'green'}}>
      <tbody><tr><th style={{color: 'Navy'}}>COMMITTEE</th>
          <th style={{color: 'Navy'}}>SPORT</th>
          <th style={{color: 'navy'}}>	WORKSHOP</th>
        </tr>
        <tr>
          <td>The Brazuca</td>
          <td>Football</td>
          <td>	Heat Map Analysis</td>
        </tr>
        <tr>
          <td>CricBuzz</td>
          <td>Cricket</td>
          <td>	Graphical Study and Imaging</td>
        </tr>
        <tr>
          <td>Ace-it</td>
          <td>Tennis</td>
          <td>	Serve tracking using ML</td>
        </tr>
        <tr>
          <td>The Brazuca</td>
          <td>Football</td>
          <td>	Player Similarity Model</td>
        </tr>
        <tr>
          <td>Alley-oop</td>
          <td>Basketball</td>
          <td>	Statistical Comparisons</td>
        </tr>
        <tr>
          <td>Trackerz</td>
          <td>Athletics</td>
          <td>	Athlete Guidance Portal</td>
        </tr>
        <tr>
          <td>Alley-oop</td>
          <td>Basketball</td>
          <td>	Shooting Hotspots</td>
        </tr>
        <tr>
          <td>CricBuzz</td>
          <td>Cricket</td>
          <td>	Snicko and Ball Tracking</td>
        </tr>
      </tbody></table>
  </article>
  <br />
  <footer align="center">
    <p>© 2021 by Sreyas Venkataramanan.</p><p>
    </p><address> Contact us at <a href="sreyasv13@gmail.com">sreyasv13@gmail.com</a></address>
  </footer>
        </div>
    )
}

export default Workshops;