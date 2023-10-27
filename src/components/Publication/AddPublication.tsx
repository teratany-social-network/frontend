import React, { useState } from "react";
import TopBar from "../common/TopBar";
import Button from "../common/Button";
import useLoadingButton from "../../hooks/useLoadingButton";
import { BiPhotoAlbum } from "@react-icons/all-files/bi/BiPhotoAlbum";

const AddPublication: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string>("Photo");
  const [isLoading, startLoading, endLoading] = useLoadingButton();
  const handleFileChange = (e: any) => {
    setSelectedPhoto(e.target.files[0].name);
  };
  const AddPost = () => {
    startLoading();
    setTimeout(() => {
      endLoading();
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <TopBar text="New publication" />
      <div className="w-[90%] flex justify-start items-center space-x-4 mt-2">
        <img
          className="w-10 h-10 rounded-full"
          src="https://randomuser.me/api/portraits/men/35.jpg"
          alt=""
        />
        <p className="flex font-medium">Jese Leos</p>
      </div>
      <textarea
        id="message"
        rows={4}
        className="block my-4 p-2.5 w-[90%] text-sm text-gray-900 bg-gray-50 rounded-lg border   white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 white:text-white white:focus:ring-blue-500 white:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      <div className="flex justify-start items-center w-[90%]">
        <label htmlFor="image" className="flex justify-start items-center">
          <BiPhotoAlbum size={30} />
          <p className="ml-2">{selectedPhoto}</p>
        </label>
        <input
          type="file"
          id="image"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <Button
        className="mt-2.5"
        name="Post"
        width="w-[90%]"
        isLoading={isLoading}
        onClick={AddPost}
      />
    </div>
  );
};

export default AddPublication;
