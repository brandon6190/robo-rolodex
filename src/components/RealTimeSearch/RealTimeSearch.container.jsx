import React from 'react';
import SearchField from './SearchField/SearchField.component';
import List from './List/List.container';

class RealTimeSearch extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        monsters: [],
        inputValue: ''
      };
    }
  
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users }));
    }
  
    searchFieldChange = event => {
      this.setState({ inputValue: event.target.value });
    }
  
    render() {
      const { monsters, inputValue } = this.state;

      const filteredMonsters = monsters.filter(monster => (
        monster.name.toLowerCase().includes(inputValue.toLowerCase()) || monster.email.toLowerCase().includes(inputValue.toLowerCase())
      ));

      return (
        <div className='monsters-container'>
          <SearchField changeHanlder={this.searchFieldChange} />          
          <List monsters={filteredMonsters} />
        </div>
      )
    }
  }

  export default RealTimeSearch;