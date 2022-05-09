export const initialState = {
  id: "",
  name: "",
  number: "",
};

export const initialTypes = {
  id: "id",
  name: "name",
  number: "number",
  reset: "reset",
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case initialTypes.id:
      return { ...state, id: payload };
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
