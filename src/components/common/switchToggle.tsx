import React, { useState } from "react";

interface SwitchToggleProps {
  label: string;
  isChecked?: boolean;
  onClick?: (e?: any) => void;
}

const SwitchToggle: React.FC<SwitchToggleProps> = ({
  label,
  isChecked,
  onClick,
}) => {
  const [checked, setchecked] = useState(isChecked);

  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <span className="mr-4 text-sm font-normal text-gray-900 ">{label}</span>
        <input
          type="checkbox"
          checked={checked ?? isChecked}
          className="sr-only peer"
          onChange={(e) => {
            setchecked(e.target.checked);
          }}
          onClick={onClick}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
};
export default SwitchToggle;
