import React from 'react';
import Pdf from 'react-to-pdf';

const Blog = () => {
	const ref = React.createRef();
	return (
		<div className='w-full lg:w-[52%] mx-auto my-5'>
			<div className='text-center'>
				<Pdf targetRef={ref} filename='Blog.pdf'>
					{({ toPdf }) => (
						<button onClick={toPdf} className='btn-Primary rounded-lg my-8'>
							Download PDF
						</button>
					)}
				</Pdf>
			</div>
			<div ref={ref}>
				<div className='border-2 border-primary rounded-lg p-2 m-2 md:p-10 md:m-6'>
					<h1 className='text-3xl font-bold underline text-center mb-5'>
						BLog
					</h1>
					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							1. Tell us the differences between uncontrolled and controlled
							components.
						</h3>
						<div className='text-base md:text-lg font-normal '>
							<strong className='active'>Answer:</strong>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequatur est accusantium sint cum corporis quidem quo. Odit
								asperiores dolores amet sapiente eius harum delectus nobis,
								dolorem nemo dignissimos blanditiis accusantium.
							</p>
						</div>
					</div>
					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							2. How to validate React props using PropTypes
						</h3>
						<div className='text-base md:text-lg font-normal'>
							<strong className='active'>Answer:</strong>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
								fugiat repellat in, consequatur sit ullam numquam quaerat quo
								repellendus veritatis accusamus perspiciatis eius error, rerum
								quam minima ex quis nihil!
							</p>
						</div>
					</div>
					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							3. Tell us the difference between nodejs and express js.
						</h3>
						<div className='text-base md:text-lg font-normal'>
							<strong className='active'>Answer:</strong>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Consectetur non illo est ab necessitatibus blanditiis
								consequuntur possimus eum cum magnam! Minus quod repudiandae rem
								unde! Est qui consectetur corporis esse.
							</p>
						</div>
					</div>

					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							4. What is a custom hook, and why will you create a custom hook?
						</h3>
						<div className='text-base md:text-lg font-normal'>
							<strong className='active'>Answer:</strong>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Maiores, hic praesentium obcaecati tempora dolore aliquam
								ratione vel accusamus. Quisquam eos error obcaecati commodi
								explicabo asperiores eum mollitia maiores voluptatibus enim?
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
