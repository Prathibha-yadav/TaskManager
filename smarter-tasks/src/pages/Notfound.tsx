import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound: React.FC = () => {
    const navigate = useNavigate();
    const ButtonClick = () => {
        navigate("/home");
      };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-3xl text-gray-600">404 Page Not Found</p>
      <br />
      <button id="backToHomeButton" onClick={ButtonClick} className="bg-black text-white">
        Home
      </button>
    </div>
  );
};
export default Notfound;