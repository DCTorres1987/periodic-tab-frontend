import React from 'react';
// import CommentUpVote from './commentUpVote';

const CommentsLoad = ({comments}) => {

    return (
        <div className='comments'>
            
            <p><u> COMMENTS </u></p><br></br>
               
                    {comments.map((comment) => 
                        <div key={comment.id}>
                            Name: {comment.name} <br/>
                            Comment: {comment.comment} <br/><br/>
                            {/* <CommentUpVote/> */}
                        </div>                       
                        
                    )}

        </div>
    )

}

export default CommentsLoad;