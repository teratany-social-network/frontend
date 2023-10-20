import React from "react";
import TopNavBarProfile from "../../components/common/TopNavBarProfile";
import Button from "../../components/common/Button";

const UserProfile: React.FC = () => {
  return (
    <>
      <TopNavBarProfile user="Miandry" path="/edit-user" />
      <div className="mt-16 pb-3 flex w-full justify-evenly items-center border-b border-gray-200">
        <img
          className="w-20 h-20 object-cover rounded-full
               border-2 border-pink-600 p-1"
          src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          alt="profile"
        />
        <div className="flex flex-col">
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-normal mb-2">Rakotoarivelo Miandry</h2>
            <Button width="w-full" height="py-1" name="Follow" />
          </div>

          <ul className="flex space-x-8 mt-2">
            <li>
              <span className="font-semibold">136 </span>
              posts
            </li>

            <li>
              <span className="font-semibold">40.5k </span>
              followers
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
