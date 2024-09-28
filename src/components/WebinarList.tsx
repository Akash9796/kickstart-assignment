import WebinarCard from "./WebinarCard";
import { useTypedSelector, WebinarData } from "../types/webinarType";
import { useDispatch } from "react-redux";
import { updateWebinars } from "../redux/reducers/webinarsSlice";
import { useEffect, useState } from "react";
import SearchAndTopicSelector from "./SearchAndTopicSelector";

interface WebinarListProps {
  handleEditWeb: (id: string) => void;
  isSearchActive: boolean;
  setIsSearchActive: (val: boolean) => void;
}

const WebinarList: React.FC<WebinarListProps> = ({
  handleEditWeb,
  isSearchActive,
  setIsSearchActive,
}) => {
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

    if (filteredWebinars) {
      if (isSearchActive) {
        setFinalWebinars(filteredWebinars);

        return;
      }
    }

    setFinalWebinars(webinars);
  }, [filterTopic, filteredWebinars, webinars]);

  return (
    <div className="md:flex flex-wrap justify-center gap-5 sm:grid sm:grid-cols-2 md:grid-cols-3  px-4 sm:px-10 lg:px-20  scroll-thin overflow-y-auto mb-11  max-w-[90vw]">
      <SearchAndTopicSelector setIsSearchActive={setIsSearchActive} />
      {finalWebinars.length > 0 ? (
        finalWebinars.map((webinar: WebinarData) => (
          <WebinarCard
            key={webinar?.id}
            webinar={webinar}
            deleteWebinar={deleteWebinar}
            handleEditWeb={handleEditWeb}
          />
        ))
      ) : (
        <div>Search not Found</div>
      )}
    </div>
  );
};

export default WebinarList;
