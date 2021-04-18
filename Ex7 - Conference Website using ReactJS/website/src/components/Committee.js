import React, { Component } from 'react';


function Committee()
{
    return(
        <div>
           <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <title>ICSA2021</title>
  <header>INTERNATIONAL CONFERENCE ON <br /> SPORTS ANALYTICS</header>
  
  <article id="content" style={{fontFamily: 'sans-serif', fontSize: 25, margin: 10}}>
    <h2 id="title">COMMITTEES</h2>
    <p>Given Below is the list of the various Committees participating in this conference and the respective sports/fields.</p>
  </article>
  <article id="content" style={{fontFamily: 'garamond', fontSize: 25, margin: 10}}>
    <table>
      <tbody><tr><th style={{color: 'purple'}}>COMMITTEE</th>
          <th style={{color: 'purple'}}>	SPORT</th>
        </tr>
        <tr>
          <td>The Brazuca</td>
          <td>	Football <i className="material-icons">sports_football</i></td>
        </tr>
        <tr>
          <td>CricBuzz</td>
          <td>	Cricket <i className="material-icons">sports_cricket</i></td>
        </tr>
        <tr>
          <td>Ace-it</td>
          <td>	Tennis <i className="material-icons">sports_tennis</i></td>
        </tr>
        <tr>
          <td>Alley-oop</td>
          <td>	Basketball <i className="material-icons">sports_basketball</i></td>
        </tr>
        <tr>
          <td>Trackerz</td>
          <td>	Athletics <i className="material-icons">sports</i></td>
        </tr>
      </tbody></table>
  </article>
  <br /><br /><br />
  <footer align="center">
    <p>© 2021 by Sreyas Venkataramanan.</p><p>
    </p><address> Contact us at <a href="sreyasv13@gmail.com">sreyasv13@gmail.com</a></address>
  </footer>
        </div>
    )
}

export default Committee;