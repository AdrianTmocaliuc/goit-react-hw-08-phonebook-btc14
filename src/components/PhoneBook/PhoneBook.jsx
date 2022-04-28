import { Section } from "components/Section/Section";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
// import { useSelector } from "react-redux";

function PhoneBook() {
  // const contacts = useSelector((state) => state.contacts);

  // useEffect(() => {
  //   localStorage.setItem("Contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section>
        <Filter />
      </Section>
      <Section title="Contacts">
        <Contacts />
      </Section>
    </div>
  );
}

export default PhoneBook;
