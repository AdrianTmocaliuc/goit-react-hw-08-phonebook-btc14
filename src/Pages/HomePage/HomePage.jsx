import { useSelector } from "react-redux";

const HomePage = () => {
  // const state = useSelector((state) => state);
  // console.log("state", state);
  const { user, isAuth } = useSelector((state) => state.authorization);

  return (
    <>
      <h1>Hello {user.name} !</h1>
      {isAuth ? (
        <p>
          Press <b>Contacts</b> to open your PhoneBook
        </p>
      ) : (
        <>
          <p>
            Press <b>Register</b> to create account,{" "}
          </p>
          <p>
            or <b>Login</b> to enter an exist account.
          </p>
        </>
      )}
    </>
  );
};

export default HomePage;
