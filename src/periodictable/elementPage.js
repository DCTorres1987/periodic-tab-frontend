import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ElementList from './index/elementList';
import ElementShow from './show/elementShow';

const ElementPage = ({ match, elementList, commentList }) => {
 
    return (

        <div>         
            <Route exact path={match.url} 
                   render={() => <ElementList elementList={elementList} />}/>
            <Route path={`${match.path}/:elementId`} 
                   render={(routerProps) => <ElementShow {...routerProps} elementList={elementList} commentList={commentList} />} />
        </div>
    )    
}

const mapStateToProps = (state) => {

    return {
      elementList: state.elements.elements,
      commentList: state.comments.comments,
      loading: state.loading
    }
  
  }


export default connect(mapStateToProps)(ElementPage);