
import React from 'react';

const Chat = ({ messages, user, onSendMessage }) => {
  return (
    <div className="chat">
      <div className="user-details">
        <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full" />
        <p>{user.name}</p>
      </div>

      <div className="message-list space-y-4">
        {messages.map((message, index) => (
          <div key={index} className="message flex items-center">
            <img src={message.sender.image} alt={message.sender.name} className="w-8 h-8 rounded-full" />
            <div className="message-content ml-2">
              <p>{message.sender.name}</p>
              <p>{message.text}</p>
              <p>{message.sentTime}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="message-input flex mt-4">
        <textarea placeholder="Type your message..." className="flex-1 mr-2 p-2 border border-gray-300 rounded-lg" />
        <button onClick={onSendMessage} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
      </div>
    </div>
  );
};

export default Chat;
