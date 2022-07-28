import './App.css';

import React, { Component } from 'react'

import Main from './Com Folder/Main/main'
import Design from './Com Folder/Design & Art/DesignArt'


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cards: [],
      isLoaded: true
    }
  }
  
    componentDidMount() {
      fetch("http://localhost:7000/myCardList")
      .then((response) => response.json())
      .then((myCardList) => {
        
        setTimeout(() => {
            this.setState({isLoaded: false})
            this.setState({ cards: myCardList })
          }, 3000);
        });
    }
    

  render() { 
    return ( 
        <div className="App">
          <div className='main-s'>
              <Main cards={this.state.cards} isLoading={this.state.isLoaded} />
          </div>
          <div className='design-s'>
              <Design />
          </div>
        </div>
     );
  }
}
 
export default App;
