import React from 'react';
import CommentsLoad from '../comment/commentsLoad';

const Comments = ({element, commentList }) => {


  const comments = commentList.filter((comment) => comment.element_id === element.id);


    return (
        <div>
            {comments ? <CommentsLoad comments={comments} /> : 'Loading..'}
        </div>
    )
}


export default Comments;