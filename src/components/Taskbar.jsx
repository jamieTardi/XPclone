import React from 'react';
import windowsIcon from '../assets/icons/48.ico';
import { Clock } from './index';

const Taskbar = () => {
	return (
		<div className='taskbar absolute bottom-0 w-full h-8 bg-primary flex items-center justify-between'>
			<button className='bg-secondary w-20 h-8 text-white flex justify-center items-center rounded -md'>
				<img src={windowsIcon} className='h-4 mr-1' />
				Start
			</button>
			<Clock />
		</div>
	);
};

export default Taskbar;
