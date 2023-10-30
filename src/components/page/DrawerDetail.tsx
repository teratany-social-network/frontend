import React from "react";
import { Drawer } from "@material-tailwind/react";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { ODD } from "../../views/Page/PageProfile";

type DrawerProps = {
    isOpen?: boolean;
    onClose: () => void;
};

export const DrawerPageDetail: React.FC<DrawerProps> = ({
    isOpen = false,
    onClose,
}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    useEffect(() => {
        setIsDrawerOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        if (isDrawerOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        return () => { document.body.style.overflow = "auto" };
    }, [isDrawerOpen]);
    return isOpen ? (
        <React.Fragment>
            <Drawer open={isOpen} onClose={onClose} className="p-4  rounded-l-2xl rounded-r-2xl !h-[90%] !max-h-[90%]" placement="bottom">
                <div className=" flex items-center justify-between">
                    <h3 className="font-bold ">Details</h3>
                    <HiOutlineXMark className="h-6 w-6 z-50" aria-hidden="true" onClick={onClose} />

                </div>
                <div className=" flex flex-col items-center justify-center">

                    <div className="p-4 space-y-2">
                        <ODD text="No poverty" />
                        <ODD text="Zero hunger" />
                        <ODD text="Good health and well-being" />
                        <ODD text="Quality education" />
                        <ODD text="Gender equality" />
                        <ODD text="Clear water and sanitation" />
                        <ODD text="Affordable and clean energy" />
                        <ODD text="Decent work and growth" />
                    </div>
                </div>
            </Drawer>
        </React.Fragment>
    ) : null;
};
