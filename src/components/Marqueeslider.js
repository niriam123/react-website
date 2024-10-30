import React from 'react'
import Marquee from "react-fast-marquee";

const Marqueeslider = () => {
  return (
    <div className='marquee-container'>
      <Marquee pauseOnHover={true}>
        <div className="marquee-logo-img">
            <img src="1.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="2.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="3.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="4.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="5.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="6.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="7.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="8.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="9.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="10.webp" alt='logo'></img>
        </div>
      </Marquee>
      <Marquee direction="right" pauseOnHover={true}>
        <div className="marquee-logo-img">
            <img src="logo1.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="logo2.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="logo4.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="logo5.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="logo6.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="logo7.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="logo8.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="logo9.webp" alt='logo'></img>
        </div>
        <div className="marquee-logo-img">
            <img src="logo6.webp" alt='logo'></img>
        </div>
      </Marquee>
    </div>
  )
}

export default Marqueeslider
