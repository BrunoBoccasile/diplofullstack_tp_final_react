import React, { useContext } from 'react'
import { Link, useParams } from 'react-router'
import AddNewContact from '../AddNewContact/AddNewContact'
import { ContactContext } from '../../context/ContactContext'
import './ChatList.css'

const ChatList = () => {
    const { contacts } = useContext(ContactContext);
    const { chat_id } = useParams();

    return (
        <div className="chatlist-wrapper">

            {/* lista de contactos */}
            <div className="contacts-scroll">
                {
                    contacts.map(contact => {
                        const isSelected = Number(contact.id) === Number(chat_id);

                        return (

                            <Link to={'/chat/' + contact.id}
                                className={
                                    isSelected
                                        ? "selected-contact-card contact-card"
                                        : "contact-card"
                                }

                                key={contact.id}>

                                <div className="profile-image">
                                    <img src={contact.profile_picture} alt="" />
                                </div>

                                <div className="contact-info">
                                    <h3>{contact.name}</h3>
                                    <span>#{contact.user_id} — {contact.is_connected ? "Online" : "Offline"}</span>
                                </div>

                            </Link>
                        )
                    }
                    )
                }
            </div>

            {/* crear contacto */}
            <div className="new-contact-container">
                <AddNewContact />
            </div>

        </div >
    )
}

export default ChatList
