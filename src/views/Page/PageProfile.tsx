import React from "react";
import TopNavBar from "../../components/common/TopNavBar";

const PageProfile: React.FC = () => {
  return (
    <>
      <TopNavBar notifCount={9} messageCount={8} />
      <div className="mt-12">Page profile</div>
    </>
  );
};

export default PageProfile;
