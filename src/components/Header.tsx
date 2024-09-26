import React from "react";

interface HeaderProps {
  onAddWebinar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddWebinar }) => (
  <div className="flex justify-between items-center mb-4 border-b pb-2">
    <h1 className="text-2xl font-bold">Webinar</h1>
    <button
      type="submit"
      className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
      onClick={onAddWebinar}
    >
      Add Webinar
    </button>
  </div>
);

export default Header;
