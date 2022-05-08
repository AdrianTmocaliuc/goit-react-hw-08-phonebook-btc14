export const initialState = {
  buttonId: "",
  modalShow: false,
};

export const initialTypes = {
  buttonId: "buttonId",
  modalShow: "modalShow",
  reset: "reset",
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case initialTypes.buttonId:
      return { ...state, buttonId: payload };
    case initialTypes.modalShow:
      return { ...state, modalShow: true };
    case initialTypes.reset:
      return initialState;

    default:
      break;
  }
}
