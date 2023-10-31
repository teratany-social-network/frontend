import { useState } from "react";

interface Props {
  text: string;
  onClick?: any;
  value?: string;
}

export const CheckboxButton: React.FC<Props> = ({ text, onClick, value }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => setIsChecked(!isChecked);

  return (
    <label className="inline-flex items-center mt-3">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isChecked ? (
        <span
          data-type={value}
          onClick={(e) => onClick(e, isChecked)}
          className="text-gray-100 bg-black rounded-full border border-gray-200 text-sm font-medium px-5 py-2.5 mr-3"
        >
          {text}
        </span>
      ) : (
        <span
          data-type={value}
          onClick={(e) => onClick(e, isChecked)}
          className="text-gray-500 bg-white rounded-full border border-gray-200 text-sm font-medium px-5 py-2.5 mr-3"
        >
          {text}
        </span>
      )}
    </label>
  );
};
