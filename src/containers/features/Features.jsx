import React from 'react';
import { Feature } from '../../components';
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "We can track the inputs that go into an algorithm and the outcomes it gives, but understanding the reasoning or process behind it is still a mystery. For now, AI can simply come up with correlations rather than causation."
  },
  {
    title: "Become the tended active",
    text: "Active.Ai empowers banks and other financial institutions to intuitively and intelligently engage customers on mobile, chat, or voice-enabled IoT devices using Artificial Intelligence."
  },
  {
    title: "Create a brighter future",
    text: "The future of AI is here—and everywhere There is a genuine, evidence-based phase shift from artificial intelligence as “cherry-on-top” curiosity to “key ingredient” at leading organizations. Sixty-one percent of respondents to a recent Deloitte Insights report say AI will substantially transform their industry in the next 3-5 years."
  },
  {
    title: "Large scale Machine Learning",
    text: "Machine learning (ML) is the study of computer algorithms that can improve automatically through experience and by the use of data. It is seen as a part of artificial intelligence. Machine learning algorithms build a model based on sample data, known as training data."
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into the Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features