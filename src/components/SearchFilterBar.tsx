import React from "react";
import { useNavigate } from "react-router-dom";

interface SearchFilterBarProps {
  query?: string;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({ query }) => {
  const navigate = useNavigate();

  return (
    <div className="flex my-2">
      <p
        className="w-1/5 border border-1 rounded-lg border-gray-200 mx-1 text-center px-2"
        onClick={() => {
          navigate(`/search/result/${query}`);
        }}
      >
        All
      </p>
      <p
        className="w-1/2 border border-1 rounded-lg border-gray-200 mx-1 text-center px-2"
        onClick={() => {
          navigate(`/search/result/publication/${query}`);
        }}
      >
        Publication
      </p>
      <p
        className="w-1/3 border border-1 rounded-lg border-gray-200 mx-1 text-center px-2"
        onClick={() => {
          navigate(`/search/result/user/${query}`);
        }}
      >
        User
      </p>
      <p
        className="w-1/3 border border-1 rounded-lg border-gray-200 mx-1 text-center px-2"
        onClick={() => {
          navigate(`/pages/${query}`);
        }}
      >
        Page
      </p>
    </div>
  );
};
export default SearchFilterBar;
