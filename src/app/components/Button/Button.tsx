import React from "react";
import clsx from "clsx";
import { Spinner } from "react-bootstrap";
import "./button.scss";
interface ButtonProps {
	label: string;
	loader?: boolean;
	type?: "submit" | "button" | "reset" | undefined;
	btnSize?: string;
	paddingClass?: string;
	btnWidth?: string;
	onClick?: any
	disable?: boolean;
	className?: any;
	isIconTrue?: string;
}

const Button: React.FC<ButtonProps> = ({
	type = "submit",
	label,
	loader = false,
	btnSize = 'fs18',
	paddingClass = 'px-15 py-3',
	btnWidth = 'w-100',
	onClick,
	disable = false,
	className,
	isIconTrue,
	...rest
}) => {
	return (

		<button
			type={type}
			id="kt_sign_up_submit"
			className={clsx({
				[btnSize]: true,
				"form_btn fw-bolder btn-primary btn rounded-25 btnForm btnPrimary d-flex align-items-center justify-content-center": true,
				[btnWidth]: !loader,
				[paddingClass]: !loader,
				"btn-rounded px-0 py-0 loaderClass loaderCenter": loader,
				[className]: className,
			})
			}
			disabled={disable}
			onClick={onClick}
			{...rest}
		>
			{
				loader ? (
					<Spinner
						as="span"
						animation="border"
						role="status"
						aria-hidden={true}
					/>
				) : (
					<>
						{isIconTrue &&
							{ isIconTrue }
						}
						<span>{label}</span>
					</>
				)}
		</button >
	);
};

export default Button;
