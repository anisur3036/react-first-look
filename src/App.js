import React, { Component } from 'react';

import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
