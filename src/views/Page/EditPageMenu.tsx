import React from "react";
import EditType from "../../components/EditType";
import TopBar from "../../components/common/TopBar";

const EditPage: React.FC = () => {
  return (
    <>
      <TopBar text="Page settings" />
      <div className="mt-2 mx-4">
        <EditType name="General" type="page" path="/page-general" />
        <EditType name="Profile picture" type="page" path="/page-picture" />
        <EditType name="Location parameter" type="page" path="/page-location" />
      </div>
    </>
  );
};

export default EditPage;
