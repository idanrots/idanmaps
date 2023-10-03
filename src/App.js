import React from 'react';
import Map from './Map';
import CordinateAddMenu from './CordinateAddMenu';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="app-container">
      <div className="menu">
        <CordinateAddMenu />
      </div>
      <div className="map">
        <Map />
      </div>
    </div>
    </Provider>
  );
}

export default App;
