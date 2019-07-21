import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import Wallet from "./containers/Wallet";

const API = "http://localhost:3000/sushis"

class App extends Component {

	constructor() {
		super();
		this.state = {
			allSushis: [],
			sushisIndex: 0,
			plates: [],
			balance: 100
		};
	}

	addIsEaten = (sushis) => {
		return (
			sushis.map(sushi => {
				return (
					{...sushi, isEaten: false}
				)
			})
		);
	}

	updateIndex = () => {
		this.setState({
			sushisIndex: this.state.sushisIndex + 4
		});
	}
	
	eatSushi = sushi => {
		if (this.state.balance >= sushi.price) {
			const updatedSushis =  this.state.allSushis.map(eachSushi => {
				if (eachSushi.id === sushi.id) {
					return {...eachSushi, isEaten: true};
				}	else {
					return eachSushi;
				}
			});
			const updatedPlates = [...this.state.plates];
			
			updatedPlates.push(sushi);
			
			this.setState({
				allSushis: updatedSushis,
				plates: updatedPlates,
				balance: this.state.balance - sushi.price
			});
		}
	}
	
	addMoney = event => {
		event.preventDefault();
		
		const balanceIncrease = parseInt(event.target.balanceIncrease.value, 10);
		this.setState({
			balance: this.state.balance + balanceIncrease
		});
		
		event.target.reset();
	}

	componentDidMount() {
		fetch(API)
			.then(response => response.json())
			.then(json => {
				const updatedSushis = this.addIsEaten(json);
				this.setState({
					allSushis: updatedSushis
				})
			});
	}

	render() {
		return (
			<div>
				<div className="app">
					<SushiContainer
						allSushis={this.state.allSushis}
						sushisIndex={this.state.sushisIndex}
						updateIndex={this.updateIndex}
						eatSushi={this.eatSushi} />
					<Table
						plates={this.state.plates}
						balance={this.state.balance} />
				</div>
				<Wallet addMoney={this.addMoney}/>
			</div>
		);
	}

}

export default App;