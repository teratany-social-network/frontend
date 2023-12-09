import React, { useState } from "react";
// import EditHeader from "../../components/common/HeaderEdit";
import Publication from "../../components/Publication/Publication";
import HorizontalCards from "../../components/HorizontalCards";
import DropDown from "../../components/common/dropDown";
import TopBar from "../../components/common/TopBar";
import useFetchSearchByQuery from "../../hooks/useFetchSearchByQuery";
import { useParams } from "react-router-dom";

const SearchFilterResult: React.FC = () => {
  const currentPath = window.location.pathname;
  const choices = ["Followed", "not followed"];
  const [dropDownIsVisible, setVisibility] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(choices[0]);
  const { query } = useParams();

  const results = useFetchSearchByQuery(query!);

  const showDropDown = () => {
    setVisibility(!dropDownIsVisible);
  };

  const handleChoiceSelect = (choice: string) => {
    setSelectedChoice(choice);
  };

  const pathSegments = currentPath.split("/");
  const lastSegment = pathSegments[pathSegments.length - 2];
  const isPublication = lastSegment === "publication";
  return (
    <>
      <TopBar text={isPublication ? "Publications" : "Users"} />
      <div className="flex mt-6 mb-2 mx-2">
        <p
          className=" border border-1 rounded-lg border-gray-200 mx-1 text-center px-2"
          onClick={() => {
            showDropDown();
          }}
        >
          {selectedChoice}
        </p>
        {dropDownIsVisible && (
          <DropDown
            choices={choices}
            onChoiceSelect={handleChoiceSelect}
            closeOnSelect={showDropDown}
          />
        )}
      </div>
      {isPublication
        ? results?.publications?.length! > 0 && (
            <div className="flex flex-col items-start">
              {results?.publications?.map((pub) => (
                <Publication
                  key={pub?._id}
                  _id={pub?._id}
                  profileId={pub?.profile?._id}
                  profileName={pub?.profile?.name}
                  profileImage={pub?.profile?.image}
                  date={pub?.date}
                  comments={pub?.numberOfComments}
                  reactions={pub?.numberOfReactions}
                  content={pub?.content}
                  images={pub?.images!}
                  isReacted={pub.isReacted}
                />
              ))}
            </div>
          )
        : results?.profiles?.map((user) => (
            <HorizontalCards
              _id={user._id}
              name={user.name}
              image={user.image!}
              isFollowed={user.isFollowed ? "UnFollow" : "Follow"}
              desc={`${user?.numberOfFollowers} Followers`}
            />
          ))}
    </>
  );
};
export default SearchFilterResult;
