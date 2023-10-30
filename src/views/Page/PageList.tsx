import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import TopBar from "../../components/common/TopBar";
import PageListCard from "./components/PageListCard";

const PageList = () => {
  const [activeBage, setActiveBage] = useState<boolean | null>(null);

  let pages = [
    {
      name: "Teratany",
      desc: "50k Followers - Antananarivo",
      isFollowed: true,
    },
    {
      name: "Ampela Mitsingy",
      desc: "50k Followers - Antananarivo",
      isFollowed: false,
    },
    {
      name: "Zanaka Malagasy",
      desc: "50k Followers - Antananarivo",
      isFollowed: false,
    },
    {
      name: "Faritsy Menabe",
      desc: "50k Followers - Antananarivo",
      isFollowed: true,
    },
    {
      name: "Bongolava Miray",
      desc: "50k Followers - Antananarivo",
      isFollowed: true,
    },
    {
      name: "Sakalava ",
      desc: "50k Followers - Antananarivo",
      isFollowed: false,
    },
    {
      name: "Faritsy Analamanga",
      desc: "50k Followers - Antananarivo",
      isFollowed: true,
    },
    {
      name: "Tampoketsa Fitambarana",
      desc: "50k Followers - Antananarivo",
      isFollowed: false,
    },
  ];

  const [pageList, setPageList] = useState(pages);

  const filterByFollowedPage = () => {
    setActiveBage(false);
    const pageFiltered = pages.filter((page) => page.isFollowed === true);
    console.log("pageFiltered ", pageFiltered);
    setPageList(pageFiltered);
  };
  const filterByUnFollowedPage = () => {
    setActiveBage(true);
    const pageFiltered = pages.filter((page) => page.isFollowed === false);
    setPageList(pageFiltered);
  };

  const filterByAll = () => {
    setActiveBage(null);
    setPageList(pages);
  };

  return (
    <>
      <TopBar text="Pages" />
      <div className="fixed top-0 w-full bg-white p-2  mb-2 mt-14 flex flex-col items-start">
        <SearchBar />
        <div className="flex mt-4">
          <div className="flex space-x-2">
            <div
              onClick={filterByAll}
              style={{ paddingTop: "0.1em", paddingBottom: "0.1rem" }}
              className={
                activeBage == null
                  ? "text-sm px-3 !bg-gray-800 !text-white rounded-full"
                  : "text-sm px-3 !bg-gray-200 !text-gray-800 rounded-full"
              }
            >
              All
            </div>
            <div
              onClick={filterByUnFollowedPage}
              style={{ paddingTop: "0.1em", paddingBottom: "0.1rem" }}
              className={
                activeBage
                  ? "text-sm px-3 !bg-gray-800 !text-white rounded-full"
                  : "text-sm px-3 !bg-gray-200 !text-gray-800 rounded-full"
              }
            >
              Followed Page
            </div>
            <div
              onClick={filterByFollowedPage}
              style={{ paddingTop: "0.1em", paddingBottom: "0.1rem" }}
              className={
                activeBage === false
                  ? "text-sm px-3 !bg-gray-800 !text-white rounded-full"
                  : "text-sm px-3 !bg-gray-200 !text-gray-800 rounded-full"
              }
            >
              UnFollowed Page
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-y-auto flex flex-col items-center mt-40">
        {pageList.map((page) => (
          <PageListCard
            name={page.name}
            desc={page.desc}
            isFollowed={page.isFollowed}
          />
        ))}
      </div>
    </>
  );
};

export default PageList;
