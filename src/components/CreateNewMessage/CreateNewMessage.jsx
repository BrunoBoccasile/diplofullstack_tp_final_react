import React, { useContext, useRef } from 'react'
import './CreateNewMessage.css'
import { ContactContext } from '../../context/ContactContext';

const CreateNewMessage = () => {
    const { chatDetail, createNewMessage } = useContext(ContactContext);

    const formRef = useRef(null);
    const textareaRef = useRef(null);
    const MAX_CHARS = 300;

    const submitMessage = () => {
        const form = formRef.current;
        if (!form) return;

        const message_value = (form.message.value || "").trim();
        if (!message_value) {
            textareaRef.current && textareaRef.current.focus();
            return;
        }

        createNewMessage(message_value);

        form.reset();
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.focus();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitMessage();
    };

    const handleInput = (e) => {
        if (e.target.value.length > MAX_CHARS) {
            e.target.value = e.target.value.slice(0, MAX_CHARS); 
        }
        autoResize();
    };

    const autoResize = () => {
        const ta = textareaRef.current;
        if (!ta) return;
        ta.style.height = "auto";
        ta.style.height = ta.scrollHeight + "px";
    };

    return (
        <form className='form-new-message' ref={formRef} onSubmit={handleSubmit} style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <div className='message-text-container' style={{ flex: 1 }}>
                <textarea
                    ref={textareaRef}
                    name='message'
                    id='message'
                    placeholder={"Write a message to " + chatDetail.name + "..."}
                    maxLength={MAX_CHARS}
                    onInput={handleInput}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault(); 
                            submitMessage();    
                        }
                    }}
                    rows={1}
                    style={{ width: "100%", boxSizing: "border-box" }}
                />
            </div>

            <div className='submit-container' style={{ marginLeft: 10 }}>
                <button type="submit">&#10148;</button>
            </div>
        </form>
    )
}

export default CreateNewMessage
