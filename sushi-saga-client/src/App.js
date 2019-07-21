import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {

    constructor() {
        super()
        this.state = {
            sushis: [],
            currentIndex: 0,
            eatenSushi: [],
            balance: 100
        }
    }

    moreSushi = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 4
        })
    }

    addIsEaten = (arr) => {
        return arr.map((item) => {
            return {...item, isEaten: false}
        })
    }

    eatSushi = (selectedSushi) => {
        if(this.state.balance >= selectedSushi.price){
            const newSushiArray = this.state.sushis.map((sushi) => {
                return selectedSushi.is === sushi.id ? {...sushi, isEaten: true} : sushi
            })
            this.setState({
                sushis: newSushiArray,
                eatenSushi: [...this.state.eatenSushi, selectedSushi],
                balance: this.state.balance - selectedSushi.price
            })
        }else{
            alert("no sushi for you")
        }
    }

    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(json => this.addIsEaten(json))
        .then(sushis => {
            this.setState({
                sushis: sushis
            })
        })
    }

    render() {
        return (
          <div className="app">
            <SushiContainer sushis={this.state.sushis} currentIndex={this.state.currentIndex} moreSushi={this.moreSushi} eatSushi={this.eatSushi}/>
            <Table eatenSushi={this.state.eatenSushi} balance={this.state.balance}/>
          </div>
        );
    }
}

export default App;
