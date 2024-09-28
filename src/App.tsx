import { useState } from "react";
import Header from "./components/Header";
import WebinarList from "./components/WebinarList";
import "./index.css";
import CreateWeb from "./components/CreateWeb";
import { useTypedSelector, WebinarData } from "./types/webinarType";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { webinars } = useTypedSelector((state) => state.webinarsData);
  const [editWeb, setEditWeb] = useState<WebinarData | undefined>(undefined);

  const handleEditWeb = (webId: string) => {
    const foundWebinar = webinars.find(
      (ele: { id: string }) => ele.id === webId
    );
    setEditWeb(foundWebinar);
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <Header onAddWebinar={() => setIsPopupOpen(true)} />
      <WebinarList
        handleEditWeb={handleEditWeb}
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
      />
      {isPopupOpen && (
        <CreateWeb
          onClose={() => {
            setIsPopupOpen(false);
            setEditWeb(undefined);
          }}
          editWeb={editWeb}
        />
      )}
    </div>
  );
};

export default App;
