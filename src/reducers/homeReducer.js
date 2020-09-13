import { FETCH_LARGE_DATA } from '../actions/types';

const initialState = {
  dataItems: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_LARGE_DATA:
      return {
        ...state,
        dataItems: action.payload
      }
    // case NEW_POST:
    //   return {
    //     ...state,
    //     item: action.payload
    //   }
    default:
      return state;
  }
}