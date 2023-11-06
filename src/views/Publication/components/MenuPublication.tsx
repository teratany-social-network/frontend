import React from "react";

import { RxDotsHorizontal } from "react-icons/rx";
import DrawerSettings from "../../../components/DrawerSettings";

interface MenuProps {
  id: string;
}

export const MenuPublication: React.FC<MenuProps> = ({ id }) => {
  const [openBottom, setOpenBottom] = React.useState<boolean>(false);

  const openDrawerBottom = () => {
    setOpenBottom(true);
  };

  const closeDrawerBottom = () => {
    setOpenBottom(false);
  };

  return (
    <>
      <RxDotsHorizontal onClick={openDrawerBottom} size={23} />
      <DrawerSettings
        id={id}
        openBottom={openBottom}
        closeBottom={closeDrawerBottom}
      />
    </>
  );
};
