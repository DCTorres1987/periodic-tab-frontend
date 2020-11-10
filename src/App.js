// import content React content from node modules folder
import React, { Component, Fragment } from 'react';
// importing connect, switch, and route to use in App.js
import { connect } from 'react-redux';
import {Switch, Route } from 'react-router-dom';
// importing from various files in subfolder to use in App.js
import ElementPage from './periodictable/elementPage'
import Navbar from './navbar/Navbar'
import Home from './style/homeSection';
// import components handling fetches
import { fetchElements } from './actions/loadElements';
import { fetchComments } from './actions/loadComments';
// import file to set styling throughout application
import './App.css';


// container component that handles how the data for the elements is retrieved and setting up the routes
class App extends Component {
  // ComponentDidMount
  // method will get called just after the render method. You would use this method to set up any long-running processes or asynchronous processes such as fetching and updating data. 
  componentDidMount() {
    this.props.fetchElements()
    this.props.fetchComments()
  }   

  render() {
   
    return (
      <>     
          <div className='App'>          
            <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/elements' component={ElementPage}  />
              </Switch>
          </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
 
  return {
    fetchElements: () => dispatch(fetchElements()),
    fetchComments: () => dispatch(fetchComments())
  }
}

export default connect(null, mapDispatchToProps)(App);



