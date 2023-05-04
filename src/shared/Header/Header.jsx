import React, { useContext } from "react";
import ActiveRoute from "../ActiveRoute/ActiveRoute";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import empty from "../../assets/img/empty.png";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut();
	};
	// console.log(user.photoURL);
	return (
		<div>
			<div className='navbar bg-base-100 mt-3 flex-col-reverse lg:flex-row gap-4'>
				<div className=''>
					<a className='btn btn-ghost normal-case text-3xl text-error'>
						Chef for Cook
					</a>
				</div>
				<div className='grow'>
					<div className='mx-auto'>
						<ActiveRoute to='/'>Home</ActiveRoute>
						<ActiveRoute to='/blogs'>Blog</ActiveRoute>
					</div>
				</div>
				<div className='flex-none flex-col mb-3 lg:flex-row  gap-2'>
					<p className='text-inherit font-semibold'>{user?.email}</p>
					<div className='dropdown dropdown-end'>
						<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
							<div className='w-10 rounded-full'>
								{user ? (
									<div>
										<img src={user?.photoURL} title={user?.displayName} />
									</div>
								) : (
									<div>
										<img src={empty} title='Login' />
									</div>
								)}
							</div>
						</label>
					</div>
					{user ? (
						<div>
							<button
								className='btn btn-error text-white'
								onClick={handleLogOut}
							>
								Log Out
							</button>
						</div>
					) : (
						<div>
							<button className='btn btn-error text-white'>
								<Link to='/login'>Log In</Link>
							</button>
						</div>
					)}
				</div>
			</div>
			<hr className='mt-1' />
		</div>
	);
};

export default Header;
