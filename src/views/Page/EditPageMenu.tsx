import React from "react";
import EditHeader from "../../components/common/HeaderEdit";
import EditType from "../../components/common/EditType";

const EditPage: React.FC = () => {
  return (
    <>
      <EditHeader name="Page settings" />
      <div className="mt-20 mx-4">
        <EditType name="General" type="page" path="/page-general" />
        <EditType name="Profile picture" type="page" path="/page-picture" />
        <EditType name="Location parameter" type="page" path="/page-location" />
      </div>
    </>
  );
};

export default EditPage;
