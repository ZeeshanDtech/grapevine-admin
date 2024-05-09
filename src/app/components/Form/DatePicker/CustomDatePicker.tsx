import clsx from "clsx";
import { format } from "date-fns";
import { ErrorMessage } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatePicker.scss";

interface DatePickerProps {
  id?: string;
  label?: string;
  className?: string;
  name: string;
  placeholder?: string;
  error?: any;
  touch?: any;
  paddingClass?: string;
  marginBottom?: string;
  titleMarginBottom?: string;
  titleSize?: string
  titleLineHeight?: string
  titleFontWeight?: string
  selected?: string
  onChange?: any
  onBlur?: any
  maxDate?: Date | number | null
  minDate?: Date | null | any
  disabled?: boolean
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  id = '',
  label,
  className = '',
  name,
  marginBottom = 'mb-6',
  titleMarginBottom = 'mb-9px',
  titleSize = 'fs18',
  titleLineHeight = 'lh27',
  titleFontWeight = 'fw-600',
  selected = '',
  error,
  touch,
  maxDate = null,
  minDate = null,
  onBlur,
  disabled = false,
  ...props
}) => {
  const handleOnChange = (date: any) => {
    props.onChange(format(date, 'dd-MMM-yyyy'));
  };

  return (
    <div className={`${marginBottom}`}>
      {label && (
        <label
          htmlFor={id}
          className={`${titleSize} ${titleFontWeight} text-light ${titleLineHeight} ${titleMarginBottom}`}
        >
          {label}
        </label>
      )}
      <div className='customDatePicker'>
        <DatePicker
          showIcon
          placeholderText={'select a date'}
          selected={selected ? new Date(selected) : null}
          onChange={handleOnChange}
          icon="flaticon-calendar-2"
          onBlur={onBlur}
          autoComplete="off"
          //@ts-ignore
          maxDate={maxDate}
          minDate={minDate}
          dateFormat={'dd-MMM-yyyy'}
          className={clsx(
            {
              [className || ""]: !!className,
              "is-invalid": error && touch,
              "is-valid": error && touch,

            })}
          name={name}
          disabled={disabled}
        />
        <ErrorMessage
          name={name}
          className="invalid-feedback  d-block"
          component="div"
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;