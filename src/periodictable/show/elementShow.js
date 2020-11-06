// ./src/components/MovieShow.js
import React from 'react';
import CommentForm from '../../comment/commentForm';
import Element from '../presentational/element';
import { Link } from 'react-router-dom';
import Comments from '../../comment/comments';

const ElementShow = ({match, elementList, commentList }) => {


  const element = elementList.find(element => element.number === parseInt(match.params.elementId,10));

  console.log(commentList);

    return (
      <div>
            {element ? <Element element={element} /> : 'Loading..'}<br/><br/>
            <p>What Objects is made up of this Element? Please leave a comment below.</p><br/>
            {element ? <CommentForm element={element} /> : 'Loading..'} <br/><br/>
            {commentList ? <Comments commentList={commentList} element={element} /> : 'Loading..'}
            <ul>
              <Link to={`/periodictable/`}> Back </Link>
            </ul>    
      </div>  
    )
  

}
 
export default ElementShow;