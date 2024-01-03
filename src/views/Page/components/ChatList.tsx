import React from "react";
import { useNavigate } from "react-router-dom";
import profileDefault from "../../../assets/userPics.jpg";

interface PageListCardsProps {
  name: string;
  message: string;
  newMessage?: number;
}
const ChatList: React.FC<PageListCardsProps> = ({
  name,
  message,
  newMessage,
}) => {
  const navigate = useNavigate();
  const handleOpenChat = () => {
    navigate("/chat/one");
  };
  return (
    <div
      className={`mx-1 w-full p-2 mb-4 ${newMessage ? "bg-gray-100" : ""}`}
      onClick={() => handleOpenChat()}
    >
      <div className="flex items-center">
        <div className="w-16">
          <img
            alt="page"
            className=" !w-10 !h-10 rounded-full shadow-lg flex-2"
            src={profileDefault}
          />
        </div>
        <div className="flex flex-col items-start px-4 w-full flex-5 ">
          <p className="font-medium">{name}</p>
          <p className={`text-sm text-gray-500 mb-1 `}>{message}</p>
        </div>
        <div className="mr-4 flex-3">
          {newMessage ? (
            <p className="font-bold text-sm bg-red-600 rounded-full w-5 h-5 text-white">
              {newMessage}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
