import React from "react";
import clsx from "clsx";
import {
	ErrorMessage,
	Field,
} from "formik";

interface FormikTextAreaProps {
	name: string;
	type?: string;
	placeholder?: string
	label?: string;
	error?: any;
	touch?: any;
	className?: string;
	value?:string
	onChange?: void
	paddingClass?: string;
	marginBottom?: string;
	titleMarginBottom?: string;
	titleSize?: string
	titleLineHeight?: string
	titleFontWeight?: string
}

const FormikTextArea: React.FC<FormikTextAreaProps> = ({
	name,
	type = "textarea",
	placeholder,
	label,
	error,
	touch,
	className,
	value,
	paddingClass,
	marginBottom = 'mb-6',
	titleMarginBottom = 'mb-9px',
	titleSize = 'fs18',
	titleLineHeight = 'lh27',
	titleFontWeight = 'fw-600',
	
}) => {
	const props  = value ? {value}: {}
	return (
		<div className={`fv-row ${marginBottom}`}>
			{label && <label className={`${titleSize} ${titleFontWeight} text-dark ${titleLineHeight} ${titleMarginBottom}`}>{label}</label>}
			<Field
				type={type}
				as='textarea'
				placeholder={placeholder}
				name={name}
				className={clsx(
					!className || "form-control borderPrimary1",
					{
						[className || ""]: !!className,
						"is-invalid": error && touch,
						"is-valid": error && touch,
					}
				)}
				autoComplete="off"
				{...props}
				// {value && value={value}}


			/>
			<ErrorMessage
				name={name}
				className="invalid-feedback"
				component="div"
			/>
		</div>
	);
};

export default FormikTextArea;
