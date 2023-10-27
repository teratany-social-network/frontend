import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { FaRegComment } from "@react-icons/all-files/fa/FaRegComment";
import { FiSend } from "@react-icons/all-files/fi/FiSend";
import { useState } from "react";
import { DrawerContainer } from "../DrawerContainer";

const Publication = () => {
  const [isPostLiked, setIsPostLiked] = useState<Boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleClickLikePost = () => {
    setIsPostLiked(!isPostLiked);
  };

  const changeDrawerStatus = () => {
    console.log("clicked");
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    // <!-- Wrapper-->
    <div className="wrapper my-2 w-full sm:w-[30%] flex flex-col items-center bg-white rounded-lg shadow-md">
      {/* <!-- Card--> */}
      <article className="mb-4 break-inside rounded-xl bg-white white:bg-slate-800 flex flex-col bg-clip-border w-full">
        <div className="flex  p-4 items-center justify-between">
          <div className="flex">
            <a className="inline-block mr-4" href="/">
              <img
                alt=""
                className="rounded-full max-w-none w-12 h-12"
                src="https://randomuser.me/api/portraits/men/35.jpg"
              />
            </a>
            <div className="flex flex-col">
              <div>
                <a
                  className="inline-block text-lg font-bold white:text-white"
                  href="/"
                >
                  Wade Warren
                </a>
              </div>
              <div className="flex text-slate-500 white:text-slate-300 white:text-slate-400">
                July 17, 2018
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between gap-1 mb-1">
            <a className="flex" href="/">
              <img
                alt=""
                className="w-full"
                src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </a>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-col justify-start">
            <div className="inline-flex items-center">
              <span className="mr-4">
                {isPostLiked ? (
                  <AiFillHeart
                    onClick={handleClickLikePost}
                    size={30}
                    color="#FF3040"
                    className="active:scale-75 transition-transform cursor-pointer"
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={handleClickLikePost}
                    size={30}
                    className="active:scale-75 transition-transform cursor-pointer"
                  />
                )}
              </span>
              <span className="mr-4">
                <FaRegComment size={24} onClick={changeDrawerStatus} />
              </span>
              <span className="mr-4">
                <FiSend size={24} />
              </span>
            </div>
            <p className="text-left py-2 text-gray-800 font-medium">
              1 929 J'aime
            </p>
          </div>
          <p className="white:text-slate-200 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>

          <p className="text-left  text-gray-400 font-normal">plus</p>

          <p
            onClick={changeDrawerStatus}
            className="text-left  text-gray-400 font-normal"
          >
            Afficher les 32 commentaires
          </p>
          <p className="text-left text-xs text-gray-400 font-normal">
            IL Y A 14 JOURS
          </p>
        </div>
        <DrawerContainer isOpen={drawerOpen} onClose={closeDrawer} />
      </article>
    </div>
  );
};

export default Publication;
