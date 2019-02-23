//paso 1
import React, { Component } from 'react';
import './App.css'
import Persons from './containers/Persons';
import { createStore } from 'redux'; //paso 1.1
import { Provider } from 'react-redux'; //paso 1.2
import reducer from './store/reducer'; // paso 1.3

const store = createStore( reducer ) // paso 1.4

class App extends Component {
  render() {
    return (
    <Provider store={store}> {/* paso 1.5 */}
      <div className="App">
        <h1>Evoluciona la aplicación a Redux</h1>
        <Persons />
      </div>
    </Provider>
    );
  }
}

export default App;
