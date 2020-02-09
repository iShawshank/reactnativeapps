
export const initialState = {
  currentValue: '0',
  previousValue: null,
  operator: null,
}

const handleNumber = (value, state) => {
  let newValue = null;
  value = value.toString()

  if (state.currentValue === '0') {
    newValue = value;
  } else {
    newValue = `${state.currentValue}${value}`
  }

  return {
    currentValue: newValue
  }
}

const handleOperator = (value, state) => {
  return {
    operator: value,
    previousValue: state.currentValue,
    currentValue: 0,
  }
}

const handleEqual = (state) => {
  const { currentValue, operator, previousValue } = state;
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null,
  }

  if (operator === '/') {
    return {
      currentValue: previous / current,
      ...resetState,
    }
  } else if (operator === '*') {
    return {
      currentValue: previous * current,
      ...resetState,
    }
  } else if (operator === '-') {
    return {
      currentValue: previous - current,
      ...resetState,
    }
  } else if (operator === '+') {
    return {
      currentValue: previous + current,
      ...resetState,
    }
  }
}

const calculator = (state, type, value) => {
  switch (type) {
    case 'number':
      return handleNumber(value, state);
    case 'operator':
      return handleOperator(value, state);
    case 'equal':
      return handleEqual(state);
    case 'clear':
      return initialState;
    case 'posneg':
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`
      }
    case 'percent':
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      }
    default:
      return state;
  }
}

export default calculator;