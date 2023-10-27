import React from "react";
import SwitchToggle from "../../components/common/switchToggle";
import Button from "../../components/common/Button";
import TopBar from "../../components/common/TopBar";

const EditPageProfile: React.FC = () => {
  return (
    <>
      <TopBar text="Location parameter" />
      <div className="mt-20 flex flex-col items-center mx-4">
        <p className="font-medium">
          You have the choice to make your page's location public or private.
          The location data is only utilized within the "map" page, and we
          absolutely do not make any use of your personal data in any way.
        </p>
        <div className="flex items-start mt-10">
          <SwitchToggle label="Show Location" />
        </div>
        <div className="my-10">
          <Button width="px-4" height="py-3" name="Satellite" />
          <Button width="px-4" height="py-3" name="Save" />
        </div>
      </div>
    </>
  );
};
export default EditPageProfile;
