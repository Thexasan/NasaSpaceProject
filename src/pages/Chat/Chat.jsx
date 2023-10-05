import React, { useEffect } from 'react'

const Chat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>Chat</div>
  )
}

export default Chat