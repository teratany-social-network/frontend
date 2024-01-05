import { useEffect, useRef } from "react";

interface SearchInputFieldProps {
  onChange: (value: string) => void;
  searchQuery: string;
}

const SearchInputField: React.FC<SearchInputFieldProps> = ({
  onChange,
  searchQuery,
}) => {
  const mapPathRef = useRef(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/map") {
      mapPathRef.current = true;
    } else {
      mapPathRef.current = false; // Make sure to handle other cases if needed
    }
  }, []);
  return (
    <div className="flex w-full">
      <div className="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-lg border border-1"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onChange(e.target.value as string)}
        />
        {mapPathRef && (
          <button className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-black rounded-r-lg border border-black">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInputField;
