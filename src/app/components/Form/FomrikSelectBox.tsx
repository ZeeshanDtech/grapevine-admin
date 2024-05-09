import React from "react";
import { useField, useFormikContext } from "formik";

import Select, {
	// OptionProps,

	// OptionTypeBase,
	// StylesConfig,
} from "react-select";
// import ReactSelect from "../Form/ReactSelect";

interface FormikSelectBoxProps {
	name: string;
	options: { value: string | number; label: string }[];
	label?: string;
	labelClassName?: string;
	optionClassName?: string;
	error?: any;
	placeHolder?: string;
	touch?: any;
	isSearchable?: boolean;
	onChange?: (selectedOption: { value: string; label: string }) => void;
	selected?: boolean;
	menuPlacement?: 'top' | 'bottom' | 'auto';
	drpdownHeight?: string;
	isClearable?: boolean;
	marginBottom?: string;
	titleMarginBottom?: string;
	titleSize?: string
	titleLineHeight?: string
	titleFontWeight?: string
	disabled?: boolean;
}

const FormikSelectBox: React.FC<FormikSelectBoxProps> = (props) => {
	const { name, options, label, labelClassName, optionClassName,
		error, touch, onChange, placeHolder, isSearchable = true,
		drpdownHeight = 50,
		isClearable = true,
		marginBottom = 'mb-6',
		titleMarginBottom = 'mb-9px',
		titleSize = 'fs18',
		titleLineHeight = 'lh27',
		titleFontWeight = 'fw-600',
		disabled = false,
		...rest } = props;

	const { setFieldValue } = useFormikContext();
	const [field, meta, helpers] = useField(name);



	const handleChange = (selectedOption: any) => {
		setFieldValue(name, selectedOption ? selectedOption.value : "");

		if (props.onChange) {
			props.onChange(selectedOption);
		}
		// helpers.setTouched(true);
	};

	const selectedOption = options.find(
		(option) => {
			return option.value === field.value
		}
	);

	const showError = touch && error;
	const borderColor: string = (error && touch) ? "#dc3545;" : "#719603";
	const colourStyles = {
		control: (styles: object) => ({
			...styles,
			padding: "0.25rem 1rem",
			fontSize: "1.1rem",
			fontWeight: 500,
			lineHeight: 1.5,
			height: drpdownHeight,
			borderRadius: 10,
			color: "var(--bs-gray-700)",
			borderColor: borderColor,
			marginBottom: marginBottom,
			boxShadow: "none",
			"&:hover": {
				borderColor: borderColor,
			},
		}),
	};

	return (
		<div className={`${marginBottom}`}>
			{label &&
				<label htmlFor={name} className={labelClassName}>
					{label}
				</label>
			}
			<Select
				{...field}
				{...rest}
				options={options}
				value={selectedOption}
				onChange={handleChange}
				isSearchable={isSearchable}
				placeholder={placeHolder}

				onBlur={() => helpers.setTouched(true)}
				className={showError ? "is-invalid" : ""}
				styles={colourStyles}
				classNamePrefix=""
				isClearable={isClearable}
				isDisabled={disabled}
			// value = {
			// 	props.options.filter(option => 
			// 	   option.label === 'Some label')
			//  }
			/>

			{/* <ReactSelect
				{...field}
				{...rest}
				options={options}
				value={selectedOption}
				onChange={handleChange}
				onBlur={() => helpers.setTouched(true)}
				styles={colourStyles}
				classNamePrefix=""
				components={'select'}
			></ReactSelect> */}
			{showError && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};

export default FormikSelectBox;
