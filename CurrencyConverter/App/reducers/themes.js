import {
  CHANGE_PRIMARY_COLOR
} from '../actions/themes'
import { CHANGE_BASE_CURRENCY } from '../actions/currencies';

const initialState = {
  primaryColor: '#4F6D7A',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color
      }
    default:
      return state;
  }
}

export default reducer