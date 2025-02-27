import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import Spinner from './Components/Spinner'

export default class App extends Component {
  render() {
    return (
      <>
      <NavBar />
      <News  pageSize={10}/>
      </>
    )
  }
}
