import { FC } from 'react';
import classes from './baseinput.module.css';

interface IProps {
	id: string;
	name: string;
	value: string | number;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required: boolean;
	type: string;
	min?: number;
	max?: number;
}

const BaseInput: FC<IProps> = ({
	id,
	name,
	value,
	change,
	required,
	type,
	min,
	max,
}) => {
	return (
		<>
			<input
				id={id}
				name={name}
				value={value}
				required={required}
				onChange={change}
				type={type}
				min={min}
				max={max}
				className={classes['base-input']}
			/>
		</>
	);
};

export default BaseInput;
