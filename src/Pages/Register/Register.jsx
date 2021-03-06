import { RegisterUser } from "redux/authorization/authorizationAsyncThunk";
import GeneralForm from "components/utilities/GeneralForm/GeneralForm";

const Register = () => {
  return (
    <>
      <GeneralForm buttonTitle="Register" />
    </>
  );
};

// const OldRegister = () => {
//   const dispatch = useDispatch();

//   const [state, dispatchState] = useReducer(reducer, initialState);

//   const { name, email, password } = state;

//   const [registerLoader, setRegisterLoader] = useState(false);

//   const onChangeInput = ({ target }) => {
//     const { name, value } = target;
//     dispatchState({ type: name, payload: value });
//   };

//   const onSubmitForm = (e) => {
//     e.preventDefault();
//     // console.log("state", state);

//     dispatch(RegisterUser(state));

//     dispatchState({ type: "reset" });
//   };

//   return (
//     <>
//       <form className={s.form} onSubmit={onSubmitForm}>
//         <label>
//           <h3>Name</h3>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={onChangeInput}
//           />
//         </label>
//         <label>
//           <h3>Email</h3>
//           <input
//             type="tel"
//             name="email"
//             value={email}
//             title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={onChangeInput}
//           />
//         </label>
//         <label>
//           <h3>Password</h3>
//           <input
//             type="tel"
//             name="password"
//             value={password}
//             title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={onChangeInput}
//           />
//         </label>
//         {registerLoader ? (
//           <TailSpin height="27" width="27" color="red" ariaLabel="loading" />
//         ) : (
//           <Button title="Register" />
//         )}
//       </form>
//     </>
//   );
// };

export default Register;
