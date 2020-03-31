import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    };
  }

  onChangeType = e => {
    const petType = e.target.value;

    this.setState({
      filters: {
        type: petType
      }
    });
  };

  onFindPetsClick = () => {
    const { type } = this.state.filters;
    const url = `/api/pets${type !== 'all' ? '?type=' + type : ''}`;

    fetch(url)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets }));
  };

  onAdoptPet = petId => {
    this.setState(prevState => {
      return {
        pets: prevState.pets.map(pet =>
          pet.id === petId ? { ...pet, isAdopted: true } : pet
        )
      };
    });
  };

  render() {
    const { pets } = this.state;

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
