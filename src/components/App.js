import React from 'react';
import '../styles/App.scss';
import '../index.scss';
import fetchCharacters from './services/FetchData.js';
import Header from './Header';
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
    const localValue = JSON.parse(localStorage.getItem('localValue'));

    if(localValue !== null){
        this.setState({
          value:localValue
        })
    }

    fetchCharacters()
      .then(data => {
        this.setState ({
          data:data.results
        })
    })
  }

  componentDidUpdate(){
    localStorage.setItem('localValue', JSON.stringify(this.state.value));
  }

  handleInputValue(inputValue){
    this.setState({
      value: inputValue
    })
  }

  renderCharacterDetails(props){
    const routeId = props.match.params.id;
    const characters = this.state.data;
    for(let character of characters) {
      if(character.id === parseInt(routeId)) {
        return <CharacterDetails characterObject={character}/>
      }
    }
  }

  render(){
    return (
     <div>
           <Switch>
             <Route exact path="/">
               <Header/>
               <FilterInput handleInputValue={this.handleInputValue}
                            value={this.state.value}
                            />
               <CharacterList data={this.state.data} 
                              inputValue={this.state.value}
                              />
              </Route>
              <Route path="/character/:id" render={this.renderCharacterDetails}/>
            </Switch>
    </div>
    );
  }
}

export default App;
