import React from "react";
import { components } from "react-select";

import Select from "react-select";
import AsyncSelect from "react-select/async";

type SelectStyles = {
	control: (
	  provided: React.CSSProperties,
	  state: { isDisabled: boolean; isFocused: boolean }
	) => React.CSSProperties;
	singleValue: (
	  provided: React.CSSProperties,
	  state: { isDisabled: boolean }
	) => React.CSSProperties;
	valueContainer: (
	  provided: React.CSSProperties,
	  state: {}
	) => React.CSSProperties;
	dropdownIndicator: (
	  provided: React.CSSProperties,
	  state: {}
	) => React.CSSProperties;
	input: (
	  provided: React.CSSProperties,
	  state: {}
	) => React.CSSProperties;
	option: (
	  provided: React.CSSProperties,
	  state: {}
	) => React.CSSProperties;
	menu: (
	  provided: React.CSSProperties,
	  state: {}
	) => React.CSSProperties;
	multiValue: (
	  provided: React.CSSProperties,
	  state: {}
	) => React.CSSProperties;
	clearIndicator: (
	  provided: React.CSSProperties,
	  state: {}
	) => React.CSSProperties;
	multiValueLabel: (
	  provided: React.CSSProperties,
	  state: {}
	) => React.CSSProperties;
  };

  function getSelectStyles(
	multi: boolean,
	size: string = "",
	errors: null | string[] = null) {
	const suffix = size ? `-${size}` : "";
	const multiplicator = multi ? 2 : 1;
	return {
		control: (provided:any, { isDisabled, isFocused }:any) => ({
			...provided,
			backgroundColor: `var(--bs-select${
				isDisabled ? "-disabled" : ""
			}-bg)`,
			borderColor: `var(--bs-select${
				isDisabled ? "-disabled" : isFocused ? "-focus" : ""
			}-border-color)`,
			borderWidth: "var(--bs-select-border-width)",
			lineHeight: "var(--bs-select-line-height)",
			fontSize: `var(--bs-select-font-size${suffix})`,
			fontWeight: "var(--bs-select-font-weight)",
			minHeight: `calc((var(--bs-select-line-height)*var(--bs-select-font-size${suffix})) + (var(--bs-select-padding-y${suffix})*2) + (var(--bs-select-border-width)*2))`,
			":hover": {
				borderColor: "var(--bs-select-focus-border-color)",
			},
		}),
		singleValue: (
			{ marginLeft, marginRight, ...provided }:any,
			{ isDisabled }:any
		) => ({
			...provided,
			color: `var(--bs-select${isDisabled ? "-disabled" : ""}-color)`,
		}),
		valueContainer: (provided:any, state:any) => ({
			...provided,
			padding: `calc(var(--bs-select-padding-y${suffix})/${multiplicator}) calc(var(--bs-select-padding-x${suffix})/${multiplicator})`,
		}),
		dropdownIndicator: (provided:any, state:any) => ({
			height: "100%",
			width: "var(--bs-select-indicator-padding)",
			backgroundImage: "var(--bs-select-indicator)",
			backgroundRepeat: "no-repeat",
			backgroundPosition: `right var(--bs-select-padding-x) center`,
			backgroundSize: "var(--bs-select-bg-size)",
		}),
		input: ({ margin, paddingTop, paddingBottom, ...provided }:any, state:any) => ({
			...provided,
		}),
		option: (provided:any, state:any) => ({
			...provided,
			margin: `calc(var(--bs-select-padding-y${suffix})/2) calc(var(--bs-select-padding-x${suffix})/2)`,
		}),
		menu: ({ marginTop, ...provided }:any, state:any) => ({
			...provided,
		}),
		multiValue: (provided:any, state:any) => ({
			...provided,
			margin: `calc(var(--bs-select-padding-y${suffix})/2) calc(var(--bs-select-padding-x${suffix})/2)`,
		}),
		clearIndicator: ({ padding, ...provided }:any, state:any) => ({
			...provided,
			alignItems: "center",
			justifyContent: "center",
			height: "100%",
			width: "var(--bs-select-indicator-padding)",
		}),
		multiValueLabel: (
			{ padding, paddingLeft, fontSize, ...provided }:any,
			state:any
		) => ({
			...provided,
			padding: `0 var(--bs-select-padding-y${suffix})`,
			whiteSpace: "normal",
		}),
	};
}

function IndicatorSeparator() {
	return null;
}

function DropdownIndicator(props:any) {
	return (
		<components.DropdownIndicator {...props}>
			<span></span>
		</components.DropdownIndicator>
	);
}

function getSelectTheme(theme:any) {
	return {
		...theme,
		borderRadius: "var(--bs-border-radius)",
		colors: {
			...theme.colors,
			primary: "var(--bs-primary)",
			danger: "var(--bs-danger)",
		},
	};
}

const ReactSelect = ({ async = false, components, size = "sm", ...props }:any) => {
	const SelectType = async ? AsyncSelect : Select;
	return (
		<SelectType
			components={{
				DropdownIndicator,
				IndicatorSeparator,
				...components,
			}}
			theme={getSelectTheme}
			styles={getSelectStyles("isMulti" in props, size, props.errors)}
			{...props}
		/>
	);
};
export default ReactSelect;
