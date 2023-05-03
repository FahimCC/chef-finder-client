import React from 'react';

const SectionTitle = ({ children }) => {
	return (
		<div className='mt-28 mb-16 text-center'>
			<h2 className='text-4xl font-bold Active'>{children}</h2>
			<p className='max-w-md mx-auto my-2 p-2'>
				Being a chef is about feeding people, which is part of the story of all
				humanity.
			</p>
		</div>
	);
};

export default SectionTitle;
