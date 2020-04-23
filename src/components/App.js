import React from 'react';
import '../styles/App.scss';
import fetchCharacters from './services/FetchData.js';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import FilterInput from './FilterInput';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
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

    renderCharacterDetails(props){
      console.log(props)
      const routeId = props.match.params.id;
      const characters = this.state.data;
      for(let character of characters) {
        if(character.id === parseInt(routeId)) {
          return <CharacterDetails characterObject={character}/>
        }
      }
    }

 
  render(){
    console.log(this.state.data)
    return (
     <div>
       <Switch>
         <Route exact path="/">
           <FilterInput handleInputValue={this.handleInputValue}/>
           <CharacterList data={this.state.data} 
                          inputValue={this.state.value}/>
         </Route>
         <Route path="/character:id" render={this.renderCharacterDetail}/>
      </Switch>
     </div>
    );
  }
}

export default App;
