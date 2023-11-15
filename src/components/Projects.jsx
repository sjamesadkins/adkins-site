import Blockchain from "../Images/Blockchain.jpeg";
import Hello from "../Images/Hello.jpeg";
import Rally from "../Images/Rally.jpeg";
import React from "../Images/React.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <body className="body">
      <div className="App">
        <h1 style={{ marginBottom: "5pc", fontSize: "60pt" }}>
          Coding Projects
        </h1>
      </div>

      <container className="inline">
        <div id="sidebar" className="App">
          <h2>Explore</h2>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Biography</Link>
              </li>
              <li>
                <a href={`http://www.linkedin.com/in/adkins-mba`}>LinkedIn</a>
              </li>
              <li>
                <a href={`http://github.com/sjamesadkins`}>GitHub</a>
              </li>
              {/* <li>
                                        <a href={`/adkins/projects`}>Coding Projects</a>
                                    </li> */}

              {/* hidden for now */}
              {/* <li>
                                        <a href={`/pages/gastronomy`}>Gastronomy</a>
                                    </li>
                                    <li>
                                        <a href={`/pages/music`}>Music</a>
                                    </li>
                                    <li>
                                        <a href={`/pages/travels`}>Travels</a>
                                    </li>
                                    <li>
                                        <a href={`/pages/blog`}>Vlog</a>
                                    </li> */}
            </ul>
          </nav>
        </div>

        <div
          className="card"
          style={{
            width: "18rem",
            marginLeft: "5pc",
            minWidth: "200px",
            minHeight: "200px",
            maxWidth: "325px",
            maxHeight: "325px",
          }}
        >
          <img src={Rally} className="card-img-top" alt="Rally"></img>
          <div className="card-body">
            <h5 className="card-title">Rally Networking App</h5>
            <p className="card-text">
              A neighborhood networking site for STL - Class Demo
            </p>
            <a
              href="https://home-5013300400.app-ionos.space/#/home"
              className="btn btn-primary"
            >
              Web Site
            </a>
          </div>
        </div>

        <div
          className="card"
          style={{
            width: "18rem",
            marginLeft: "2pc",
            minWidth: "200px",
            minHeight: "200px",
            maxWidth: "325px",
            maxHeight: "325px",
          }}
        >
          <img
            src={Blockchain}
            className="card-img-top"
            alt="Python Blockchain"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Python Blockchain</h5>
            <p className="card-text">
              A blockchain project Udemy Python tutorial - In Progress
            </p>
            <a
              href="https://github.com/sjamesadkins/Blockchain_Udemy"
              className="btn btn-primary"
            >
              Github
            </a>
          </div>
        </div>

        <div
          className="card"
          style={{
            width: "18rem",
            marginLeft: "2pc",
            minWidth: "200px",
            minHeight: "200px",
            maxWidth: "325px",
            maxHeight: "325px",
          }}
        >
          <img
            src={React}
            className="card-img-top"
            alt="Expense Tracker"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Expense Tracker</h5>
            <p className="card-text">
              A blockchain project Udemy React tutorial - Exercise
            </p>
            <a
              href="https://github.com/sjamesadkins/react-complete-guide"
              className="btn btn-primary"
            >
              Github
            </a>
          </div>
        </div>

        <div
          className="card"
          style={{
            width: "18rem",
            marginLeft: "2pc",
            minWidth: "200px",
            minHeight: "200px",
            maxWidth: "325px",
            maxHeight: "325px",
          }}
        >
          <img src={Hello} className="card-img-top" alt="Placeholder"></img>
          <div className="card-body">
            <h5 className="card-title">Placeholder</h5>
            <p className="card-text">
              Placeholder for a new project<br></br>
              <br></br>
            </p>
            <a className="btn btn-primary">N/A</a>
          </div>
        </div>
      </container>
    </body>
  );
};

export default Projects;
