import { combineReducers } from "redux"
import elementsReducer from './elementsReducer';
import commentsReducer from './commentsReducer';

  const rootReducer = combineReducers({

      elements: elementsReducer,
      comments: commentsReducer
  })
  
  export default rootReducer;




