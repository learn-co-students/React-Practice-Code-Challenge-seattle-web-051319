import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super();
    this.state = {
      sushis: [],
      currentIndex: 0,
      eatenSushi: [],
      budget: 100
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      const sushis = data.map(sushi => {
        sushi.isEaten = false;
        return sushi;
      })
      this.setState({
        sushis
      })
    })
  }

  displayMoreSushi = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 4
    })
  }

  eatSushi = obj => {
    if (obj.price < this.state.budget) {
      const sushis = [...this.state.sushis].map(sushi => {
        sushi.id === obj.id ? sushi.isEaten = true : null;
        return sushi
      })
      const eatenSushi = [...this.state.eatenSushi, obj]
      const budget = this.state.budget - obj.price
      
      this.setState({sushis, eatenSushi, budget})
    } else {
      alert("You're broke! Go home!")
    }
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} currentIndex={this.state.currentIndex} displayMoreSushi={this.displayMoreSushi} eatSushi={this.eatSushi}/>
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;