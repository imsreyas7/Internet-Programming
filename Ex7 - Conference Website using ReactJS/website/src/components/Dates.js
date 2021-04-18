import React, { Component } from 'react';


function Dates()
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
 
  <h2 id="title">Important Dates</h2>
  <article id="content" style={{fontFamily: 'sans-serif', fontSize: 25, margin: 10, backgroundImage: 'url("cr2.jpg")', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
    <br /><br /><br /><br />
    <p style={{color: 'white'}}>Here are the important dates pertaining to the conference.</p>
    <br /><br /><br /><br /><br />
    <table style={{border: 'black', backgroundColor: 'navy'}}>
      <tbody><tr><th style={{color: 'purple'}}>DATE/DEADLINE</th>
          <th style={{color: 'purple'}}>	EVENT</th>
        </tr>
        <tr>
          <td>23/01/2021</td>
          <td>	Last date for Committee registration</td>
        </tr>
        <tr>
          <td>26/01/2021</td>
          <td>	Last Date for Volunteer Registration</td>
        </tr>
        <tr>
          <td>27/01/2021</td>
          <td>	Sale of Tickets begins</td>
        </tr>
        <tr>
          <td>30/01/2021</td>
          <td>	Sale of Tickets ends</td>
        </tr>
        <tr>
          <td>31/01/2021</td>
          <td>	Conference</td>
        </tr>
        <tr>
          <td>02/02/2021</td>
          <td>	Allotment of Projects</td>
        </tr>
        <tr>
          <td>17/02/2021</td>
          <td>	First Review</td>
        </tr>
        <tr>
          <td>28/02/2021</td>
          <td>	Second Review</td>
        </tr>
        <tr>
          <td>10/03/2021</td>
          <td>	Final Review</td>
        </tr>
      </tbody></table>
    <br /><br /><br />
  </article>
  <footer align="center">
    <p>© 2021 by Sreyas Venkataramanan.</p><p>
    </p><address> Contact us at <a href="sreyasv13@gmail.com">sreyasv13@gmail.com</a></address>
  </footer>
        </div>
    )
}

export default Dates;