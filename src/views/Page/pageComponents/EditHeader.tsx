import React from "react";
import { HiArrowNarrowLeft } from "@react-icons/all-files/hi/HiArrowNarrowLeft";

interface EditHeaderProps {
  name: string;
}

const EditHeader: React.FC<EditHeaderProps> = (props: any) => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-14 bg-white border-b border-gray-200">
      <div className="flex items-center h-full mx-auto">
        <HiArrowNarrowLeft onClick={handleGoBack} size={26} className="mx-3" />
        <p className="text-xl flex justify-center font-medium">{props.name}</p>
      </div>
    </div>
  );
};

export default EditHeader;
