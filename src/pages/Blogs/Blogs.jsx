import React from "react";

const Blogs = () => {
	return (
		<div className='mt-10'>
			<div className='flex flex-col items-center'>
				<h4 className='text-4xl font text-red-400 text-center'>Blog Page</h4>
				<button className='btn btn-error mt-5 text-white'>Download PDF</button>
			</div>
			<div className='card w-10/12 lg:w-8/12 bg-base-100 shadow-xl mx-auto mt-10'>
				<div className='card-body'>
					<div className='card-title'>
						Question 1: What is the differences between uncontrolled and
						controlled components?
					</div>
					<p>
						<span className='font-semibold'>Answer: </span> In React, controlled
						components refer to components that have their state and behavior
						controlled by the parent component. These components rely on props
						passed down from the parent component to update their state and
						behavior. Uncontrolled components refer to components that manage
						their own state internally. They use a ref to access the DOM
						element's current value and update the state accordingly. Controlled
						components have the advantage of being more predictable and easier
						to debug because the state is controlled by the parent component.
						However, this can also make them more complex to implement in larger
						projects with many levels of nested components. On the other hand,
						uncontrolled components are simpler to implement, but they can be
						more difficult to track and manage in larger projects. They are also
						harder to test as the internal state is not exposed.
					</p>
				</div>
			</div>
			<div className='card w-10/12 lg:w-8/12 bg-base-100 shadow-xl mx-auto mt-10'>
				<div className='card-body'>
					<div className='card-title'>
						Question 2: How to validate React props using PropTypes?
					</div>
					<p>
						<span className='font-semibold'>Answer: </span> Props and PropTypes
						are important mechanisms for passing read-only attributes between
						React components. We can use React props, short for properties, to
						send data from one component to another. If a component receives the
						wrong type of props, it can cause bugs and unexpected errors in your
						app. React is a JavaScript library used for creating interactive web
						frontend applications. It is one of the most popular libraries
						because of its easy-to-use API. We combine components into an app by
						passing data from parent components to child components. To do this,
						we pass data with props. Props are like HTML attributes, but they
						can contain dynamic data. A parent component passes props down to
						child components. And child components receive them. We can pass any
						data as props. Therefore, we need a way to validate their data type
						so that the child component gets what they expect. Common way to
						validate prop data types with the prop-types library.
					</p>
				</div>
			</div>
			<div className='card w-10/12 lg:w-8/12 bg-base-100 shadow-xl mx-auto mt-10'>
				<div className='card-body'>
					<div className='card-title'>
						Question 3: What is the difference between nodejs and express js.?
					</div>
					<p>
						<span className='font-semibold'>Answer: </span> Node.js: Node.js is
						an open source and cross-platform runtime environment for executing
						JavaScript code outside of a browser. You need to remember that
						NodeJS is not a framework and its not a programming language. Most
						of the people are confused and understand its a framework or a
						programming language. We often use Node.js for building back-end
						services like APIs like Web App or Mobile App. Its used in
						production by large companies such as Paypal, Uber, Netflix, Walmart
						and so on. Express.js: Express is a small framework that sits on top
						of Node.js web server functionality to simplify its APIs and add
						helpful new features. It makes it easier to organize your
						application functionality with middle ware and routing. It adds
						helpful utilities to Node.js HTTP objects. It facilitates the
						rendering of dynamic HTTP objects.
					</p>
				</div>
			</div>
			<div className='card w-10/12 lg:w-8/12 bg-base-100 shadow-xl mx-auto mt-10'>
				<div className='card-body'>
					<div className='card-title'>
						Question 4: What is a custom hook, and why will you create a custom
						hook?
					</div>
					<p>
						<span className='font-semibold'>Answer: </span> Custom Hooks are
						reusable functions. When you have component logic that needs to be
						used by multiple components, we can extract that logic to a custom
						Hook. Custom Hooks start with "use". Unlike a React component, a
						custom Hook does not need to have a specific signature. We can
						decide what it takes as arguments, and what, if anything, it should
						return. In other words, its just like a normal function Custom Hooks
						allow us to access the React ecosystem in terms of hooks, which
						means we have access to all the known hooks like useState, useMemo,
						useEffect, etc. This mechanism enables the separation of logic and
						view. Why Should You Use It? When we want to share logic between two
						JavaScript functions, we extract it to a third function. Both
						components and Hooks are functions, so this works for them too! —
						React docs. Suppose that during development you encounter a
						situation where you had to use useEffect and useState. After a
						while, you realize that you need to use the same logic of useEffect
						and useState in another component as well. You can duplicate code,
						but probably tell yourself that there must be a better way, So what
						will you do? Custom Hooks to the rescue. There are several
						advantages to using Custom Hooks:
					</p>
					<p>
						Reusability — we can use the same hook again and again, without the
						need to write it twice.
					</p>
					<p>
						Clean Code — extracting all the component logic into a hook will
						provide a cleaner codebase.
					</p>
					<p>
						Maintainability — easier to maintain. if we need to change the logic
						of the hook, we only need to change it once.
					</p>
					<p>
						Great Community — there is a good chance somebody already created
						the hook you're thinking of. The web is filled with a ton of Custom
						Hooks! you can find a hook for your need and use it as-is or even
						better you can use it as a starting point and make it awesome!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
