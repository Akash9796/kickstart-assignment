import React, { useEffect, useState, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import { GoDeviceCameraVideo, GoPeople } from "react-icons/go";
import useImageUpload from "../hooks/useImageUpload";
import InputField from "./reusable/InputField";
import { useTypedSelector, WebinarData } from "../types/webinarType";
import { updateWebinars } from "../redux/reducers/webinarsSlice";
import { useDispatch } from "react-redux";

interface CreateWebProps {
  onClose: () => void;
  editWeb: WebinarData | undefined;
}

const CreateWeb: React.FC<CreateWebProps> = ({ onClose, editWeb }) => {
  const { selectedImage, handleImageChange } = useImageUpload();
  const webinars = useTypedSelector((state) => state.webinarsData.webinars);
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    instructorName: "",
    instructorRole: "",
    instructorCompany: "",
    topics: "",
    webinarTitle: "",
    startDate: "",
    startTime: "",
    endTime: "",
  });

  const [errors, setErrors] = useState({
    instructorName: "",
    instructorRole: "",
    instructorCompany: "",
    topics: "",
    webinarTitle: "",
    startDate: "",
    startTime: "",
    endTime: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      instructorName: "",
      instructorRole: "",
      instructorCompany: "",
      topics: "",
      webinarTitle: "",
      startDate: "",
      startTime: "",
      endTime: "",
    };

    if (!formValues.instructorName.trim()) {
      newErrors.instructorName = "Instructor Name is required";
      valid = false;
    }
    if (!formValues.instructorRole.trim()) {
      newErrors.instructorRole = "Instructor Role is required";
      valid = false;
    }
    if (!formValues.instructorCompany.trim()) {
      newErrors.instructorCompany = "Instructor Company is required";
      valid = false;
    }
    if (!formValues.topics.trim()) {
      newErrors.topics = "Topics are required";
      valid = false;
    }
    if (!formValues.webinarTitle.trim()) {
      newErrors.webinarTitle = "Webinar Title is required";
      valid = false;
    }
    if (!formValues.startDate) {
      newErrors.startDate = "Start Date is required";
      valid = false;
    }
    if (!formValues.startTime) {
      newErrors.startTime = "Start Time is required";
      valid = false;
    }
    if (!formValues.endTime) {
      newErrors.endTime = "End Time is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    },
    []
  );

  const handleCreateWebinar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newWebinar: WebinarData = {
      id: editWeb?.id || `webinar-${Math.random().toString(36).substr(2, 9)}`,
      name: formValues.instructorName,
      imgUrl: selectedImage,
      role: formValues.instructorRole,
      company: formValues.instructorCompany,
      topics: formValues.topics.split(",").map((topic) => topic.trim()),
      webinarTitle: formValues.webinarTitle,
      startDate: new Date(formValues.startDate).toISOString().split("T")[0],
      startTime: formValues.startTime,
      endTime: formValues.endTime,
    };

    dispatch(
      updateWebinars(
        editWeb
          ? webinars.map((webinar) =>
              webinar.id === editWeb.id ? newWebinar : webinar
            )
          : [...webinars, newWebinar]
      )
    );

    onClose();
  };

  useEffect(() => {
    if (editWeb) {
      setFormValues({
        instructorName: editWeb.name || "",
        instructorRole: editWeb.role || "",
        instructorCompany: editWeb.company || "",
        topics: editWeb.topics.join(", ") || "",
        webinarTitle: editWeb.webinarTitle || "",
        startDate: editWeb.startDate
          ? new Date(editWeb.startDate).toISOString().split("T")[0]
          : "",
        startTime: editWeb.startTime || "",
        endTime: editWeb.endTime || "",
      });
    }
  }, [editWeb]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center">
      <div
        className="bg-white rounded-lg md:w-[50vw] w-[80vw] max-h-[95vh] 
         flex flex-col justify-start border border-red-300 overflow-y-auto"
      >
        <div className="flex justify-between p-2 items-center border-b border-gray-500 pb-3">
          <h2 className="text-lg font-bold">Create Webinar</h2>
          <FaTimes className="cursor-pointer text-gray-500" onClick={onClose} />
        </div>
        <form
          onSubmit={handleCreateWebinar}
          className="flex flex-col justify-between gap-5 px-5 pb-5 text-gray-700"
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="pt-3 text-xl flex items-start col-span-1">
              <GoPeople />
            </div>
            <div className="col-span-11">
              <h3 className="font-semibold text-[3vh]">Instructor Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="space-y-2 flex flex-col">
                  <InputField
                    label="Instructor Name"
                    required
                    placeholder="Type the instructor name"
                    name="instructorName"
                    onChange={handleChange}
                    value={formValues.instructorName}
                    error={errors.instructorName}
                  />
                  <InputField
                    label="Instructor Role"
                    required
                    placeholder="Type the instructor role"
                    name="instructorRole"
                    onChange={handleChange}
                    value={formValues.instructorRole}
                    error={errors.instructorRole}
                  />
                  <InputField
                    label="Instructor Company"
                    required
                    placeholder="Type the instructor company"
                    name="instructorCompany"
                    onChange={handleChange}
                    value={formValues.instructorCompany}
                    error={errors.instructorCompany}
                  />
                </div>
                <div className="space-y-2">
                  <InputField
                    label="Instructor Image"
                    isFileInput
                    onChange={handleImageChange}
                    value={selectedImage}
                    name=""
                  />
                  <InputField
                    label="Topics (comma separated)"
                    required
                    placeholder="Type the topics"
                    name="topics"
                    onChange={handleChange}
                    value={formValues.topics}
                    error={errors.topics}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="pt-2 text-2xl flex items-start col-span-1">
              <GoDeviceCameraVideo />
            </div>
            <div className="col-span-11">
              <h3 className="font-semibold text-md">Webinar Details</h3>
              <div className="space-y-2">
                <InputField
                  label="Webinar Title"
                  required
                  placeholder="Type the webinar title"
                  name="webinarTitle"
                  onChange={handleChange}
                  value={formValues.webinarTitle}
                  error={errors.webinarTitle}
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <InputField
                    label="Start Date"
                    required
                    type="date"
                    name="startDate"
                    onChange={handleChange}
                    value={formValues.startDate}
                    error={errors.startDate}
                  />
                  <InputField
                    label="Start Time"
                    required
                    type="time"
                    name="startTime"
                    onChange={handleChange}
                    value={formValues.startTime}
                    error={errors.startTime}
                  />
                  <InputField
                    label="End Time"
                    required
                    type="time"
                    name="endTime"
                    onChange={handleChange}
                    value={formValues.endTime}
                    error={errors.endTime}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-5 pt-3 border-t border-gray-200">
            <button
              type="submit"
              className="bg-blue-700 text-white px-3 py-1 rounded-lg"
            >
              {editWeb ? "Update Webinar" : "Create Webinar"}
            </button>
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateWeb;
