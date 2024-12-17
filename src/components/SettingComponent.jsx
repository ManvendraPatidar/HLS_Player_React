import React, { useContext, useState } from "react";
import { MyContext } from "../App";

const SettingComponent = () => {
  const { currentRef } = useContext(MyContext);
  // console.log("---->",qualityList)

  const [isOpen, setIsOpen] = useState(false); // State to toggle modal visibility
  const [speed, setSpeed] = useState(1); // Playback speed state
  // const [quality, setQuality] = useState("1080p"); // Video quality state

  // Toggle modal visibility
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle speed change
  const changeSpeed = (newSpeed) => {
    // console.log("changing the speed to ")
    currentRef.current.playbackRate = newSpeed;
    setSpeed(newSpeed);
  };

  // const changeQuality = (newQuality) => {
  //   setQuality(newQuality);
  
  //   // Switch the video source based on the selected quality
  //   if (currentRef.current) {
  //     // Loop through the qualityList and find the corresponding video file
  //     qualityList.forEach(quality => {
  //       if (quality === newQuality) {
  //         // Set the video source dynamically based on the quality
  //         currentRef.current.src = `video-${quality}.mp4`; // Assuming the video files follow the pattern "video-quality.mp4"
  //       }
  //     });
  
  //     // Reload and play the video after changing the source
  //     currentRef.current.load();
  //     currentRef.current.play();
  //   }
  // };
  

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
          className="absolute top-[-160px] right-[45px] sm:right-[135px]  w-48 bg-white shadow-lg rounded-[20px] rounded-br-none p-4 z-50"
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

            {/* <div className="mt-4">
              <label
                htmlFor="quality"
                className="block text-sm font-medium text-gray-700"
              >
                Quality
              </label>
              <select
                id="quality"
                value={quality}
                onChange={(e) => changeQuality(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                {qualityList.map((qualityLevel) => (
                  <option key={qualityLevel} value={qualityLevel}>
                    {qualityLevel}
                  </option>
                ))}
              </select>
            </div> */}

          </div>
        </div>
      )}
    </div>
  );
};

export default SettingComponent;
