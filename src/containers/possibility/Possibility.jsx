import React from 'react';

import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possiblity" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Virtual reality (VR) is not a new concept, attracted much attention in the past few years. A large amount of media interest is rapidly growing. Very few people, however, actually know that VR is that its basic principles and open problems. In this article, a historical overview of virtual reality are, basic terms and classes of VR in the list, and then the introduction of this technology in science, work, and recreation centers.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility;