const DropDown = (props: any) => {
  return (
    <>
      <div className="absolute z-10 mt-8 bg-white divide-y divide-gray-100 rounded-lg shadow w-32">
        <ul className="py-2 text-sm text-black ">
          {props.choices.map((choice: string, i: any) => {
            return (
              <li>
                <button
                  key={i}
                  type="button"
                  className="inline-flex rounded-lg w-full px-4 py-2 hover:bg-black hover:text-white"
                >
                  {choice}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DropDown;
