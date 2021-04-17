import React from 'react';

const Clock = () => {
	const current = new Date();
	const hoursStr = current.getHours();
	const minsStr = current.getMinutes();

	return (
		<div className='bg-clock h-8 w-auto flex justify-center items-center'>
			<p className='text-white px-5'>
				{hoursStr}:{minsStr}PM
			</p>
		</div>
	);
};

export default Clock;
