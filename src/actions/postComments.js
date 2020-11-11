export const postComments = (commentData = {}, elementId ) => {
   
    return(dispatch) => {

        fetch (`http://localhost:3001/comments`, {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
            element_id: elementId,
            name: commentData.name,
            comment: commentData.comment
            })    
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: 'ADD_COMMENT', comments: data}))
        
    }    

}; 
