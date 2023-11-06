import React from "react";

import PublicationForm from "./components/PublicationForm";

const AddPublication: React.FC = () => {
  return <PublicationForm isNewPub={true} btnText="Post" />;
};

export default AddPublication;
