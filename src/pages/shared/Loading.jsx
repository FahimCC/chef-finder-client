import React from 'react';

const Loading = () => {
	return (
		<div className='flex justify-center items-center h-[calc(100vh-88px)]'>
			<div className='w-20 h-20 border-8 border-dotted rounded-full animate-spin mt-5 border-secondary'></div>
		</div>
	);
};

export default Loading;
