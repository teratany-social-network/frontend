import React from "react";
import Button from "./common/Button";
import useLoadingButton from "../hooks/useLoadingButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { setAuthentication } from "../store/reducer/user.reducer";
import useToken from "../hooks/useToken";
import { FileServerURL } from "../api/FileApi";

interface PageCardsProps {
  name: string;
  desc: string;
  id?: string;
  image?: string;
}
const PageSwitchCard: React.FC<PageCardsProps> = ({
  name,
  desc,
  id,
  image,
}) => {
  const [isLoading, startLoading] = useLoadingButton();
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const isEditUser = lastSegment === "edit-user";

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const token = useToken();

  const switchAccount = () => {
    startLoading();
    setTimeout(() => {
      navigate(`/profile/${id}`);
      dispatch(
        setAuthentication({
          id: id,
          name: name,
          token,
          isAuthenticated: true,
        })
      );
      window.location.reload();
    }, 2000);
  };
  return (
    <div className="mx-1 py-2 mb-2">
      <div className="flex w-full items-center">
        <div className="w-20">
          <img
            alt="page"
            className=" !w-10 !h-10 rounded-full shadow-lg"
            src={
              image
                ? FileServerURL + image
                : "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            }
          />
        </div>
        <div className="flex flex-col items-start px-3 w-full flex-5">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500 mb-1">{desc}</p>
        </div>
        {!isEditUser && (
          <div className="flex-3">
            <Button
              width="!w-[85%]"
              name="Switch"
              onClick={switchAccount}
              isLoading={isLoading}
              showLoadingText={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageSwitchCard;
