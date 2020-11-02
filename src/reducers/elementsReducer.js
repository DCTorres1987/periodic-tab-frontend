const elementsReducer  = (state = { elements: [], loading: false }, action) => {

    switch(action.type) {
      case 'LOADING_ELEMENTS':
        console.log('fourth')

        return {
          ...state,
          elements: [...state.elements],
          loading: true
        }
      case 'SET_ELEMENT':
        console.log('fifth')
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