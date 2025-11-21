import CreateNewMessage from "../CreateNewMessage/CreateNewMessage"
import MessagesList from "../MessagesList/MessagesList"
import './ChatDetail.css'
import { formatDate } from '../../utils/dateFormatter.js'
import { useContext } from "react"
import { ContactContext } from "../../context/ContactContext.jsx"
const ChatDetail = () => {

    const { chatDetail } = useContext(ContactContext);


    return (
        <div className="chat-detail-wrapper">

            <div className="profile-container">
                <div className="profile-img-wrapper">
                    <img src={chatDetail.profile_picture}></img>
                </div>
                <span className="name-span">
                    <span>
                        {chatDetail.name}
                    </span>
                    <span className="last-time-span">
                        {chatDetail.is_connected
                            ? " Online"
                            : " Last seen: " + formatDate(chatDetail.last_connection)}
                    </span>
                </span>
                <span className="uid-span">#{chatDetail.user_id}</span>
                <div className="vertical-line">|</div>
                <div className="actions-container">
                    <span>&#128712;</span>
                    <span>&#9990;</span>
                    <span>&#10005;</span>
                </div>

            </div>


            <div className="messages-list-container">
                <MessagesList />
            </div>

            <div className="new-message-container">
                <CreateNewMessage />
            </div>

        </div>
    )
}

export default ChatDetail
