import React, { useContext } from 'react'
import { ContactContext } from '../../context/ContactContext';
import './AddNewContact.css'

const AddNewContact = () => {
    const {addNewContact} = useContext(ContactContext);
    
    const handleSubmitNewContactForm = (event) => {
        event.preventDefault();
        const formulario = event.target;
        const name_value = formulario.name.value.trim();

        if (name_value.length === 0) {
            return;
        }

        addNewContact(name_value);
        formulario.reset();
    }

    return (
        <form className='form-new-contact' onSubmit={handleSubmitNewContactForm}>
            <div>
                <input className='input-new-contact' name='name' id='name' placeholder='Name of the new contact' />
            </div>
            <button type="submit">Add contact</button>
        </form>
    )
}

export default AddNewContact;