import React from "react";
import EditHeader from "../../components/common/HeaderEdit";
import EditType from "../../components/common/EditType";

const EditUser: React.FC = () => {
  return (
    <>
      <EditHeader name="User settings" />
      <div className="mt-20 mx-4">
        <EditType name="General" type="user" path="/user-general" />
        <EditType name="Profile picture" type="user" path="/user-picture" />
        <EditType name="Edit Password" type="user" path="/user-password" />
        <EditType name="Location parameter" type="user" path="/user-location" />
      </div>
    </>
  );
};

export default EditUser;
