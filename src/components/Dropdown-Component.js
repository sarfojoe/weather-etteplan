import Select from 'react-select';
import { colors } from '../swatch';

const styles = {
	indicatorSeparator: (provided, state) => ({
		...provided,
		width: 0,
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		color: colors.primaryHeading,
	}),
	container: (provided, state) => ({
		...provided,
        width: '100%',
		minWidth: 305,
        marginBottom: 15
		// border: `1px solid ${colors.edge}`,
	}),
	placeholder: (provided, state) => {
		// console.log({ provided });
		return {
			...provided,
		color: colors.primaryHeading,
            textAlign: 'left'
		};
	},
	control: (provided, state) => {
		console.log({ provided });
		return {
			...provided,
		borderRadius: 5,
		border: `1px solid ${colors.edge}`,
            paddingLeft: 10
		};
	},
	singleValue: (provided, state) => {
		console.log({ provided });
		return {
			...provided,
            textAlign: 'left'
	}
}
};

Dropdown.defaultProps = {
	onChange: (val) => console.log(val),
	options: [],
};

export default function Dropdown({ options, onChange }) {
	return (
		<Select
			isSearchable={false}
			placeholder={options.length > 0 ? options[0].label : 'Select'}
			onChange={onChange}
			options={options}
			styles={styles}
		/>
	);
}