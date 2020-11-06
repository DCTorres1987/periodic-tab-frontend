function elementsReducer(state = {elements: [], loading: false}, action) {

    switch(action.type) {
    
      case 'LOADING_ELEMENTS':

        return {
          ...state,
          elements: [...state.elements],
          loading: true
        }
      case 'SET_ELEMENT':

        return {
          ...state,
          elements: action.elements,
          loading: false
        }
      default:
        return state;
    }
  }


  export default elementsReducer;