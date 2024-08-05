import { useState } from 'react';
import './App.css';
import AddClock from './components/AddClock/AddClock';
import Clock from './components/Clock/Clock';
import Clocks from './components/Clocks/Clocks';

function App() {
	const [clocks, setClocks] = useState<{ name: string; timezone: number }[]>(
		[]
	);

	const addClock = (name: string, timezone: number) => {
		setClocks(prevClocks => [...prevClocks, { name, timezone }]);
	};

	return (
		<>
			<AddClock addClock={addClock} />
			<Clocks>
				{clocks.map((clock, index) => (
					<Clock
						key={index}
						name={clock.name}
						timezone={clock.timezone}
					></Clock>
				))}
			</Clocks>
		</>
	);
}

export default App;
