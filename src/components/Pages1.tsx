import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Page1Props {
  color: boolean;
  changePage: boolean;
}

const Page1: React.FC<Page1Props> = ({ color = false, changePage = false }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (changePage) {
      if (navigate) navigate("/page1/1_1");
    } else {
      if (navigate) navigate("/page1");
    }
  }, [changePage, navigate]);

  return (
    <div
      className={`flex items-center justify-center flex-grow ${
        color ? "bg-green-500" : "bg-yellow-500"
      } bg-opacity-50`}
    >
      <h1>Remote Component A</h1>
    </div>
  );
};

export default Page1;
