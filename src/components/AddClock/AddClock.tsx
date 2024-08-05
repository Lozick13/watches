import { FC, useState } from 'react';
import BaseButton from '../../UI/buttons/BaseButton/BaseButton';
import BaseInput from '../../UI/inputs/BaseInput/BaseInput';
import classes from './addclock.module.css';

const AddClock: FC<{ addClock: (name: string, timezone: number) => void }> = ({
	addClock,
}) => {
	const [name, setName] = useState<string>('0');
	const [timezone, setTimezone] = useState<number>(0);

	const handleAddClock = (e: React.FormEvent) => {
		e.preventDefault();
		addClock(name, timezone);
		setName('');
		setTimezone(0);
	};

	return (
		<>
			<form onSubmit={handleAddClock} className={classes['add-clock']}>
				<div className={classes['add-clock__field']}>
					<span>Название</span>
					<BaseInput
						id='name'
						name='name'
						value={name}
						required={true}
						change={(e: React.ChangeEvent<HTMLInputElement>) =>
							setName(e.target.value)
						}
						type='text'
					/>
				</div>
				<div className={classes['add-clock__field']}>
					<span>Временная зона</span>
					<BaseInput
						id='timezone'
						name='timezone'
						value={timezone}
						required={true}
						change={(e: React.ChangeEvent<HTMLInputElement>) =>
							setTimezone(parseInt(e.target.value))
						}
						type='number'
						min={-12}
						max={+12}
					/>
				</div>
				<BaseButton>Добавить</BaseButton>
			</form>
		</>
	);
};

export default AddClock;
