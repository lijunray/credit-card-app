import React, { Component } from 'react'
import axios from 'axios';

export default class CreditCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       res: ''
    }
  }
  
  componentDidMount() {
    axios.get("/users").then(res => console.log(res));
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
