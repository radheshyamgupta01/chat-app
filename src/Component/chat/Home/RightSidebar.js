import React, { useState, useContext, useEffect } from "react";
import Context from "./Contex/Contex";
function RightSidebar() {
  const { msgHandler, msgData } = useContext(Context);
  const [user_id, setUserId] = useState("");
  const [message, setMessage] = useState([]);

  const sendMessage = () => {
    fetch("http://localhost:30001/send_message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user_id,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);

        msgHandler(data);

        console.log("Success:", data);

        // Optionally, update the UI or reset input fields after a successful send
        setUserId("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    const msgHandlerData = () => {
      fetch("http://localhost:30001/getAllmessage", {
        method: "get",
      })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            // Ensure data is an array
            const filteredData = data.filter((item) => item && item.message);
            msgHandler(filteredData);
            console.log(filteredData, "this is getting all messages");
          } else {
            console.error("Invalid data format:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    };
  }, []);

  return (
    <div className="flex  fixed bottom-0 w-4/6 bg-yellow-500 text-black ">
      <textarea
        className="flex-grow m-4 text-black "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="button"
        onClick={sendMessage}
        className="m-4 rounded mr-4 bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        sendMessage
      </button>
    </div>
  );
}

export default RightSidebar;
