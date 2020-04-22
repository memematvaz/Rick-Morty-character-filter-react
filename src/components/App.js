import React from 'react';
import '../styles/App.scss';
import fetchCharacters from './services/FetchData.js';
import CharacterList from './CharacterList';
//import CharacterDetails from './CharacterDetails';
import FilterInput from './FilterInput';
//import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.state = {
      data: [],
      value:''
        }
  }


  componentDidMount(){
    fetchCharacters()
      .then(data => {
        this.setState ({
          data:data.results
        })
      })
    }
  
    handleInputValue(inputValue){
      this.setState({
        value: inputValue
      })
    }


  render(){
    console.log(this.state.data)
    return (
     <div>
        <FilterInput handleInputValue={this.handleInputValue}/>
        <CharacterList data={this.state.data} 
                       inputValue={this.state.value}/>
     </div>
    );
  }
}

export default App;