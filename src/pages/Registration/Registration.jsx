import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { updateProfile } from "firebase/auth";

const Registration = () => {
	const { createUser } = useContext(AuthContext);
	const [showPassword, setShowPassword] = useState(false);
	const [accept, setAccept] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const navigate = useNavigate();

	const handleRegister = (event) => {
		setError("");
		setSuccess("");
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const url = form.url.value;
		setAccept(false);
		

		if (password < 6) {
			setError("Password must be 6 char");
			return;
		}

		createUser(email, password)
			.then((result) => {
				const loggedUser = result.user;
				setSuccess("Successfully account created");
				form.reset();
				updateUser(loggedUser, name, url);
				navigate("/");
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	const updateUser = (user, name, url) => {
		updateProfile(user, {
			displayName: name,
			photoURL: url,
		})
			.then(() => {
				setSuccess("profile updated");
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	const handleShowPassword = (event) => {
		setShowPassword(event.target.checked);
	};
	const handleAccept = (event) => {
		setAccept(event.target.checked);
	};
	return (
		<div className='card w-1/2 mx-auto bg-base-100 shadow-xl mt-20'>
			<div className='card-body'>
				<h2 className='card-title text-3xl mx-auto'>Register your Account</h2>
				<div>
					<p className='mt-3 text-red-500 text-center font-semibold'>
						{error ? error : ""}
					</p>
					<p className='mt-3 text-blue-500 text-center font-semibold'>
						{success ? success : ""}
					</p>
				</div>
				<form className='mx-auto mt-5' onSubmit={handleRegister}>
					<div className='flex flex-col '>
						<label htmlFor='' className='text-xl font-semibold ml-2 mb-2'>
							<span className='text-inherit'>Name</span>
						</label>
						<input
							type='name'
							name='name'
							placeholder='your name'
							className=' input w-96 max-w-xs border-2 focus:outline-none border-red-400 mb-5'
							required
						/>
					</div>
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
					<div className='flex flex-col mt-2'>
						<label htmlFor='' className='text-xl font-semibold  ml-2 mb-2'>
							<span className='text-inherit'>Photo URL</span>
						</label>
						<input
							type='text'
							name='url'
							placeholder='url of your photo'
							className=' input w-96 max-w-xs border-2 focus:outline-none border-red-400 mb-'
							required
						/>
					</div>
					<div className='flex flex-row justify-center items-center mt-5'>
						<input type='checkbox' name='check' onClick={handleAccept} />
						<label htmlFor='' className='text-xl font-semibold ml-2 '>
							<small className='text-inherit text-blue-600 hover:text-red-400'>
								Apply Terms and Conditions *
							</small>
						</label>
					</div>
					<div className='card-actions justify-center mt-10'>
						<button className='btn btn-error text-white' disabled={!accept}>
							Register
						</button>
					</div>
				</form>
				<p className='font-semibold mx-auto mt-5 mb-10'>
					Already have an account?{" "}
					<Link
						to='/login'
						className='underline underline-offset-1 text-blue-600 hover:text-red-400'
					>
						Please login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Registration;
