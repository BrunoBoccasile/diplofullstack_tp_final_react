import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ChatList from '../components/ChatList/ChatList';
import ChatDetail from '../components/ChatDetail/ChatDetail';
import { ContactContext } from '../context/ContactContext';
import './ChatScreen.css';

const ChatScreen = () => {
    const { chat_id } = useParams()
    const { loading, chatDetail, setChatId, createNewMessage, contacts } = useContext(ContactContext);

    const [showMenu, setShowMenu] = useState(false);

    // swipe tracking
    const [touchStartX, setTouchStartX] = useState(null);

    useEffect(() => {
        setChatId(chat_id)
    }, [chat_id]);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // arranca el toque
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    // swipe
    const handleTouchMove = (e) => {
        if (!touchStartX) return;

        const currentX = e.touches[0].clientX;
        const diff = currentX - touchStartX;

        // swipe hacia la derecha 
        if (diff > 80) {
            setShowMenu(true);
            setTouchStartX(null);
        }

        // swipe hacia la izq
        if (diff < -80) {
            setShowMenu(false);
            setTouchStartX(null);
        }
    };

    // click fuera del menu
    const closeMenuOnBackdrop = () => {
        if (showMenu) setShowMenu(false);
    };

    return (
        <div
            className='page-container'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >

            {/* backdrop mobile */}
            {showMenu && <div className="backdrop" onClick={closeMenuOnBackdrop}></div>}

            {/* panel izquierdo */}
            <div className={`chat-list-container ${showMenu ? "open" : ""}`}>
                {loading ? (
                    <div className='loading-container'>
                        Loading contacts...
                        <div className="spinner"></div>
                    </div>
                ) : (
                    contacts && <ChatList />
                )}
            </div>

            {/* panel derecho */}
            <div className='chat-detail-container'>
                {!loading && (
                    !chat_id
                        ?
                        <div className='no-chat-container'>
                            <h2>No <span className='colored-span'>chat</span> is selected</h2>
                            <span>Select any <span className='colored-span'>contact</span> to start a chat</span>
                            <span className="dots"></span>

                            {isMobile && (
                                <p className="mobile-hint">Swipe to the right to see contacts</p>
                            )}
                        </div>
                        : chatDetail && <ChatDetail />
                )}
            </div>
        </div>
    );
};

export default ChatScreen;
