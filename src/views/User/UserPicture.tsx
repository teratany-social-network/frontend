import React from "react";
import EditHeader from "../../components/common/HeaderEdit";
import ProfilePicture from "../../assets/Teratany_ico/apple-touch-icon-180x180.png";
import Button from "../../components/common/Button";

const EditUserPicture: React.FC = () => {
  return (
    <>
      <EditHeader name="Profile picture" />
      <div className="mt-20 flex flex-col items-center">
        <img
          src={ProfilePicture}
          alt=""
          className="w-32 h-32 border-2 rounded-full mx-3 my-6"
        />
        <input
          className="max-h-7 h-7 cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
          type="file"
        />
        <div className="my-8">
          <Button width="px-4" height="py-3" name="Save" />
        </div>
      </div>
    </>
  );
};
export default EditUserPicture;
