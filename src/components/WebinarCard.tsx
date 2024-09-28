import React from "react";
import useRandomBgColor from "../hooks/useRandomBgColor";
import { WebinarData } from "../types/webinarType";
import { Months, weekdays } from "../constants/webinarMockData";

interface WebinarProps {
  webinar: WebinarData;
  deleteWebinar: (id: string) => void;
  handleEditWeb: (id: string) => void;
}

const WebinarCard: React.FC<WebinarProps> = ({
  webinar,
  deleteWebinar,
  handleEditWeb,
}) => {
  const { bgColor, textColor } = useRandomBgColor();

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between w-full sm:w-[45vw] md:w-[30vw] lg:w-[25vw] max-h-[60vh] max-w-[50vh]
      transform transition-transform duration-300 ease-in-out hover:scale-95"
    >
      <div
        className={`p-5 text-white flex items-center justify-between ${bgColor} rounded-lg`}
      >
        <div>
          <p className="text-xl font-bold">{webinar.name}</p>
          <p className="text-sm">{webinar.role}</p>
          <p className="text-sm ">{webinar.company}</p>
        </div>
        <img
          src={
            webinar.imgUrl ||
            `https://randomuser.me/api/portraits/men/${Math.floor(
              Math.random() * 100
            )}.jpg`
          }
          alt={webinar.name}
          className="w-1/4 rounded-lg"
        />
      </div>
      <div className="mt-2">
        <p className={`text-sm font-bold ${textColor}`}>
          {webinar.webinarTitle}
        </p>
        <div className="flex flex-col rounded-lg overflow-hidden">
          <p className="text-xl font-bold truncate">
            {webinar.topics.join(" and ")}
          </p>
        </div>
        <p>
          {weekdays[new Date(webinar.startDate).getDay()]} •{" "}
          {Months[new Date(webinar.startDate).getMonth() + 1]}{" "}
          {new Date(webinar.startDate).getDate()}, {webinar.startTime} -{" "}
          {webinar.endTime}
        </p>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-red-100 text-red-500 px-3 py-1 rounded"
          onClick={() => deleteWebinar(webinar.id)}
        >
          Delete
        </button>
        <button
          className="bg-blue-100 text-blue-500 px-3 py-1 rounded"
          onClick={() => handleEditWeb(webinar.id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default WebinarCard;
