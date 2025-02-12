import './App.css';
import { useState, useEffect } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState(() => {
    const val = localStorage.getItem('contacts');
    return val
      ? JSON.parse(val)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts(prevContacs => {
      return [...prevContacs, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacs => {
      return prevContacs.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(
    contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase().trim()) ||
      contact.number
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase().trim())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
