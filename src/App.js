
import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import {Switch, Route } from 'react-router-dom';

import ElementPage from './periodictable/elementPage'
import Navbar from './navbar/Navbar'
import Home from './homepage/homeSection';

import { fetchElements } from './actions/loadElements';
import { fetchComments } from './actions/loadComments';

import './App.css';



class App extends Component {

  componentDidMount() {
    console.log('componentDidMount')
    this.props.fetchElements()
    this.props.fetchComments()
  }   

  render() {
    console.log('Render App.js')
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
 console.log('mapDispatchToProps')
  return {
    fetchElements: () => dispatch(fetchElements()),
    fetchComments: () => dispatch(fetchComments())
  }
}

export default connect(null, mapDispatchToProps)(App);



