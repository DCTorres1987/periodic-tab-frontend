import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ElementList from './elementList';
import ElementShow from './elementShow';

const ElementPage = ({ match, elementList }) => {

    return (

        <div>         
            <Route exact path={match.url} render={(routerProps) => <ElementList {...routerProps} elementList={elementList} />}/>
            <Route path={`${match.path}/:elementId`} render={routerProps => <ElementShow {...routerProps} elementList={elementList} />} />
        </div>
    )    
}

const mapStateToProps = (state) => {

    return {
      elementList: state.elements,
      loading: state.loading
    }
  
  }


export default connect(mapStateToProps)(ElementPage);