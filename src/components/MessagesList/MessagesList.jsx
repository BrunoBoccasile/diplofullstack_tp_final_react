import React, { useContext } from 'react'
import './MessagesList.css'
import { formatDate } from '../../utils/dateFormatter'
import { ContactContext } from '../../context/ContactContext';

const MessagesList = () => {
    const { chatDetail } = useContext(ContactContext);

    function isMine(message) {
        return message.author_id === '14BKDN61';
    }

    const array = [];

    array.map(
        () => {

        }
    )

    return (
        <div>
            {
                chatDetail.messages.length === 0
                    ? <div className='empty-chat-container'>Send a message to start chatting</div>
                    : chatDetail.messages.map(
                        (message) => {
                            return <div key={message.id} className={isMine(message) ? 'my-message message-container' : 'their-message message-container'}>
                                <p className='message-content'>{message.content}</p>
                                <div className='status'>
                                    {
                                        message.status === 'VIEWED'
                                        ? <span>✓✓ </span>
                                        : <span>✓ </span>
                                    }
                                    —
                                    <span> {formatDate(message.created_at)} </span>
                                </div>
                            </div>
                        }
                    )
            }
        </div>
    )
}

export default MessagesList