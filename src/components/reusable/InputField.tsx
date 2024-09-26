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
}) => {
  return (
    <div>
      <label className="block text-sm font-medium">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {isFileInput ? (
        <div className="border border-gray-300 rounded flex items-center justify-center cursor-pointer w-32 h-32">
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
              <span className="text-gray-500">Click to add image</span>
            )}
          </label>
        </div>
      ) : (
        <input
          type={type}
          className="mt-1 w-full border border-gray-300 rounded bg-gray-100 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
