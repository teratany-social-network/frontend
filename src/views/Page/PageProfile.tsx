import React from "react";
import TopNavBar from "./pageComponents/TopNavBar";

const PageProfile: React.FC = () => {
  return (
    <>
      <TopNavBar user="Miandry" />
      <div className="mt-12">Profile</div>
    </>
  );
};

export default PageProfile;
