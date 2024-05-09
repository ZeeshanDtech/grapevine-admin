import React, { useState } from "react";
import { ErrorMessage, Field } from "formik";
import clsx from "clsx";

interface FormikPasswordInputProps {
	name: string;
	label: string;
	placeholder: string;
	error: any;
	touch: any;
	className?: string;
}

const FormikPasswordInput: React.FC<FormikPasswordInputProps> = ({
	name,
	label,
	placeholder,
	error,
	touch,
	className
}) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="fv-row mb-6">
			{label && <label className={`fs18 fw-600 text-light lh27 mb-9px required`}>{label}</label>}
			<div style={{ position: "relative" }}>
				<Field
					type={showPassword ? 'text' : 'password'}
					placeholder={placeholder}
					name={name}
					className={clsx(
						"form-control bg-transparen rounded-10 fs16 text-light lh25 fw-normal borderPrimary1 h50 ps-30px",
						{
							[className || ""]: !!className,
							"is-invalid": error && touch,
							"is-valid": error && touch,
						}
					)}
					autoComplete="off"
				/>
				<button
					type="button"
					style={{
						position: "absolute",
						right: "10px",
						top: "15px",
						background: "none",
						border: "none"
					}}
					onClick={() => setShowPassword(!showPassword)}
				>
					{showPassword ? <i className="fa-regular fa-eye-slash fs16 text-auth-secondary"></i> :
						<i className="fa-regular fa-eye fs16 text-auth-secondary"></i>
					}
				</button>

			</div>
			<ErrorMessage
				name={name}
				className={clsx({ 'invalid-feedback': true, 'd-block': error && touch })}
				component="div"
			/>
		</div>
	);
};

export default FormikPasswordInput;