import React from "react";
import Button from "../../components/common/Button";

const Comments = () => {
  return (
    <div className="w-full bg-white rounded-lg -mt-6 my-4 mx-6">
      <h3 className="font-bold mb-3">Commentaires</h3>
      <div className="flex flex-col overflow-y-auto custom-height-comment">
        <form>
          <div className="flex flex-col">
            <div className=" rounded-md p-3 border my-3 ">
              <div className="flex gap-3 items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/22263436?v=4"
                  className="object-cover w-8 h-8 rounded-full   shadow-emerald-400 "
                  alt="comments"
                />

                <h3 className="font-bold">User name</h3>
              </div>

              <p className="flex text-left text-gray-600 mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                ducimus deserunt assumenda animi ullam nesciunt, nihil natus
                maxime, magni qui repellat? Esse, odit animi! Accusantium
                voluptate consequatur omnis perferendis perspiciatis optio dicta
                sapiente atque, tempora vitae doloremque fugiat tenetur sunt.
              </p>
            </div>
            <div className=" rounded-md p-3 border my-3">
              <div className="flex gap-3 items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/22263436?v=4"
                  className="object-cover w-8 h-8 rounded-full   shadow-emerald-400 "
                  alt="comments"
                />

                <h3 className="font-bold">User name</h3>
              </div>

              <p className="flex text-left text-gray-600 mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                ducimus deserunt assumenda animi ullam nesciunt, nihil natus
                maxime, magni qui repellat? Esse, odit animi! Accusantium
                voluptate consequatur omnis perferendis perspiciatis optio dicta
                sapiente atque, tempora vitae doloremque fugiat tenetur sunt.
              </p>
            </div>
            <div className=" rounded-md p-3 border my-3">
              <div className="flex gap-3 items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/22263436?v=4"
                  className="object-cover w-8 h-8 rounded-full   shadow-emerald-400 "
                  alt="comments"
                />

                <h3 className="font-bold">User name</h3>
              </div>

              <p className="flex text-left text-gray-600 mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                ducimus deserunt assumenda animi ullam nesciunt, nihil natus
                maxime, magni qui repellat? Esse, odit animi! Accusantium
                voluptate consequatur omnis perferendis perspiciatis optio dicta
                sapiente atque, tempora vitae doloremque fugiat tenetur sunt.
              </p>
            </div>

            <div className="rounded-md border p-3 my-3">
              <div className="flex gap-3 items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/22263436?v=4"
                  className="object-cover w-8 h-8 rounded-full   shadow-emerald-400 "
                  alt="comments"
                />

                <h3 className="font-bold">User name</h3>
              </div>

              <p className="flex text-left  text-gray-600 mt-2">
                this is sample commnent
              </p>
            </div>
          </div>
          <div className="bg-white w-full custom-form-comment">
            <input
              className="bg-gray-100 rounded  border leading-normal resize-none w-full h-20 py-2 pl-3 font-normal placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Your comment..."
              required
            />

            <Button
              name="Post comment"
              className="w-full flex justify-end px-3 mt-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
