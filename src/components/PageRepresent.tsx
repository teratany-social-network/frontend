import React from "react";
interface PageRepresentProps {
  name: string;
}
const PageRepresent: React.FC<PageRepresentProps> = ({ name }) => {
  return (
    <>
      <div className="my-4 flex items-center">
        <img
          className="w-14 h-14 object-cover rounded-full
          border-2 border-blue-600 p-1"
          src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          alt=""
        />
        <p className="text-lg font-normal mx-4">{name}</p>
      </div>
    </>
  );
};
export default PageRepresent;
