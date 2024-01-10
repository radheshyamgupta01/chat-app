import UserList from "./UserList";
import Chat from "../Chat";
import { useState } from "react";
import "./ChatApp.css";
const Sidebar = () => {
  const [userList, setUserList] = useState([
    {
      id: 1,
      avatar:
        "data:image/png;base64,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", // Replace with actual avatar URLs
      name: "John Doe",
      lastMessage: "Hello, are you there?",
    },
    {
      id: 2,
      avatar:
        "data:image/png;base64,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",
      name: "Jane Smith",
      lastMessage: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      avatar:
        "data:image/png;base64,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", // Replace with actual avatar URLs
      name: "John Doe",
      lastMessage: "Hello, are you there?",
    },
    {
      id: 4,
      avatar:
        "data:image/png;base64,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"
     , name: "Jane Smith",
      lastMessage: "Lorem ipsum dolor sit amet.",
    },
  ]);

  const navsFooter = [
    {
      href: "/",
      name: "Help",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      ),
    },
    {
      href: "/",
      name: "Settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      href: "/",
      name: "Logout",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="container">
        <div className=" container left fixed top-5 ">
          <nav className="fixed top-0  flex left-0 w-1/3 h-full border border-r space-y-8 sm:w-80 "  style={{backgroundColor: "#4f46E5"}}>
            <div
              class="flex flex-col h-full  w-full "
             
            >
              <div className="flex-1 flex flex-col h-full overflow-auto w-full">
                <ul className="px-4 text-sm font-medium flex-2 w-full  mt-20 ">
                  {userList.map((item, id) => (
                    <li key={id}>
                      <a
                        href="/"
                        className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150"
                      >
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="text-gray-500"
                        />
                        <div>
                          <span className="block font-bold">{item.name}</span>
                          <span className="block text-gray-400">
                            {item.lastMessage}
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>

                <div>
                  <ul className="px-4 pb-4 text-sm font-medium">
                    {navsFooter.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                        >
                          <div className="text-gray-500">{item.icon}</div>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="py-4 px-4 border-t">
                    <div className="flex items-center gap-x-4">
                      <img src="/" className="w-12 h-12 rounded-full" />
                      <div>
                        <span className="block text-gray-700 text-sm font-semibold">
                          Alivika tony
                        </span>
                        <a
                          href="/"
                          className="block mt-px text-gray-600 hover:text-indigo-600 text-xs"
                        >
                          View profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <UserList></UserList>
          </nav>
        </div>
        <div className=" container right ">
          <Chat></Chat>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
