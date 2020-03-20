import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component{

  state = {
    contacts: [],
    isLoading: false,
    error: null,
  }

  // To fetch our contact list, we will use a componentDidMount() method in our App.js file. 
  //This method is executed immediately our component is mounted and we will also make our API request in that method.

  componentDidMount(){
    this.setState({isLoading: true});
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({contacts : data, isLoading: false});
    },
    )
    .catch(console.log)
  }

  // .then((data) => {this.setState({ contacts: data })}) sets the value of our state to the output from the API call

  render(){
    const { contacts, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <Contacts contacts={this.state.contacts}/>
    );
  }
}

export default App;
