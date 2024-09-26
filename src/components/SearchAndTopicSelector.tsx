import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  setFilterTopic,
  setMajorTopics,
  updateSearchFilterWebs,
} from "../redux/reducers/webinarsSlice";
import { useTypedSelector, WebinarData } from "../types/webinarType";
import debounce from "lodash.debounce";

const SearchAndTopicSelector: React.FC = () => {
  const dispatch = useDispatch();
  const { webinars, majorTopics } = useTypedSelector(
    (state) => state.webinarsData
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useCallback(
    debounce((term: string) => {
      const searchTerms = term.trim().toLowerCase().split(/\s+/);

      const filtered = webinars.filter((webinar: WebinarData) =>
        searchTerms.some(
          (searchWord) =>
            webinar.webinarTitle.toLowerCase().includes(searchWord) ||
            webinar.name.toLowerCase().includes(searchWord) ||
            webinar.company.toLowerCase().includes(searchWord) ||
            webinar.topics.some((topic) =>
              topic.toLowerCase().includes(searchWord)
            ) ||
            webinar.role.toLowerCase().includes(searchWord)
        )
      );

      dispatch(updateSearchFilterWebs(term ? filtered : []));
    }, 300),
    [webinars, dispatch]
  );

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    handleSearch(term);
  };

  const onTopicSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const topic = e.target.value;
      if (topic) {
        const filtered = webinars.filter((webinar: WebinarData) =>
          webinar.topics.includes(topic)
        );
        dispatch(setFilterTopic(filtered));
      } else {
        dispatch(setFilterTopic(""));
      }
    },
    [webinars, dispatch]
  );

  useEffect(() => {
    const uniqueTopics = Array.from(
      new Set(webinars.flatMap((webinar) => webinar.topics))
    );
    dispatch(setMajorTopics(uniqueTopics));
  }, [webinars, dispatch]);

  return (
    <div className="lg:ml-20 mb-5 border flex flex-col sm:flex-row justify-between items-center w-full sm:w-[85%]">
      <input
        type="text"
        placeholder="Search..."
        className="w-full sm:w-1/3 m-2 p-2 border border-gray-300 rounded-md"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <select
        className="w-full sm:w-1/5 p-2 m-2 border border-gray-300 rounded-md"
        onChange={onTopicSelect}
      >
        <option value="">Select a topic</option>
        {majorTopics.map((topic, i) => (
          <option key={i} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndTopicSelector;
