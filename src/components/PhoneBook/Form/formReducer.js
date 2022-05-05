export const initialState = {
  name: "",
  phone: "",
};

export const initialTypes = {
  name: "name",
  phone: "phone",
  reset: "reset",
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case initialTypes.name:
      return { ...state, name: payload };
    case initialTypes.phone:
      return { ...state, phone: payload };
    case initialTypes.reset:
      return initialState;

    default:
      break;
  }
}
