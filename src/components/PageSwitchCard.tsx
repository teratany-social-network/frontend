import React from "react";
import Button from "./common/Button";

interface PageCardsProps {
  name: string;
  desc: string;
}
const PageSwitchCard: React.FC<PageCardsProps> = ({ name, desc }) => {
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const isEditUser = lastSegment === "edit-user";
  return (
    <div className="mx-1 py-2 mb-2">
      <div className="flex w-full items-center">
        <div className="w-20">
          <img
            alt="page"
            className=" !w-10 !h-10 rounded-full shadow-lg"
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          />
        </div>
        <div className="flex flex-col items-start px-3 w-full flex-5">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500 mb-1">{desc}</p>
        </div>
        {!isEditUser && (
          <div className="flex-3">
            <Button width="w-[85%]" height="py-1" name="Switch" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageSwitchCard;
