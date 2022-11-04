import React, { useState } from 'react'
import { ContactModel } from '../../models/contact.class'
import Contact from '../pure/contact'

const ContactList = () => {
    const contact = new ContactModel('John', 'Doe', 'john.test@mail.com', true);  
    const [contactState, setOnline] = useState({contact: contact});
    const changeChildStatus = () => {
        setOnline((prevStateObj) => {
            contact.online = prevStateObj.contact.online ? false : true;
            return {contact: contact};
        });
    }

    return (
        <div>
            <h1>Contact List</h1>
            <button onClick={changeChildStatus}>Cambiar estado aqui!</button>
            <Contact contact={contactState.contact}></Contact>
        </div>
    )
}

export default ContactList
