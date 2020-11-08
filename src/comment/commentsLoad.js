import React from 'react';


const CommentsLoad = ({comments}) => {

    return (
        <div className='comments'>
            
            <p><u> COMMENTS </u></p><br></br>
                <scroll-container>
                    {comments.map((comment) => 
                        <div key={comment.id}>
                            Name: {comment.name} <br/>
                            Comment: {comment.comment} <br/><br/>
                        </div>
                        
                    )}
                </scroll-container>

        </div>
    )

}

export default CommentsLoad;