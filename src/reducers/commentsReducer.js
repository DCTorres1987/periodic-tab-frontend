  // setting the initial state
  function commentsReducer( state = {comments: [], loading:false}, action) {
// passing in the action type from dispatch
    switch(action.type) {
        case 'LOADING_COMMENTS':

            return {
              ...state,
              comments: [...state.comments],
              loading: true
            }
        case 'SET_COMMENTS':
  
          return {
            ...state,
            comments: action.comments,
            loading: false
          }
        case 'ADD_COMMENT':
    // adds comments at the end of state
          return {
            ...state,
            comments: [...state.comments, action.comments],
            loading: false
          }
        default:
          return state;
    }
  }

  export default commentsReducer;