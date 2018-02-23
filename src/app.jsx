import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';
import geolib from 'geolib';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        topspots: []
    };
  }
  componentWillMount() {
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }
  
  render() {
    
    
  
    return (
      <div className='App'>
      <div className='container'>
      <div className='mainTitle' >
      <h5 className='title h1' >San Diego Top Spots </h5>
      <p className='titlesubtext'>A list of the top 30 places to see in San Diego, California </p>

      </div>
      <div className='thedata'>
      {/* <pre className='titlesubtext'>{ JSON.stringify(this.state.topspots, null, 2) }</pre> */}
     
      {/* <this.state.topspots/>  */}
      {this.state.topspots.map(topspot => (
          <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location} />
      ))}
      {/* <this.props/> */}


      
      
      </div>
      </div>
      </div>
    );
  }
}

export default App;
