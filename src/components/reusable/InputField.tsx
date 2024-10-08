import React from "react";

interface InputFieldProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | null;
  accept?: string;
  name: string;
  isFileInput?: boolean;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  required = false,
  placeholder,
  type = "text",
  onChange,
  value,
  accept,
  name,
  isFileInput = false,
  error = "", 
}) => {
  return (
    <div className="mb-1">
      <label className="flex items-center justify-between text-[.8rem] font-medium">
        <span className="flex items-center">
          {label}
          {required && <span className="text-red-500">*</span>}
        </span>
        {error && <span className="text-[.9vh] text-red-500 ml-2">{error}</span>}
      </label>
      {isFileInput ? (
        <div className="border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-200 md:w-[6rem] md:h-[6rem] sm:max-w-[6rem]">
          <input
            type="file"
            name={name}
            accept={accept}
            className="hidden"
            id={`upload-${label.toLowerCase().replace(/\s+/g, "-")}`}
            onChange={onChange}
          />
          <label
            htmlFor={`upload-${label.toLowerCase().replace(/\s+/g, "-")}`}
            className="w-full h-full flex items-center justify-center"
          >
            {value ? (
              <img
                src={typeof value === "string" ? value : ""}
                alt="Selected"
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-gray-500 text-5xl -translate-y-1">+</span>
            )}
          </label>
        </div>
      ) : (
        <input
          type={type}
          className={`px-[1em] mt-[.5em] w-full border text-sm border-gray-300 rounded bg-gray-100 text-gray p-[.1em] box-border focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : ''}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value ?? ""}
          name={name}
        />
      )}
    </div>
  );
};

export default InputField;
