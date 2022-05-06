import { Section } from "components/utilities/Section/Section";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";

function PhoneBook() {
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
