import WebinarCard from "./WebinarCard";
import { useTypedSelector, WebinarData } from "../types/webinarType";
import { useDispatch } from "react-redux";
import { updateWebinars } from "../redux/reducers/webinarsSlice";
import { useEffect, useState } from "react";

interface WebinarListProps {
  handleEditWeb: (id: string) => void;
}

const WebinarList: React.FC<WebinarListProps> = ({ handleEditWeb }) => {
  const dispatch = useDispatch();

  const { webinars, filteredWebinars, filterTopic } = useTypedSelector(
    (state) => state.webinarsData
  );
  const [finalWebinars, setFinalWebinars] = useState(webinars);

  const deleteWebinar = (id: string) => {
    dispatch(
      updateWebinars(
        webinars.filter((webinar: WebinarData) => webinar.id !== id)
      )
    );
  };
  useEffect(() => {
    if (filterTopic[0]) {
      setFinalWebinars(filterTopic);
      return;
    }

    if (filteredWebinars.length > 0) {
      setFinalWebinars(filteredWebinars);
      return;
    }

    setFinalWebinars(webinars);
  }, [filterTopic, filteredWebinars, webinars]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4 sm:px-10 lg:px-20 scroll-thin overflow-y-auto mb-11">
  {finalWebinars.map((webinar: WebinarData) => (
    <WebinarCard
      key={webinar?.id}
      webinar={webinar}
      deleteWebinar={deleteWebinar}
      handleEditWeb={handleEditWeb}
    />
  ))}
</div>
  );
  

};

export default WebinarList;
