import { filterContacts } from "./filter-types";
import { createAction } from "@reduxjs/toolkit";

//---------------------- CLEAR REDUX----------------------------------
// export function actionFilterContacts(inputText) {
//   return { type: filterContacts, payload: inputText };
// }
//---------------------- CLEAR REDUX----------------------------------

export const actionFilterContacts = createAction(filterContacts);
