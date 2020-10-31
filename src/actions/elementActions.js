// get index

export const fetchElements = () => {
    return (dispatch) => {
      dispatch({type: 'LOADING_ELEMENTS'})
      fetch(`http://localhost:3001/elements`)
        .then(res => res.json())
        .then(data => dispatch({type: 'SET_ELEMENTS', elements: data}))
    }
  }
