import React from "react";
import EditHeader from "./pageComponents/EditHeader";
import EditType from "./pageComponents/EditType";

const EditPage: React.FC = () => {
  return (
    <>
      <EditHeader name="Settings" />
      <div className="mt-20 mx-4">
        <EditType type="General" />
        <EditType type="Profile picture" />
        <EditType type="Edit Password" />
        <EditType type="Location parameter" />
      </div>
    </>
  );
};

export default EditPage;
