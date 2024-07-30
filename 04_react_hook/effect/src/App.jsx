import { useEffect, useState } from "react";

function CountDown({ initialValue }) {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		if (value > 0) {
			setTimeout(() => setValue(value - 1), 1000);
		}
	}, [value]);

	return <h1>Countdown: {value}</h1>;
}

export default function App() {
	return <CountDown initialValue={10} />;
}
