// ./src/components/MovieShow.js
import React from 'react';
import CommentForm from '../../comment/commentForm';
import Element from '../presentational/element';
import Comments from '../../comment/comments';
import { Button } from '../../navbar/button';

const ElementShow = ({match, elementList, commentList }) => {


  const element = elementList.find(element => element.number === parseInt(match.params.elementId,10));

  console.log(commentList);

    return (
      <div>
            {element ? <Element element={element} /> : 'Loading..'}<br/><br/>
            <h2>What Objects is made up of this Element? Please leave a comment below.</h2><br/>
            {element ? <CommentForm element={element} /> : 'Loading..'} <br/><br/>
            {commentList ? <Comments commentList={commentList} element={element} /> : 'Loading..'}
            <ul>
              <Button to={`/periodictable/`}> Back </Button>
            </ul>    
      </div>  
    )
  

}
 
export default ElementShow;