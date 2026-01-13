import React from "react";

const ShowOnTop = ({ children, setEditList }) => {
  return (
    <div className='w-full h-full   fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center'>
      <div
        onClick={() => setEditList(false)}
        className='backdrop-blur-sm bg-black/10 w-full h-full'
      ></div>
      <div className='absolute z-10'> {children}</div>
    </div>
  );
};

export default ShowOnTop;

export const Form_Container = ({ children }) => {
  return <div className='bg-white shadow-sm p-6 rounded-lg'>{children}</div>;
};
