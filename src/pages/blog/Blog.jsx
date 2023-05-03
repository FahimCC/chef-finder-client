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
								A controlled component is a component that is controlled by
								React state, while an uncontrolled component is a component that
								maintains its own internal state.
							</p>
							<p>
								In controlled component, The parent component has held over the
								form data & easier to debug. In uncontrolled component, The DOM
								itself holds control over the data & more difficult to debug.
							</p>
						</div>
					</div>
					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							2. How to validate React props using PropTypes.
						</h3>
						<div className='text-base md:text-lg font-normal'>
							<strong className='active'>Answer:</strong>
							<p>
								PropTypes are simply a mechanism that ensures that the passed
								value is of the correct datatype. This makes sure that we don’t
								receive an error at the very end of our app by the console which
								might not be easy to deal with.
							</p>
							<p>
								PropTypes are objects with a key and a value pair where the
								‘key’ is the name of the prop while the value represents the
								type or class by which they are defined. Syntax.
							</p>
							<code>
								{`import React from 'react';
									import { PropTypes } from "prop-types";
									const Count = (props) => {
										return (<>.........</>
									};
									Count.propTypes = {
										name: PropTypes.string,
										age: PropTypes.number,
										address: PropTypes.object,
										friends: PropTypes.array,
									}
									export default Count;`}
							</code>
						</div>
					</div>
					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							3. Tell us the difference between nodejs and express js.
						</h3>
						<div className='text-base md:text-lg font-normal'>
							<strong className='active'>Answer:</strong>
							<p>
								NodeJS is the package, which provides the JavaScript run-time
								environment, whereas ExpressJs is a node js web application
								framework that helps us to handle requests and responses.
							</p>
							<p>
								Node js is an open-source and cross-platform that is used to
								execute JavaScript code outside of a browser. Express js is used
								to develop complete web applications such as single-page,
								multi-page, and hybrid web applications and APIs.
							</p>
							<p>
								ExpressJs is built on Node.js. On the other hand, NodeJs is
								built on Google’s V8 engine.
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
								A custom hook is a special JavaScript function whose name starts
								with 'use' and can be used to call other hooks. Hooks are
								reusable functions.
							</p>
							<p>
								We will create a custom hook, when you have component logic that
								needs to be used by multiple components, we can extract that
								logic to a custom Hook. Example: useFetch.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
