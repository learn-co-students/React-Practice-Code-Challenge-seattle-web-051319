import React, { Component, Fragment } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushi: [],
      displayedSushi: [],
      plates: [],
      moneyRemaining: 100,
      isLoading: true
    }
  }

  getSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(json => {
      this.setState({sushi: json, isLoading: false, displayedSushi: json})
    })

  }

  componentDidMount() {
    this.getSushi()
  }

  eatSushi = oneSushi => {
      const sushi = [...this.state.sushi].filter(singleSushi => singleSushi !== oneSushi)
      const moneyRemaining = this.state.moneyRemaining - oneSushi.price
      const plates = [...this.state.plates]
      plates.push(oneSushi.name)
      this.setState({ sushi, moneyRemaining, plates })
  }

  getMoreSushi = () => {
    const displayedSushi = [...this.state.displayedSushi].slice(3, -1)
    console.log(this.state.displayedSushi)
    console.log(displayedSushi)
    this.setState({displayedSushi})
  }

  whileLoading = () => {
    if (this.state.isLoading === true) {
      return <p>Loading...</p>
    }
    else {
      return (
        <Fragment>
        <SushiContainer sushi={this.state.displayedSushi.slice(0, 4)} eatSushi={this.eatSushi} getMoreSushi={this.getMoreSushi} moneyRemaining={this.state.moneyRemaining}/>
        <Table totalCash={this.state.moneyRemaining} plates={this.state.plates} />
        </Fragment>
      )
    }
  }

  render() {
    return (
      <div className="app">
        {this.whileLoading()}
      </div>
    );
  }
}

export default App;