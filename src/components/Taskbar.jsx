import React from 'react';

const Taskbar = () => {
	return (
		<div className='taskbar absolute bottom-0 w-full h-8 bg-primary'>
			<button className='bg-secondary w-20 h-8 text-white'>Start</button>
		</div>
	);
};

export default Taskbar;
