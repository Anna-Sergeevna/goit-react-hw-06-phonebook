// import { useState, useEffect } from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import './App.css';

function App() {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   setContacts(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   contacts.map(contact => contact.name).includes(name)
  //     ? alert(`${name} is already in contacts.`)
  //     : setContacts(prevState => [contact, ...prevState]);
  // };

  return (
    <Container title=''>
      <Section title='Phonebook'>
        <ContactForm />
      </Section>
      <Section title='Contacts'>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}

export default App;
