import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDropBox = ({setFile}) => {
  // State to store the names of the accepted files
  const [fileName, setFileName] = useState("");

  // Handle files dropped into the dropzone
  const onDrop = (acceptedFiles) => {
   
    if (acceptedFiles.length > 0) {
        // Only take the first file and update the state with its name
        
        setFile(acceptedFiles[0]);
        setFileName(acceptedFiles[0].name);
         
      }
  };

  // Create a dropzone using the useDropzone hook
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.jpg,.jpeg,.png,.pdf', // Customize file types here
  });

  return (
    <div className="flex justify-center items-center flex-col h-[180px] max-w-[300px] rounded-[30px] mx-auto my-[10px]">
      {/* Dotted Border Box */}
      <div
        {...getRootProps()}
        className="w-[300px] h-[100%] border-[2px] border-dashed  rounded-[20px] border-gray-400 flex justify-center items-center p-4 relative"
      >
        <input {...getInputProps()} />     

        {
            fileName.trim() ? <span  className="text-gray-600 text-sm ">
            {fileName}
          </span>: <p className="text-center text-gray-600">
          Drag & Drop your files here, or click to select files
        </p>
        }

        {/* Displaying the names of the accepted files inside the box */}
        {/* {fileName.length > 0 && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center px-[10px]  items-center bg-white  rounded-md">
            <ul className="list-disc pl-5 space-y-2 max-h-[80%] overflow-auto">
              {fileName.map((fileName, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  {fileName}
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DragAndDropBox;
