import React, { useEffect, useState } from "react";
import YourComponent from "./YourCompoent";

function LeftSidebar() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/user/allusers", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
      
        
        setUserList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div
      style={{ width: "24vw" }}
      className="h-screen bg-green-900 text-warning-50"
    >
      <div className="flex flex-col">
        <YourComponent></YourComponent>

        <form class="flex items-center flex-wrap md:flex-nowrap">
          <label for="voice-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full flex items-center">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input
              type="text"
              id="voice-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search ..."
              required
            />

            <button
              type="submit"
              class="mt-2 md:mt-0 md:ms-2 inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center text-sm font-light">
                <thead class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900"></thead>
                <tbody>
                  {userList.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b dark:border-neutral-500"
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        <img
                          src={user.profileImage}
                          alt={user.name}
                          className="w-10 h-10 rounded-full"
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.email}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 ml-2 truncate">
                            {user.message}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
