import React from 'react';

interface Page1Props {
  color: boolean;
}

const Page1: React.FC<Page1Props> = ({ color=false }) => {

  return (
    <div className={`flex items-center justify-center flex-grow ${color ? 'bg-green-500' : 'bg-yellow-500'} bg-opacity-50`}>
      <h1>Remote Component A</h1>
    </div>
  );
};

export default Page1;