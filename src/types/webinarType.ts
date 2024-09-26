import { TypedUseSelectorHook, useSelector } from "react-redux";
import store from "../redux/store";

export interface WebinarData {
  id: string;
  name: string;
  imgUrl: string | null;
  role: string;
  company: string;
  topics: string[];
  webinarTitle: string;
  startDate: string;
  startTime: string;
  endTime: string;
}

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;