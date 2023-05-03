import React from 'react';

const FeaturedFood = () => {
	return (
		<div className='card bg-base-100 shadow-xl'>
			<figure>
				<img
					src='https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg'
					alt='Biriyani'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>Biriyani</h2>
				<p>
					In this dish for mutton biryani, layers of mutton are cooked with
					saffron-infused milk in a "dum" technique.
				</p>
				<div className='card-actions justify-end'>
					<div className='rating rating-sm'>
						<input
							type='radio'
							name='rating-6'
							className='mask mask-star-2 bg-orange-400'
						/>
						<input
							type='radio'
							name='rating-6'
							className='mask mask-star-2 bg-orange-400'
							checked
						/>
						<input
							type='radio'
							name='rating-6'
							className='mask mask-star-2 bg-orange-400'
						/>
						<input
							type='radio'
							name='rating-6'
							className='mask mask-star-2 bg-orange-400'
						/>
						<input
							type='radio'
							name='rating-6'
							className='mask mask-star-2 bg-orange-400'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedFood;
