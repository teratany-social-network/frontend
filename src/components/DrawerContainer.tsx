import React from "react";
import { Drawer } from "@material-tailwind/react";
import { HiOutlineXMark } from "react-icons/hi2";
import Comments from "../views/Comments/Comments";

type DrawerProps = {
  isOpen?: boolean;
  onClose: () => void;
};

export const DrawerContainer: React.FC<DrawerProps> = ({
  isOpen = false,
  onClose,
}) => {
  return isOpen ? (
    <React.Fragment>
      <Drawer
        open={isOpen}
        onClose={onClose}
        className="p-4  rounded-l-2xl rounded-r-2xl !h-[90%] !max-h-[90%]"
        placement="bottom"
      >
        <div className=" flex flex-col items-end justify-between">
          <HiOutlineXMark
            className="h-6 w-6 z-50"
            aria-hidden="true"
            onClick={onClose}
          />
        </div>
        <div className=" flex flex-col items-center justify-center">
          <Comments />
        </div>
      </Drawer>
    </React.Fragment>
  ) : null;
};
