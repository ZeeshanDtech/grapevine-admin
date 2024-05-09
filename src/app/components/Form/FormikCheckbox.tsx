import React from "react";
import clsx from "clsx";
import {
	ErrorMessage,
	Field,
} from "formik";

interface FormikCheckboxProps {
	name: string;
	type?: string;
	id?: string;
	label?: string;
	error?: any;
	touch?: any;
	className?: string;
	onClick?: void;
	onChange?: void;
	marginBottomClass?:string;
}

const FormikCheckbox: React.FC<FormikCheckboxProps> = ({
	name,
	type = "checkbox",
	id,
	className,
	label,
	error,
	touch,
	marginBottomClass = 'mb-6',
}) => {

	return (
		<div className={`fv-row ${marginBottomClass}`}>
			<Field
				type={type}
				name={name}
				id={id}
				className={clsx(
					{
						[className || ""]: !!className,
						"is-invalid": error && touch,
						"is-valid": error && touch,
					}
				)}
				autoComplete="off"

			/>
			<label htmlFor={id}></label>
			<ErrorMessage
				name={name}
				className="invalid-feedback"
				component="div"
			/>
		</div>
	);
};

export default FormikCheckbox;
