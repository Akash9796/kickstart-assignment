import React from "react";
import { useDispatch } from "react-redux";
import {
  setFilterTopic,
  updateWebinars,
} from "../redux/reducers/webinarsSlice";
import webinarData from "../constants/webinarMockData";

interface HeaderProps {
  onAddWebinar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddWebinar }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateWebinars(webinarData));
    dispatch(setFilterTopic([]));
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4 border-b pb-2">
      <h1
        className="text-2xl font-bold mb-2 sm:mb-0 cursor-pointer"
        onClick={handleClick}
      >
        Webinar
      </h1>
      <button
        type="submit"
        className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
        onClick={onAddWebinar}
      >
        Add Webinar
      </button>
    </div>
  );
};

export default Header;
