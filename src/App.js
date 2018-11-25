import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import TotalPrice from './components/TotalPrice';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ItemList />
          <TotalPrice />
      </div>
    );
  }
}

export default App;
