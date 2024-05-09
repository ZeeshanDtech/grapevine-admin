import React from "react";
import clsx from "clsx";
import { ErrorMessage, Field } from "formik";

interface FormikSelectBoxProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  touch?: boolean;
  className?: string;
  children: React.ReactNode; // To pass the select options
}

const FormikkSelectBox: React.FC<FormikSelectBoxProps> = ({
  id,
  name,
  type = "text",
  placeholder,
  label,
  error,
  touch,
  className,
  children, // Receive options as children
}) => {
  return (
    <div className="fv-row mb-5">
      {label && (
        <label className={clsx("mb-2 required", className)}>{label}</label>
      )}
      <Field
        component="select"
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        className={clsx({
          "form-control bg-transparent": true,
          "is-invalid": error && touch,
          "is-valid": error && touch,
        })}
        autoComplete="off"
      >
        {children} {/* Render select options */}
      </Field>
      <ErrorMessage name={name} className="invalid-feedback" component="div" />
    </div>
  );
};

export default FormikkSelectBox;
