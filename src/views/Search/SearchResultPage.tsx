import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import SearchFilterBar from "../../components/SearchFilterBar";
import { HiArrowNarrowLeft } from "@react-icons/all-files/hi/HiArrowNarrowLeft";
import Publication from "../../components/Publication/Publication";
import HorizontalCards from "../../components/HorizontalCards";
import { useParams } from "react-router-dom";
import { withAsync } from "../../helpers/withAsync";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { searchProfile } from "../../api/ProfileApi";
import useToken from "../../hooks/useToken";
import useFetchProfile from "../../hooks/useFetchProfile";
import { ISearch } from "../../types/search.type";

const SearchResult: React.FC = () => {
  const { query } = useParams();
  const token = useToken();
  const profileConnectedUser = useFetchProfile();
  const [results, setResults] = useState<ISearch>();

  const searchByQuery = async () => {
    if (profileConnectedUser) {
      const { error, response } = await withAsync(() =>
        searchProfile(token, query, profileConnectedUser?._id!)
      );
      if (error instanceof AxiosError) {
        const error_message: string =
          error?.response?.data.description ||
          error?.response?.data ||
          error.message;
        toast.error(error_message);
      } else {
        setResults(response?.data as ISearch);
        console.log(response?.data);
      }
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    searchByQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileConnectedUser?._id, query]);
  return (
    <>
      <div className="mx-3 my-4">
        <div className="flex items-center">
          <HiArrowNarrowLeft
            size={30}
            className="mr-4"
            onClick={handleGoBack}
          />
          <SearchBar />
        </div>
        <SearchFilterBar />
      </div>
      {results?.profiles.length! > 0 && (
        <div className="flex w-full flex-col pb-3 items-start border-b border-b-1">
          <p className="mx-3 mt-2 font-medium ">Users</p>
          {results?.profiles?.map((user) => (
            <HorizontalCards
              _id={user._id}
              name={user.name}
              image={user.image!}
              isFollowed={user.isFollowed ? "UnFollow" : "Follow"}
              desc={`${user?.numberOfFollowers} Followers`}
            />
          ))}
        </div>
      )}
      {results?.publications.length! > 0 && (
        <div className="flex flex-col items-start">
          <p className="mx-3 mt-2 font-medium ">Publications</p>
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
      )}
    </>
  );
};
export default SearchResult;
