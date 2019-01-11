import * as Immutable from 'immutable';

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    let newState = state;

    if (!action) { 
      return state; 
    }

    if (!Immutable.Map.isMap(state) && !Immutable.List.isList(state)){
      newState = Immutable.fromJS(state);
    }

    if (!handlers[action.type]) {
      return newState;
    }

    newState = handlers[action.type](newState, action.payload);

    if (!Immutable.Map.isMap(newState) && !Immutable.List.isList(newState)){
      throw new TypeError('Reducers must return Immutable objects.');
    }

    return newState;
  }
};

export default createReducer;