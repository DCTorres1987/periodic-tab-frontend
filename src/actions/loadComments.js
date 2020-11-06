export const fetchComments = () => {

    return (dispatch) => {
      dispatch({type: 'LOADING_COMMENTS'})
      fetch(`http://localhost:3001/comments`)
        .then(res => res.json())
        .then(data => dispatch({type: 'SET_COMMENTS', comments: data}))
    }
  }