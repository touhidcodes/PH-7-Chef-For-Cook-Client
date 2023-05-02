import React from "react";
import ActiveRoute from "../ActiveRoute/ActiveRoute";

const Header = () => {
	return (
		<div>
			<div className='navbar bg-base-100 mt-3 flex-col-reverse lg:flex-row gap-4'>
				<div className='lg:flex-1 '>
					<a className='btn btn-ghost normal-case text-3xl text-error'>
						Chef for Cook
					</a>
				</div>
				<div className='grow'>
					<ActiveRoute to='/'>Home</ActiveRoute>
					<ActiveRoute to='/blogs'>Blog</ActiveRoute>
				</div>
				<div className='flex-none gap-2'>
					<div className='dropdown dropdown-end'>
						<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
							<div className='w-10 rounded-full'>
								<img src='/images/stock/photo-1534528741775-53994a69daeb.jpg' />
							</div>
						</label>
						{/* <ul
							tabIndex={0}
							className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
						>
							<li>
								<a className='justify-between'>
									Profile
									<span className='badge'>New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul> */}
					</div>
					<button className='btn btn-error text-white'>Log In</button>
				</div>
			</div>
			<hr className='mt-1' />
		</div>
	);
};

export default Header;
