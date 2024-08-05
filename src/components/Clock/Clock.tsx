import { FC, useEffect, useState } from 'react';
import CircleButton from '../../UI/buttons/CircleButton/CircleButton';
import classes from './clock.module.css';

interface IProps {
	name: string;
	timezone: number;
}

const Clock: FC<IProps> = ({ name, timezone }) => {
	const offset =
		(timezone + new Date().getTimezoneOffset() / 60) * 60 * 60 * 1000;

	const [showComponent, setShowComponent] = useState(true);

	const [hourDeg, setHourDeg] = useState(0);
	const [minuteDeg, setMinuteDeg] = useState(0);
	const [secondDeg, setSecondDeg] = useState(0);

	const updateClock = () => {
		const currentTime = new Date(new Date().getTime() + offset);

		setHourDeg(currentTime.getHours() * 30 + currentTime.getMinutes() * 0.5);
		setMinuteDeg(currentTime.getMinutes() * 6 + currentTime.getSeconds() * 0.1);
		setSecondDeg(currentTime.getSeconds() * 6);
	};

	useEffect(() => {
		updateClock();
		const clockInterval = setInterval(updateClock, 1000);

		return () => clearInterval(clockInterval);
	});

	return (
		<>
			{showComponent && (
				<div className={classes['clock']}>
					<div className={classes['clock__delete']}>
						<CircleButton
							click={() => {
								setShowComponent(false);
							}}
						>
							x
						</CircleButton>
					</div>

					<span>{name}</span>

					<div className={classes['clock__body']}>
						<div
							className={
								classes['clock__arrow'] + ' ' + classes['clock__arrow_sec']
							}
							style={{ rotate: `${secondDeg}deg` }}
						></div>
						<div
							className={
								classes['clock__arrow'] + ' ' + classes['clock__arrow_min']
							}
							style={{ rotate: `${minuteDeg}deg` }}
						></div>
						<div
							className={
								classes['clock__arrow'] + ' ' + classes['clock__arrow_hour']
							}
							style={{ rotate: `${hourDeg}deg` }}
						></div>
					</div>
				</div>
			)}
		</>
	);
};

export default Clock;
