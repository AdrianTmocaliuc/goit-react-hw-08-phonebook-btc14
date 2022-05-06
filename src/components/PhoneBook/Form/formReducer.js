export const initialState = {
  name: "",
  number: "",
};

export const initialTypes = {
  name: "name",
  number: "number",
  reset: "reset",
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case initialTypes.name:
      return { ...state, name: payload };
    case initialTypes.number:
      return { ...state, number: payload };
    case initialTypes.reset:
      return initialState;

    default:
      break;
  }
}
