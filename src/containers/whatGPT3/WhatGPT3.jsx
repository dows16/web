import React from 'react';
//Below I imported the Feature module from the components folder to use for the "WhatGPT3" section.
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="Using text on the internet, GPT-3 is trained to generate realistic human text. GPT-3 has been used to create articles, poetry, stories, news reports and dialogue using just a small amount of input text that can be used to produce large amounts of quality copy."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Our chatbot system uses conversational artificial intelligence (AI) technology to simulate a discussion (or a chat) with a user in natural language via messaging applications, websites, mobile apps or the telephone."/>
        <Feature title="Knowledgebase" text="Knowledgebase is required for updating knowledge for an agent to learn with experiences and take action as per the knowledge. The Knowledgebase of KBA stores fact about the world."/>
        <Feature title="Education" text="Artificial intelligence can help students learn better and faster when paired with high-quality learning materials and instruction. AI systems can also help students get back on track faster by alerting teachers to problems the naked eye cannot see."/>
      </div>
    </div>
  )
}
export default WhatGPT3;