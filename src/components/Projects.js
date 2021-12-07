import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
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
    const projects = {
      "My first react.js project": {
        desc:
          "official web site for sfi mes kalladi college.",
        techStack: "React.js,git,github",
        link: "https://github.com/jaseem1999/react-sfikc",
        open: "https://sfimeskc.in/"
      },
      "The web site Dr. Saleej sir": {
        desc:
          "its web site for Dr Saleej K.T .",
        techStack: "Javascript, HTML / CSS /SCSS/ Bootstrap /git,github",
        link: "https://github.com/jaseem1999/Dr_saleej_sir",
        open: "https://jaseem1999.github.io/Dr_saleej_sir/"
      },
      Truth: {
        desc:
          "Its my first project of john hopkins university .",
        techStack: "Javascript, HTML / CSS /SCSS/ Bootstrap /git,github",
        link: "https://jaseem1999.github.io/RestaurantJunaid/",
        open: "https://github.com/jaseem1999/RestaurantJunaid"
      },
      "My first Project of React.js": {
        desc:
           "Netflix app ",
        techStack: "React.js, API, ",
        link: "https://github.com/jaseem1999/Netflix_jassy",
        open: "https://jaseem1999.github.io/Netflix_jassy/"
      },
      "Correlation": {
        desc:
          "correlation of two variables",
        techStack: "C programming, ",
        link: "https://github.com/jaseem1999/correlation-",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <span className="external-links">
                      <a className="github-icon" href={projects[key]["link"]}>
                        <GitHubIcon
                          style={{
                            fontSize: 20,
                            color: "var(--lightest-slate)"
                          }}
                        ></GitHubIcon>
                      </a>
                      {projects[key]["open"] && (
                        <a className="open-icon" href={projects[key]["open"]}>
                          <OpenInBrowserIcon
                            style={{
                              fontSize: 25,
                              color: "var(--lightest-slate)"
                            }}
                          ></OpenInBrowserIcon>
                        </a>
                      )}
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
