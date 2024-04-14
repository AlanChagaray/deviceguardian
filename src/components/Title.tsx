import React from "react";


interface Props {
    value: string;
  }

export const Title = ({value}: Props) => {
  return (
    <>
      <div className="text-lg mb-1 pl-2 text-gray-400">{value}</div>
      <hr className="mb-2"></hr>
    </>
  );
};
