import { createContext, createcontext, useEffect, useState } from "react";
import { getContacts } from "../services/contactService";
import { useParams } from "react-router";
import { generateUid } from "../utils/uidGenerator.js";
import { getRandomMessage } from "../utils/messageGenerator.js";

export const ContactContext = createContext();

function ContactContextProvider({ children }) {
    const [contacts, setContacts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [chatDetail, setChatDetail] = useState(null);
    const [chat_id, setChatId] = useState(null);

    function loadContacts() {
        setLoading(true);
        setTimeout(
            () => {
                const contacts = getContacts();
                setContacts(contacts);
                setLoading(false);
            },
            2000
        )
    }

    function addNewContact(name) {
        const new_contact = {
            id: contacts.length + 1,
            user_id: generateUid(),
            name: name,
            profile_picture: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
            last_connection: 'ahora',
            is_connected: true,
            messages: []
        }
        setContacts(
            (prev_state) => {
                return [...prev_state, new_contact]
            }
        )

        console.log(contacts)
    }

    function createNewMessage(message) {
        const new_message = {
            id: chatDetail.messages.length + 1,
            content: message,
            author_id: '14BKDN61',// mi id
            author_name: 'Bruno', // mi nombre
            created_at: new Date(),
            status: 'VIEWED'
        }

        setContacts(
            (prev_state) => {
                return prev_state.map(
                    (chat) => {
                        if (Number(chat.id) === Number(chat_id)) {
                            chat.messages = [...chat.messages, new_message]
                        }
                        return chat;
                    }
                )
            }
        )

        setTimeout(
            sendAutomaticMessage,
            2000
        )
    }

    function sendAutomaticMessage() {
        const new_message = {
            id: chatDetail.messages.length + 1,
            content: getRandomMessage(),
            author_id: chatDetail.user_id,
            author_name: chatDetail.name,
            created_at: new Date(),
            status: 'VIEWED'
        }

        setContacts(
            (prev_state) => {
                return prev_state.map(
                    (chat) => {
                        if (Number(chat.id) === Number(chat_id)) {
                            chat.messages = [...chat.messages, new_message]
                        }
                        return chat;
                    }
                )
            }
        )
    }

    function loadChatDetail() {
        console.log({
            contacts,
            loading,
            chat_id
        })
        if (contacts && !loading && chat_id) {
            const chat_selected = contacts.find(contact => Number(contact.id) === Number(chat_id))
            setChatDetail(chat_selected)
        }
    }

    //queremos que se cargue loadContacts solamente una vez
    useEffect(
        loadContacts,
        []
    )

    //cada vez q cambie la ruta, revisar el chat seleccionado
    useEffect(
        loadChatDetail,
        [chat_id, contacts]
    )


    return <ContactContext.Provider
        value={
            {
                contacts,
                loading,
                error,
                chatDetail,
                chat_id,
                addNewContact,
                createNewMessage,
                setChatId
            }
        }>
        {children}
    </ContactContext.Provider>
}

export default ContactContextProvider;