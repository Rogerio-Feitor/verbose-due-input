import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super();
      this.state = {
        characters: [],
      };
    }
  

    render () {
      const removeCharacter = (index) => {
        const { characters } = this.state
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index;
          })
        })
      }

      const handleSubmit = (character) => {
        const { characters } = this.state
        this.setState({ characters: [...characters, character] })
      }

      const { characters } = this.state;
      return (
        <div className='Container'>
          <Table characterData={ characters } removeCharacter={ removeCharacter } />
          <Form handleSubmit={ handleSubmit } />
        </div>
      )
    }
  }

  export default App;
