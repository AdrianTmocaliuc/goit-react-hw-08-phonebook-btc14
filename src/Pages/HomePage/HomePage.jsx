import { useSelector } from "react-redux";

const HomePage = () => {
  // const state = useSelector((state) => state);
  const { user } = useSelector((state) => state.authorization);

  return (
    <>
      <h1>Hello {user.name} !</h1>
      <p>
        Press <b>Contacts</b> to open your PhoneBook
      </p>
    </>
  );
};

export default HomePage;
