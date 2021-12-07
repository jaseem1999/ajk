import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently studying <b>BBA</b> at{" "}
        <b> University of Calicut </b>, with a focus in Software  and
        Business. 
      </p>
    );
    const two = (
      <p>
        I'm into any sort of <b>Web Designer</b> that requires
        creativity. My other areas of interest include <b>machine learning</b>,{" "}
        <b>r programming</b> and <b>frontend development</b>. I
        
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:ajkkalappatt@gmail.com">
          ajkkalappatt@gmail.com  
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript",
      "Python",
      "React.js",
      "Java",
      "C++",
      "c",
      "MySql",
      "HTML & CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    var image = require("./assets/me.jpg");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </div>
            <div className="about-image">
              <img src={image} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
