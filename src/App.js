import React from 'react';
import { Route } from 'react-router-dom';
import Context from './Context';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=f513fd258c30444daf45eecf46d1df03&query=pasta&maxFat=25&number=2'
    )
      .then(res => res.json())
      .then(data => {
        // console.log('data', data);
        this.setState({
          isLoaded: true,
          items: data,
        });
      });
  }

  render() {
    let { isLoaded, items } = this.state;
    console.log('items', items.results);
    console.log('isloaded', isLoaded);
    // console.log('amount', item.nutrition.nutrients.amount);

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='api'>
          <h1>Recipes</h1>
          <ul>
            {items.results.map(item => (
              <li key={item.id}>Title: {item.title}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
