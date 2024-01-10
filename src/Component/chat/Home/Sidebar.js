
import React, { useContext, useEffect } from "react";
import RightSidebar from "./RightSidebar";
import Context from "./Contex/Contex";

function Sidebar() {
  const { msgData ,msgHandler} = useContext(Context);
 useEffect(() => {
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
}, []);


  
  return (
    <div style={{ width: "76vw" }}>
    <div className="p-4 border-b border-gray-300">
      {msgData.map((msg, index) => (
        <div key={index} className="flex items-center mb-4">
          <img
            src={msg.userImage}
            alt="User"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="flex flex-col">
            <span className="text-gray-600">{msg.userName}</span>
            <p className="text-black block">{msg.newMessage.message}</p>
          </div>
        </div>
      ))}
    </div>
  
    <RightSidebar />
  </div>
  
  );
}

export default Sidebar;
