import React from "react";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import PageRepresent from "./PageRepresent";

interface DrawerProps {
  openBottom: any;
  closeBottom: any;
}

const SwitchAccountDrawer: React.FC<DrawerProps> = ({
  openBottom,
  closeBottom,
}) => {
  const handleClickClose = () => {
    // Appel de la fonction closeBottom du composant parent
    closeBottom();
  };
  return (
    <>
      <Drawer
        placement="bottom"
        open={openBottom}
        onClose={closeBottom}
        className="p-4 rounded-3xl overflow-y-scroll"
      >
        <div className="flex items-center justify-between w-full">
          <Typography
            className="text-lg font-semibold border-b border-b-1 border-gray-300"
            color="black"
          >
            Switch account
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={handleClickClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5 absolute -top-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="mb-12">
          <PageRepresent name="Teratany" />
          <PageRepresent name="Symbiozis" />
          <PageRepresent name="Symbiozis" />
          <PageRepresent name="Symbiozis" />
        </div>
      </Drawer>
    </>
  );
};

export default SwitchAccountDrawer;
