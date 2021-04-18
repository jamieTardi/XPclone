import React, { useState, useEffect, useRef } from 'react';

const Clock = () => {
	const current = new Date();
	const [hoursStr, setHourStr] = useState(current.getHours());
	const [minsStr, setMinsStr] = useState(current.getMinutes());
	const [secsStr, setSecsStr] = useState(current.getSeconds());

	useEffect(() => {
		const interval = setInterval(() => {
			setSecsStr((secsStr) => secsStr + 1);
			setHourStr(current.getHours());
			setMinsStr((minsStr) => (minsStr = current.getMinutes()));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='bg-clock h-8 w-auto flex justify-center items-center'>
			<p className='text-white px-5'>
				{hoursStr}:{minsStr}
				{/* {secsStr < 60 ? secsStr : setSecsStr(current.getSeconds())} */}
				{hoursStr >= 12 ? 'pm' : 'am'}
			</p>
		</div>
	);
};

export default Clock;
