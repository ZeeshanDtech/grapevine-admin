import React from "react";
import clsx from "clsx";
import "./input.scss"
import {
	ErrorMessage,
	Field,
	useField
} from "formik";
// @ts-ignore
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';


interface FormikInputProps {
	name: string;
	type?: string;
	placeholder?: string
	label?: string;
	error?: any;
	touch?: any;
	className?: string;
	classNameInsideInput?: string
	classNameRemove?: string
	paddingClass?: string;
	marginBottom?: string;
	titleMarginBottom?: string;
	titleSize?: string
	titleLineHeight?: string
	titleFontWeight?: string
	disabled?: boolean
	tagProps?: any
}

const FormikTagsInput: React.FC<FormikInputProps> = ({ 
	label,
	placeholder,
	error,
	touch,
	className,
	paddingClass = 'ps-30px',
	marginBottom = 'mb-6',
	titleMarginBottom = 'mb-9px',
	titleSize = 'fs18',
	titleLineHeight = 'lh27',
	titleFontWeight = 'fw-600',
	tagProps,
	classNameInsideInput,
	classNameRemove,
	...props 
}) => {

	const [field, meta, helpers] = useField(props);
	
	const handleAddition = (tag: any) => {
		const tags = [...field.value, tag]
		helpers.setValue(tag)  // update the Formik state
	}

	const handleDelete = (i: any) => {
		const tags = field.value.filter((tag: any, index: any) => index !== i)
		helpers.setValue(tags)  // update the Formik state
	}
	
	return (
		<div className={`fv-row ${marginBottom}`}>
			{label && <label className={`${titleSize} ${titleFontWeight} text-light ${titleLineHeight} ${titleMarginBottom} required`}>{label}</label>}
		
			<TagsInput
				value={field.value}
				className={clsx(
					className, 'form-control',
					{
						[className || ""]: !!className,
						[paddingClass || ""]: !!paddingClass,
						"is-invalid": error && meta.touched,
						"is-valid": error && meta.touched,
						
					}
				)}
				inputProps={{
					placeholder: placeholder,
					maxLength: 50,
					className: (field.value.length >= 10 && 'd-none') || 'react-tagsinput-input'
				}}
				onlyUnique={true}
				maxTags={20}
				// Handle tags input changes
				onChange={handleAddition}
				onChangeRemove={handleDelete}
				tagProps={{
					className: classNameInsideInput,
					classNameRemove: classNameRemove
				}}
				{...props}
			/>
			<ErrorMessage
				name={field.name}
				className="invalid-feedback"
				component="div"
			/>
		</div>
	);
};

export default FormikTagsInput;
