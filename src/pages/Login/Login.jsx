import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='card w-1/2 mx-auto bg-base-100 shadow-xl mt-20'>
			<div className='card-body'>
				<h2 className='card-title text-3xl mx-auto'>Login to your Account</h2>
				<form className='mx-auto mt-5'>
					<div className='flex flex-col '>
						<label htmlFor='' className='text-xl font-semibold ml-2 mb-2'>
							<span className='text-inherit'>Email</span>
						</label>
						<input
							type='email'
							name='email'
							placeholder='your email'
							className=' input w-96 max-w-xs border-2 focus:outline-none border-red-400 mb-5'
							required
						/>
					</div>
					<div className='flex flex-col '>
						<label htmlFor='' className='text-xl font-semibold  ml-2 mb-2'>
							<span className='text-inherit'>Password</span>
						</label>
						<input
							type='password'
							name='password'
							placeholder='password'
							className=' input w-96 max-w-xs border-2 focus:outline-none border-red-400 mb-'
							required
						/>
					</div>
					<div className='card-actions justify-center mt-10'>
						<button className='btn btn-error text-white'>Log In</button>
					</div>
				</form>
				<p className='font-semibold mx-auto mt-5'>
					New to <span className='text-red-400'>Chef for Cook</span>?{" "}
					<Link className='underline underline-offset-1 text-blue-600 hover:text-red-400'>
						Register your account
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
