import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: ''
        };

        // ES5 method
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleSubmit(e) {
    //     e.preventDefault()
    //     console.log("clicked")
    // }

    // ES5 method
    // handleChange(e) {
    //     console.log(this.state.value);
    //     this.setState({ value: e.target.value});
    // }

    handleChange = (e) => {
        // console.log(this.state.value);
        this.setState({ 
            name: e.target.value
        });
    }

    handleGenderChange = e => {
        this.setState({
            gender: e.target.value
        })
    }

    handleSubmit = (e) => {
        // console.log(this.state.value)
        e.preventDefault()
        // const nameId = (this.state.value);
        console.log(`${this.state.name}, ${this.state.gender}`)
    }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    <p>First Name</p>
                    <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
                </label>
            </div>
            <div>
                <label>Gender</label>
                <select value={this.state.gender} onChange={this.handleGenderChange}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>

        <p>{this.state.name}</p>
        <p>{this.state.gender}</p>
      </>
    )
  }
}
