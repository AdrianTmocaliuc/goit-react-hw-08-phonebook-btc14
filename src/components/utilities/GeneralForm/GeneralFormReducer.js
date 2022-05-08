export const initialState = {
  name: "",
  email: "",
  password: "",
};

export const initialTypes = {
  name: "name",
  email: "email",
  password: "password",
  reset: "reset",
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case initialTypes.name:
      return { ...state, name: payload };
    case initialTypes.email:
      return { ...state, email: payload };
    case initialTypes.password:
      return { ...state, password: payload };
    case initialTypes.reset:
      return initialState;

    default:
      break;
  }
}
