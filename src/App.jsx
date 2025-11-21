import React from 'react'
import { Route, Routes } from 'react-router'
import ChatScreen from './screens/ChatScreen'


const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<ChatScreen />} />
        <Route path='/chat' element={<ChatScreen />} />
        <Route path='/chat/:chat_id' element={<ChatScreen />} />
      </Routes>
    </div>
  )
}

export default App