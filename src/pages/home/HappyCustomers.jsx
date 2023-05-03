import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

const HappyCustomers = () => {
	return (
		<div className='my-container grid grid-cols-1 md:grid-cols-2 gap-10'>
			<div className='flex flex-col items-center'>
				<ChatBubbleLeftRightIcon className='w-10 h-10 p-2 rounded-full bg-[#fd6d24] text-white my-5' />
				<p className='max-w-lg text-center'>
					"We have no regrets! Food should be nominated for service of the
					year.I have gotten at least 50 times the value from food. Definitely
					worth the investment."
				</p>
				<img
					src='https://tinyurl.com/vxmcjb9a'
					className='w-20 h-20 rounded-full my-5'
				/>
				<h2 className='text-xl font-semibold'>Atique Muzahid</h2>
			</div>
			<div className='flex flex-col items-center'>
				<ChatBubbleLeftRightIcon className='w-10 h-10 p-2 rounded-full bg-[#fd6d24] text-white my-5' />
				<p className='max-w-lg text-center'>
					"Eagerness it delighted pronounce repulsive furniture. Excuse few the
					remain highly feebly add manner say. It high at my mind by roof. No
					wonder in dinner."
				</p>
				<img
					src='https://tinyurl.com/8crrt6x7'
					className='w-20 h-20 rounded-full my-5'
				/>
				<h2 className='text-xl font-semibold'>Saleh Nayeem</h2>
			</div>
		</div>
	);
};

export default HappyCustomers;
