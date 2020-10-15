import React from 'react';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://api.spoonacular.com')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='api'>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name: {item.name} | {item.email}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
