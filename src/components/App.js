import React from 'react';
import '../styles/App.scss';
import fetchCharacters from './services/FetchData.js';
//import CharacterList from './ShowList';
//import CharacterDetails from './CharacterDetails';
//import FilterInput from './FilterInput';
//import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        }
  }


  componentDidMount(){
    fetchCharacters()
      .then(data => {
        this.setState ({
          data:data
        })
      })
    }
  }

  export default App;