import React from "react";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";

interface DrawerProps {
  openBottom: any;
  closeBottom: any;
}

const SwitchAccountDrawer: React.FC<DrawerProps> = (props: any) => {
  const handleClickClose = () => {
    // Appel de la fonction closeBottom du composant parent
    console.log("Fermeture du drawer");

    props.closeBottom();
  };
  return (
    <>
      <Drawer
        placement="bottom"
        open={props.openBottom}
        onClose={props.closeBottom}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
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
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
      </Drawer>
    </>
  );
};

export default SwitchAccountDrawer;
