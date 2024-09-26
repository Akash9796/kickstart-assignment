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
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between w-full sm:w-[45vw] md:w-[30vw] lg:w-[25vw] max-h-[60vh]">
  <div className={`p-5 flex items-center justify-between ${bgColor} rounded-lg`}>
    <div>
      <p className="text-lg font-bold">{webinar.name}</p>
      <p className="text-sm text-gray-600">{webinar.role}</p>
      <p className="text-sm text-gray-600">{webinar.company}</p>
    </div>
    <img
      src={
        webinar.imgUrl || `https://picsum.photos/seed/${Math.random()}/300`
      }
      alt={webinar.name}
      className="w-1/4 rounded-full"
    />
  </div>
  <div className="mt-4">
    <p className={`font-bold ${textColor}`}>{webinar.webinarTitle}</p>
    <div className="flex flex-col rounded-lg overflow-hidden">
      <p className="text-xl font-bold truncate">
        {webinar.topics.join(", ")}
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
