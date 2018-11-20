import * as React from 'react';
import './App.css';
import { HouseGallery } from "./HouseGallery"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <HouseGallery />
      </div>
    );
  }
}

export default App;
