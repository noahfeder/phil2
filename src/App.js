import React, { Component } from 'react';
import './materialize.css';
import './App.css';
import Header from './dumb/header';
import Footer from './dumb/footer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container main">
          <Header />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
