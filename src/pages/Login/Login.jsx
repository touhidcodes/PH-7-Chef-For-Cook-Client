import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
	const { user, logIn } = useContext(AuthContext);
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const handleLogin = (event) => {
		setError("");
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		// console.log(email, password);

		logIn(email, password)
			.then((result) => {
				const loggedUser = result.user;
				form.reset();
				console.log(loggedUser);
				// navigate(from, { replace: true });
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	const handleShowPassword = (event) => {
		setShowPassword(event.target.checked);
	};
	return (
		<div className='card w-1/2 mx-auto bg-base-100 shadow-xl mt-20'>
			<div className='card-body'>
				<h2 className='card-title text-3xl mx-auto'>Login to your Account</h2>
				<div>
					<p className='mt-3 text-red-500 text-center font-semibold'>
						{error ? error : ""}
					</p>
				</div>
				<form className='mx-auto mt-5' onSubmit={handleLogin}>
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
							type={showPassword ? "text" : "password"}
							name='password'
							placeholder='password'
							className=' input w-96 max-w-xs border-2 focus:outline-none border-red-400 mb-'
							required
						/>
					</div>
					<div className='flex flex-row justify-end items-center mt-2'>
						<input type='checkbox' name='check' onClick={handleShowPassword} />
						<label htmlFor='' className='text-xl font-semibold ml-2 '>
							<small className='text-inherit'>Show Password</small>
						</label>
					</div>
					<div className='card-actions justify-center mt-10'>
						<button className='btn btn-error text-white'>Log In</button>
					</div>
				</form>
				<p className='font-semibold mx-auto mt-5'>
					New to <span className='text-red-400'>Chef for Cook</span>?{" "}
					<Link
						to='/register'
						className='underline underline-offset-1 text-blue-600 hover:text-red-400'
					>
						Register your account
					</Link>
				</p>
				<div className='mx-auto flex flex-col mt-10'>
					<button className='px-4 py-3 border-2 border-red-400 rounded-xl w-96 text-xl font-semibold hover:bg-red-400 hover:text-white mb-5'>
						<p className='flex items-center justify-center'>
							<FaGoogle className='mr-2' /> Google Sign-In
						</p>
					</button>
					<button className='px-4 py-3 border-2 border-red-400 rounded-xl w-96 text-xl font-semibold hover:bg-red-400 hover:text-white mb-10'>
						<p className='flex items-center justify-center'>
							<FaGithub className='mr-2' /> GitHub Sign-In
						</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
