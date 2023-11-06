import React, { useState } from "react";
import TopBar from "../../components/common/TopBar";
import Button from "../../components/common/Button";
import useLoadingButton from "../../hooks/useLoadingButton";
import { BiPhotoAlbum } from "@react-icons/all-files/bi/BiPhotoAlbum";
import useFetchProfile from "../../hooks/useFetchProfile";
import { FileServerURL, uploadFile } from "../../api/FileApi";
import { withAsync } from "../../helpers/withAsync";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { postPublication } from "../../api/PublicationApi";
import useToken from "../../hooks/useToken";
import { useNavigate } from "react-router-dom";

const AddPublication: React.FC = () => {
  const [files, setFile] = useState<any>();
  const [selectedPhoto, setSelectedPhoto] = useState<string>("Photo");
  const [isLoading, startLoading, endLoading] = useLoadingButton();
  const [fileViewers, setFileViewers] = useState<string[]>([]);
  const [publicationText, setPublicationText] = useState<string>();
  const token = useToken();
  const navigate = useNavigate();

  const profile = useFetchProfile();

  const handleFileChange = (e: any) => {
    setFileViewers([]);
    setSelectedPhoto(
      `${
        e.target.files.length > 1
          ? e.target.files.length + " images "
          : e.target.files.length + " image "
      }  selected`
    );
    for (let index = 0; index < e.target.files.length; index++) {
      setFileViewers((prevState) => [
        ...prevState,
        URL.createObjectURL(e.target.files[index]),
      ]);
    }

    setFile(e.target.files);
  };

  const uploadImageFile = async () => {
    if (files) {
      let formData = new FormData();
      for (let index = 0; index < files.length; index++) {
        formData.append("images", files[index]);
      }

      const { error, response } = await withAsync(() => uploadFile(formData));
      if (error instanceof AxiosError) {
        endLoading();
        const error_message: string =
          error?.response?.data.description ||
          error?.response?.data ||
          error.message;
        toast.error(error_message);
      } else {
        return response?.data;
      }
    }
  };

  const AddPost = async () => {
    startLoading();
    const images = await uploadImageFile();

    if (publicationText) {
      const { error } = await withAsync(() =>
        postPublication(token, profile?._id!, publicationText, images)
      );

      if (error instanceof AxiosError) {
        endLoading();
        const error_message: string =
          error?.response?.data.description ||
          error?.response?.data ||
          error.message;
        toast.error(error_message);
      } else {
        endLoading();
        toast.success("Publication created");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } else {
      toast.error("Publication content required! ");
      endLoading();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <TopBar text="New publication" />
      <div className="w-[90%] flex justify-start items-center space-x-4 mt-20">
        <img
          className="w-10 h-10 rounded-full"
          src={
            profile?.image
              ? FileServerURL + profile?.image
              : "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          }
          alt=""
        />
        <p className="flex font-medium">{profile?.name}</p>
      </div>
      <textarea
        id="message"
        rows={4}
        className="block my-4 p-2.5 w-[90%] text-sm text-gray-900 bg-gray-50 rounded-lg border   white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 white:text-white white:focus:ring-blue-500 white:focus:border-blue-500"
        placeholder="Write your thoughts here..."
        onChange={(e) => setPublicationText(e.target.value)}
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
          multiple
        />
      </div>
      <div className="w-[90%] flex flex-wrap justify-start">
        {fileViewers.map((file) => (
          <img
            className="w-10 h-10 rounded-md mt-2 mr-2 object-cover"
            src={file}
            alt="selectedPhoto"
          />
        ))}
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
