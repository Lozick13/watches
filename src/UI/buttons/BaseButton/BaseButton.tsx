import { FC, ReactNode } from 'react';
import classes from './basebutton.module.css';

interface IProps {
	children: ReactNode;
}

const BaseButton: FC<IProps> = ({ children }) => {
	return (
		<>
			<button className={classes['base-button']}>{children}</button>
		</>
	);
};

export default BaseButton;
