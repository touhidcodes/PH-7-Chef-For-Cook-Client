import React from 'react';
import error from "../../assets/img/error.jpg"
const Error = () => {
    return (
        	<div>
			<h1 className='text-5xl font-semibold text-center mt-10'>
				404 Not Found !
			</h1>
			<div className='w-6/12 mx-auto'>
				<img src={error} alt='' />
			</div>
		</div>
    );
};

export default Error;