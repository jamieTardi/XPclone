import React from 'react';
import { Taskbar, Icons } from './index';

const Desktop = () => {
	return (
		<div className='desktop-main w-full h-full bg-center relative bg-cover'>
			<Icons />
			<Taskbar />
		</div>
	);
};

export default Desktop;
