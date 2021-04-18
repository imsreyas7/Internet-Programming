import React, { Component } from 'react';


function Registration()
{
    return(
        <div>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <title>ICSA2021</title>
  <style dangerouslySetInnerHTML={{__html: "\n\t\t\n\t\t\timg\n\t\t\t{\n\t\t\t\t\topacity:0.6;\n\t\t\t}\n\t\t\timg:hover\n\t\t\t{\n\t\t\t\t\topacity:1;\n\t\t\t}\n\t\t\n" }} />
  <header>INTERNATIONAL CONFERENCE ON <br /> SPORTS ANALYTICS</header>
 
  <article id="content" style={{fontFamily: 'sans-serif', fontSize: 25, margin: 10}}>
    <h2 id="title">REGISTRATION</h2>
    <p>Fill the details below to register for events and workshops.</p>
    <div className="row">
      <div className="column1">
        <form id="form" action="/action_page.php" style={{fontSize: 25, fontFamily: 'arial', backgroundColor: 'PaleTurquoise', color: 'white', backgroundImage: 'url("man_utd_pic.jpg")', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
          <label htmlFor="fname">FIRST NAME:</label><br />
          <input id="text" type="text" name="fname" placeholder="Ravichandran" /><br /><br />
          <label htmlFor="lname">LAST NAME:</label><br />
          <input id="text" type="text" name="lname" placeholder="Ashwin" /><br /><br />
          <label htmlFor="mail">Email ID:</label><br />
          <input id="text" type="email" name="email1" placeholder="ashcricket99@gmail.com" /><br /><br />
          <label htmlFor="gender1">GENDER:</label><br />
          <input type="radio" id="male" name="gender" defaultValue="male" />
          <label htmlFor="male">Male</label><br />
          <input type="radio" id="female" name="gender" defaultValue="female" />
          <label htmlFor="female">Female</label><br />
          <input type="radio" id="other" name="gender" defaultValue="other" />
          <label htmlFor="other">Other</label><br /><br />
          <label htmlFor="field">FIELD OF EXPERTISE:</label><br />
          <input id="text" type="text" name="field" /><br /><br />
          <label htmlFor="ev">EVENTS INTERESTED:</label><br />
          <input type="checkbox" id="ws" name="ws" defaultValue="workshops" />
          <label htmlFor="ws"> Workshops</label><br />
          <input type="checkbox" id="se" name="se" defaultValue="Seminar" />
          <label htmlFor="se"> Seminar</label><br />
          <input type="checkbox" id="pr" name="pr" defaultValue="Project" />
          <label htmlFor="pr"> Papers and Projects</label><br />
          <input type="checkbox" id="me" name="me" defaultValue="Media" />
          <label htmlFor="me"> Media Coverage</label><br /><br />
          <input id="button" type="submit" defaultValue="Submit" />
          <input id="button" type="reset" defaultValue="Reset" />
        </form>
      </div>
      <div className="column2">
        <div className="pic">
          <img src="ipl.png" width={400} height={180} alt="ipl" title="The logo of the Indian Premier League" />
        </div>
        <p style={{textAlign: 'center'}}>The IPL Auction for the 2021 season is to be held on <em>18th February</em> at <em>Chennai</em>. There are 61 remaining slots for players to be picked, and over 1100 players have registered for the event. The hype leading to the D-day has been massive and there is a huge expectation for the foreign picks to go grab the big bucks. Among the foreigners, the maximum entries have come from the <em>West Indies</em>.<br />There have been a few surprises though, with players like Mitchell Starc and James Pattinson opting out for this year. Starc was bound to possibly get the highest bid, with many teams in search of a frontline pacer.Pattinson's decision too came as a surprise for the experts, given his good run in the last edition at the UAE.</p>
      </div>	
    </div>
  </article>
  <footer align="center">
    <p>© 2021 by Sreyas Venkataramanan.</p><p>
    </p><address> Contact us at <a href="sreyasv13@gmail.com">sreyasv13@gmail.com</a></address>
  </footer>
        </div>
    )
}

export default Registration;