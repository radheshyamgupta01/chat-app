import React, { useState } from "react";
import Contex from "./Contex";

function CtxProvider({ children }) {
  const [msgData, setMsgData] = useState([]);
  const [user_idData, setUserIdData] = useState();
  const [RecipientUser, setRecipientUser] = useState([]);
  const RecipientUserHandler = (data) => {
    setRecipientUser(data);
  };
  const msgHandler = (data) => {
    setMsgData((prev) => [...prev, data]);
  };
  const userHandler = (data) => {
    setUserIdData(data);
  };
  return (
    <Contex.Provider
      value={{
        msgData,
        msgHandler,
        userHandler,
        user_idData,
        RecipientUserHandler,
        RecipientUser,
      }}
    >
      {children}
    </Contex.Provider>
  );
}

export default CtxProvider;
