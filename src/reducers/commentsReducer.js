  
  function commentsReducer( state = {comments: [], loading:false}, action) {

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