import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router';



const youtubeUrls = [
  'c_TEnlMRcCc',
  'h_iCJ_HBF9M',
  'UWg-YoBv-do',
  'tS6yCTIaIyw',
  'PplH_ogfrZU',
  'TFKyEyoCL54',
  '0hdV1ITazOY'
];

export class Projects extends Component {
  render() {
    return (
      <div className="fullHeight">
        <div className="row" id="projectsMenuRow">
          <div className="col s4 projectsMenu">
            <Link to="/projects">One</Link>
          </div>
          <div className="col s4 projectsMenu">
            <Link to="/projects/two">Two</Link>
          </div>
          <div className="col s4 projectsMenu">
            <Link to="/projects/three">Three</Link>
          </div>
        </div>
        <div className="row projectsVideoRow">
          <div className="col s12 projectsVideoWrapper">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export class ProjectsHome extends Component {
  render() {
    return (
      <YouTube className="projectsVideo" videoId={ 'TFKyEyoCL54' } />
    )
  }
}

export class ProjectsTwo extends Component {
  render() {
    return (
      <YouTube className="projectsVideo" videoId={ '0hdV1ITazOY' } />
    )
  }
}

export class ProjectsThree extends Component {
  render() {
    return (
      <YouTube className="projectsVideo" videoId={ 'pQjyTY8klRc' } />
    )
  }
}
