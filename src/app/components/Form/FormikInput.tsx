import React from "react";
import clsx from "clsx";
import "./input.scss"
import {
	ErrorMessage,
	Field,
} from "formik";

interface FormikInputProps {
	name: string;
	type?: string;
	placeholder?: string
	label?: string;
	error?: any;
	touch?: any;
	className?: string;
	paddingClass?: string;
	marginBottom?: string;
	titleMarginBottom?: string;
	titleSize?: string;
	titleLineHeight?: string;
	titleFontWeight?: string;
	disabled?: boolean;
	domain?: any;
	domainFieldClass?: string;
}

const FormikInput: React.FC<FormikInputProps> = ({
	name,
	type = "text",
	placeholder,
	label,
	error,
	touch,
	className = 'h-50px',
	paddingClass = 'ps-30px',
	marginBottom = 'mb-6',
	titleMarginBottom = 'mb-9px',
	titleSize = 'fs18',
	titleLineHeight = 'lh27',
	titleFontWeight = 'fw-600',
	disabled = false,
	domain,
	domainFieldClass,
}) => {

	return (
		<div className={`fv-row ${marginBottom}`}>
			{label && <label className={`${titleSize} ${titleFontWeight} text-dark ${titleLineHeight} ${titleMarginBottom} required`}>{label}</label>}
			<div className="fieldBox">
				<Field
					type={type}
					placeholder={placeholder}
					name={name}
					className={clsx(
						"form-control bg-transparen rounded-10 fs16 text-light lh25 fw-normal borderPrimary1",
						{
							[className || ""]: !!className,
							[paddingClass || ""]: !!paddingClass,
							[domainFieldClass || ""]: domainFieldClass,
							"is-invalid": error && touch,
							"is-valid": error && touch,

						}
					)}
					autoComplete="off"
					disabled={disabled}
				/>
				{
					domain && <div className="fixedDomainBox fs16 fw-normal lh25 text-gray-400">@{domain}</div>
				}
			</div>
			<ErrorMessage
				name={name}
				className="invalid-feedback d-block"
				component="div"
			/>
		</div>
	);
};

export default FormikInput;
