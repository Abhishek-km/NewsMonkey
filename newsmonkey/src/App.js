import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  state = {
    progress: 0,
  }

  apiKey = process.env.REACT_APP_NEWS_API

  setProgress = (progress) => { 
    this.setState({ progress: progress });
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
            color="Red"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} key="general" pageSize={10} category="general" apiKey = {this.apiKey} />}
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} key="business" pageSize={10} category="business" apiKey = {this.apiKey}/>
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={10}
                  category="entertainment"
                  apiKey = {this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={<News setProgress={this.setProgress} key="general" pageSize={10} category="general" apiKey = {this.apiKey}/>}
            />
            <Route
              exact
              path="/health"
              element={<News setProgress={this.setProgress} key="health" pageSize={10} category="health" apiKey = {this.apiKey}/>}
            />
            <Route
              exact
              path="/science"
              element={<News setProgress={this.setProgress} key="science" pageSize={10} category="science" apiKey = {this.apiKey}/>}
            />
            <Route
              exact
              path="/sports"
              element={<News setProgress={this.setProgress} key="sports" pageSize={10} category="sports" apiKey = {this.apiKey}/>}
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} key="technology" pageSize={10} category="technology" apiKey = {this.apiKey}/>
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
