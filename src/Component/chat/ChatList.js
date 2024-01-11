import React, { useContext, useEffect, useState } from "react";
import Context from "../Contex/Contex";
import AddGroupMember from "../GroupChat/AddGroupMember";
import {useNavigate} from 'react-router-dom'
const ChatList = ({getAllChat}) => {
  const navigate=useNavigate()
  const {RecipientUserHandler,RecipientUser}=useContext(Context)
    const [users, setUsers] = useState([]);
   
  // Dummy array of users
  const dummyUsers = [
    {
      id: 1,
      name: "Flo Steinle",
      message: "Good afternoon! How can I help you?",
    },
  
  ];
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch("http://localhost:4000/user/userList", {
          method: "get",
        });
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const data =  await response.json();
        console.log(data,"this is getting users data")
        setUsers(data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserList();
  }, []);


const recipientUserMessageHandler=(user,name)=>{
    RecipientUserHandler([user,name])
  getAllChat(user,name);
}
const AddGroupMemberHandler=()=>{
navigate("/member")
}
  return (
    <div className="h-full overflow-hidden relative pt-2">
      <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-row items-center p-4 relative"
            
            onClick={()=>recipientUserMessageHandler(user.id,user.name)}
          >
          
            <div className="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
              2 hours ago
            </div>
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
              {user.name.charAt(0)}
            </div>
            <div className="flex flex-col flex-grow ml-3">
              <div className="text-sm font-medium">{user.name}</div>
              <div className="text-xs truncate w-40">{user.message}</div>
            </div>
            <div className="flex-shrink-0 ml-2 self-end mb-1">
              <span className="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
                3
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 right-0 mr-2">
        <button onClick={()=>AddGroupMemberHandler()} className="flex items-center justify-center shadow-sm h-10 w-10 bg-blue-700 text-white rounded-full">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatList;
