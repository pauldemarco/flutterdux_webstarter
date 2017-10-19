export const single = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state
  }
}

export const double = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 2;
    default:
      return state
  }
}

export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state
  }
}