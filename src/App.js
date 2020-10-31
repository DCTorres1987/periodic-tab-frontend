import React, { Component } from 'react';
import { connect } from 'react-redux';
import ElementList from './elementList'
import { fetchElements } from './actions/elementActions'

class App extends Component {


  componentDidMount() {
    this.props.fetchElements()
  }   

  render() {

    const { elementList, loading } = this.props

    return (
      <div className='App'>
        {!loading ? <ElementList elementList={elementList} /> : 'Loading!'}
      </div>
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
  return {
    fetchElements: () => dispatch(fetchElements())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



