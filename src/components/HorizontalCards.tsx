import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./common/Button";

interface horizontalCardsProps {
  name: string;
  desc: string;
}

const HorizontalCards: React.FC<horizontalCardsProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="mx-1 w-full p-2 " onClick={() => navigate("/user")}>
      <div className="flex items-center">
        <img
          alt=""
          className="rounded-full w-16 h-12 object-cover"
          src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        />
        <div className="flex flex-col items-start px-4 w-full">
          <p className="font-medium">{props.name}</p>
          <p className="text-sm text-gray-500 mb-1">{props.desc}</p>
          <Button width="w-full" height="py-2" name="Follow" />
        </div>
      </div>
    </div>
  );
};
export default HorizontalCards;
