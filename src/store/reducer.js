
const initialState = {
  counter : 123,
  firstName : 'john',
  lastName : 'Doe',
  tasks : []
}

const reducer = (state = initialState,action) => {

  if(action.type == "INC_COUNTER") {
    return {
      ...this.state,
      counter : state.counter + 1
    }
  }

  return state
}

export default reducer
