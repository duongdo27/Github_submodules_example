import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import TotalPrice from './components/TotalPrice';
import AddItem from './components/AddItem';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ItemList />
          <TotalPrice />
          <AddItem />
      </div>
    );
  }
}

export default App;
