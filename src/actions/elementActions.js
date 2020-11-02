export const fetchElements = () => {
  console.log('third')
    return (dispatch) => {
      dispatch({type: 'LOADING_ELEMENTS'})
      fetch(`http://localhost:3001/elements`)
        .then(res => res.json())
        .then(data => dispatch({type: 'SET_ELEMENT', elements: data}))
    }
  }
