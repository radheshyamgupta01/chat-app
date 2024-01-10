// import React from "react";
// import "./Chat.css";

// function Chat() {
//   return (
//     <div>
//       <section
//         className="w-full bg-purple-600 p-12 pr-20 chat-item "
//         style={{
//           width: "95vw",
//           backgroundColor: "#4f46E5",
//           marginLeft: "350px",
//         }}
//       >
//         <div className="container mx-auto flex items-center justify-center">
//           <div className="w-full lg:w-1/2 pr-8">
//             <ul className="text-white">
//               {/* Left-aligned message */}
//               <li className="flex justify-start mb-4">
//                 <div className="bg-white rounded-lg overflow-hidden shadow-md ">
//                   <div className="p-4 border-b border-gray-200 flex">
//                     <img
//                       src="data:image/jpeg;base64,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"
//                       alt="Avatar"
//                       className="rounded-circle me-3 shadow-1-strong"
//                       width="40"
//                     />
//                     <p className="font-bold mb-0 text-black">John Doe</p>
//                     <p className="text-sm text-gray-500 flex">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         style={{ width: "16px", height: "16px", fill: "green" }}
//                       >
//                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2V7h-2v8z" />
//                       </svg>{" "}
//                       12 mins ago
//                     </p>
//                   </div>
//                   <div className="p-4">
//                     <p className="mb-0 text-black">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                   </div>
//                 </div>
//               </li>
//               <li className="flex justify-start mb-4">
//                 <div className="bg-white rounded-lg overflow-hidden shadow-md ">
//                   <div className="p-4 border-b border-gray-200 flex">
//                     <img
//                       src="data:image/jpeg;base64,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"
//                       alt="Avatar"
//                       className="rounded-circle me-3 shadow-1-strong"
//                       width="40"
//                     />
//                     <p className="font-bold mb-0 text-black">John Doe</p>
//                     <p className="text-sm text-gray-500 flex">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         style={{ width: "16px", height: "16px", fill: "green" }}
//                       >
//                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2V7h-2v8z" />
//                       </svg>{" "}
//                       12 mins ago
//                     </p>
//                   </div>
//                   <div className="p-4">
//                     <p className="mb-0 text-black">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                   </div>
//                 </div>
//               </li>
//               {/* Right-aligned message */}

//               {/* Add more messages here */}

//               {/* Message input */}
//               <div class="relative mb-3" data-te-input-wrapper-init>
//                 <textarea
//                   class="peer  min-h-[auto] w-full rounded border-0 bg-white selection: px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                   id="exampleFormControlTextarea1"
//                   rows="3"
//                   placeholder="Your message"
//                 ></textarea>
//                 <label
//                   for="exampleFormControlTextarea1"
//                   class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//                 >
//                   Example textarea
//                 </label>
//               </div>

//               <button
//                 type="button"
//                 class="inline-block rounded bg-success px-6  mt-4 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//               >
//                 Button
//               </button>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Chat;
// Chat.js
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
