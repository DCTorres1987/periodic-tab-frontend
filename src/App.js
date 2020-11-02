import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ElementPage from './periodictable/elementPage'
import Navbar from './navbar/Navbar'
import {Switch, Route } from 'react-router-dom';
import { fetchElements } from './actions/elementActions'

class App extends Component {

  componentDidMount() {
    console.log('second')
    this.props.fetchElements()
  }   

  render() {

   
    return (
      <>
         
          <div className='App'>          
            <Navbar />
              <Switch>
                <Route exact path='/' render={() => <div>Home</div>} />
                <Route path='/periodictable' component={ElementPage}  />
                
              </Switch>
          </div>

      </>


    )
  }
}

const mapStateToProps = (state) => {

  return {
    elementList: state.elements,
    loading: state.loading
  }

}

const mapDispatchToProps = dispatch => {
  console.log('first')
  return {
    fetchElements: () => dispatch(fetchElements())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



