import React, { Component } from 'react';

export default class AddBalance extends Component {

    constructor(){
        super()
        this.state = {
            input: ''
        }
    }

    handleChange = ev => {
        const input = ev.target.value
        this.setState({ input })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const amount = this.state.input
        this.props.addBalance(parseInt(amount))
        this.setState({input: ''})
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>Add Balance</label>
                <input type="number" value={this.state.input} onChange={this.handleChange} />
                <input type="submit" />
            </form>
        )
    }
}