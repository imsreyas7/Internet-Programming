import React, { Component } from 'react';


function Homepage()
{
    return(
        <div>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
        <header>INTERNATIONAL CONFERENCE ON <br /> SPORTS ANALYTICS</header>
                
        <article id="content" style={{fontFamily: 'sans-serif', fontSize: 25, margin: 10}}>
          <h2 id="title">Welcome to the International Conference on Sports Analytics, brought to you by AthLeap Sports Solutions!</h2>
          <p>Kindly Navigate to the respective pages given above to know more.</p>
          <img src="Athleap.jpg" width={120} height={120} alt="ath" title="Athleap Inc." /> 
          <img src="ISC-Red-Blue.png" width={500} height={100} alt="ICSA21" title="The logo forICSA2021" /> 
        </article>
        <article id="content" style={{fontFamily: 'Times New Roman', fontSize: 15, margin: 10}}>
          <p><em>The ISC has been functional since the year 1988 and has hosted over 564 workshops all around the world. We are also proud sponsors of teams like Al-Sadd, Wolves, Clippers and the Aston Martin Racing Team.</em></p>
          <p style={{fontSize: 20}}>International Sports Convention is an events, education and media business connecting individuals and companies in the Business of Sport.
            Content is at the heart of everything ISC do. Providing intelligence and insight to the Business of Sport.
            The International Sports Convention is the Meeting place of the business of sport. We provide multiple platforms and opportunities for those inside the industry and those who are willing to enter it.
            The new Tottenham Hotspur Stadium will be the venue of choice. Not just home to one of the Premier League mights but also the NFL venue. A venue which inspires discussion, debate and facilitates business networking.
            Tottenham Hotspur Stadium – a combination of both entertainment and sporting space and the most dynamic stadium in Europe will be the setting for the ISC 2021. The specification and spaces within the venue reserved for the ISC 2021 will truly enhance the overall participant experience and accelerate the ambience for business networking.
            ISC 2021 in London will be with a difference. Imagine yourself learning, watching the debate and discussions of one of the 6 Sports Business Conferences in the NFL Locker Room – that will happen!
            Private Drinks Reception in the Tunnel Club, other conferences in the Press Room or the large auditorium with the background being the stadium pitch view.
            Imagine networking in a venue so suited to enhancing your delegate experience, inside and outside of the venue.
            Lounge space and great networking space to enhance your business goals.
            Choosing the venue was no easy decision but ISC invested in a venue with the total delegate experience in mind.
          </p>
          <br /><br /><br /><br />
          <footer align="center">
            <p>© 2021 by Sreyas Venkataramanan.</p><p>
            </p><address> Contact us at <a href="sreyasv13@gmail.com">sreyasv13@gmail.com</a></address>
          </footer>
        </article>
        </div>
    )
}

export default Homepage;