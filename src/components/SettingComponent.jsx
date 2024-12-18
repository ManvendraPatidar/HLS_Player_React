import React, { useContext, useState } from "react";
import { MyContext } from "../App";

const SettingComponent = () => {
  const { currentRef } = useContext(MyContext);

  const [isOpen, setIsOpen] = useState(false); // State to toggle modal visibility
  const [speed, setSpeed] = useState(1); // Playback speed state

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const changeSpeed = (newSpeed) => {
    setIsOpen(false);
    currentRef.current.playbackRate = newSpeed;
    setSpeed(newSpeed);
  };

  return (
    <div className="">
      {/* Settings Icon */}
      <button
        onClick={toggleModal}
        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none"
      >
        ⚙️
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="absolute top-[-100px] right-[45px] sm:right-[135px]  w-48 bg-white shadow-lg rounded-[20px] rounded-br-none p-4 z-50 border-2 border-solid border-[orange]"
          style={{ zIndex: 9999 }} // Ensure the modal appears above everything else
        >
          <div className="text-lg font-semibold">Settings</div>
          <div className="mt-4">
            <div>
              <label
                htmlFor="speed"
                className="block text-sm font-medium text-gray-700"
              >
                Speed
              </label>
              <select
                id="speed"
                value={speed}
                onChange={(e) => changeSpeed(Number(e.target.value))}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingComponent;
