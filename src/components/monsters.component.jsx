import React from 'react';
// import SearchInput from './searchInput';
import MonsterList from './monsterList.component';

class Monsters extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        monsters: [],
        inputValue: '',
      };
  
      this.searchInputChange = this.searchInputChange.bind(this);
    }
  
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users }));
    }
  
    searchInputChange(event) {
      this.setState({ inputValue: event.target.value });
    }
  
    render() {
      return (
        <div className='monsters-container'>
  
          <input className='monster-search' type="text" placeholder="Search for monster" onChange={this.searchInputChange} />
          
          <MonsterList monsters={this.state.monsters} />
  
        </div>
      )
    }
  }

  export default Monsters;