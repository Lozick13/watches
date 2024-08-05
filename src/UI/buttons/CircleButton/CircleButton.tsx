import { FC, ReactNode } from 'react';
import classes from './circlebutton.module.css';

interface IProps {
	children: ReactNode;
	click?: () => void;
}

const CircleButton: FC<IProps> = ({ children, click }) => {
	return (
		<>
			<button className={classes['circle-button']} onClick={click}>
				{children}
			</button>
		</>
	);
};

export default CircleButton;
