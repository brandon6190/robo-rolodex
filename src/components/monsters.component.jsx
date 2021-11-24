import React from 'react';
import SearchField from './searchField.component';
import MonsterList from './monsterList.component';

class Monsters extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        monsters: [],
        inputValue: '',
      };
  
      this.searchFieldChange = this.searchFieldChange.bind(this);
    }
  
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users }));
    }
  
    searchFieldChange(event) {
      this.setState({ inputValue: event.target.value });
    }
  
    render() {
      return (
        <div className='monsters-container'>

          <SearchField changeHanlder={this.searchFieldChange} />          
          <MonsterList monsters={this.state.monsters} />
  
        </div>
      )
    }
  }

  export default Monsters;