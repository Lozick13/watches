import { FC, ReactNode } from 'react';
import classes from './clocks.module.css';

interface IProps {
	children: ReactNode;
}

const Clocks: FC<IProps> = ({ children }) => {
	return (
		<>
			<article className={classes['clocks']}>{children}</article>
		</>
	);
};

export default Clocks;
