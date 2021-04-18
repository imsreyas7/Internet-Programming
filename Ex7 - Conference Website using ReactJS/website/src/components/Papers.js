import React, { Component } from 'react';


function Papers()
{
    return(
        <div>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <title>ICSA2021</title>
  <style dangerouslySetInnerHTML={{__html: "\n\t\t\n\t\t\timg\n\t\t\t{\n\t\t\t\t\topacity:0.6;\n\t\t\t}\n\t\t\timg:hover\n\t\t\t{\n\t\t\t\t\topacity:1;\n\t\t\t}\n\t\t\n\t" }} />
  <header>INTERNATIONAL CONFERENCE ON <br /> SPORTS ANALYTICS</header>

  <article id="content" style={{fontFamily: 'sans-serif', fontSize: 25, margin: 10}}>
    <h2 id="title">CALL FOR PROJECTS AND RESEARCH PAPERS</h2>
    <p>Students / Professionals having any interesting research papers in any sport analysis, or new project ideas can mail it to our management team.</p>
  </article>
  <div className="row" style={{fontFamily: 'verdana', fontSize: 25, margin: 10}}>
    <a id="button" href="mailto:primary@icsa.com">Mail here!</a>
    <br />
    <div className="column1">
      <p style={{fontFamily: 'arial'}}>The topics of interest include :</p>
      <ul className="topics" style={{fontFamily: 'arial'}}>
        <li>Performance Analysis</li>
        <ul className="subtopics">
          <li>Efficiency Assessment</li>
          <li>Conversion Rate</li>
          <li>Refereeing Accuracy and Fairness</li>
        </ul>
        <li>Robust Prediction Machines</li>
        <ul className="subtopics">
          <li>Contour Analysis</li>
          <li>Line and Length Study</li>
          <li>Opponent Performance Tracker</li>
          <li>Device and Ground Measurement</li>
        </ul>
        <li>Medical Diagnosis and Injury Database</li>
        <ul className="subtopics">
          <li>Frequency Mapping</li>
          <li>Effective First Aid</li>
          <li>Database Maintenance</li>
        </ul>
        <li>Heatmap Generation ALgorithms</li>
        <ul className="subtopics">
          <li>Hotspot Generator</li>
          <li>Region Coverage</li>
          <li>Image Sensing</li>
        </ul>
      </ul>
    </div>
    <div className="column2">
      <img src="epl3.png" width={180} height={300} alt="epl" title="The logo of the English Premier League" />
      <i className="fa fa-info-circle" />
      <p>The <em>English Premier League</em> is one of the most polular football leagues in the world, with the viewership seeing a sharp spike even in Asian and African countries. It is the First division league in England, with 20 teams competing each season. <em>Manchester United</em> have been the most successful club in this tournament, having won a record 20 titles, 13 of them under the great <em>Sir Alex Ferguson</em>.</p>
    </div>	
  </div>
  <br /><br />
  <footer align="center">
    <p>© 2021 by Sreyas Venkataramanan.</p><p>
    </p><address> Contact us at <a href="sreyasv13@gmail.com">sreyasv13@gmail.com</a></address>
  </footer>
        </div>
    )
}

export default Papers;