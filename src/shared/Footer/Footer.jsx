import React from "react";
import socials from "../../assets/img/socials.png";
import "./Footer.css";
const Footer = () => {
	return (
		<div className='footer grid grid-cols-1 lg:grid-cols-5 gap-5 p-10 lg:p-20 mt-20'>
			<div className='col-span-2 text-white '>
				<h1 className='text-4xl text-red-400'>Chef for Cook</h1>
				<p className='footer-text lg:mr-40 mt-5 mb-5'>
					There are many variations of passages of Lorem Ipsum , but the
					majority have suffered alteration in some form.
				</p>
				<img src={socials} alt='' />
			</div>
			<div>
				<ul className='footer-text'>
					<li className='font-semibold mb-2 text-red-400'>Company</li>
					<li>About Us</li>
					<li>Work</li>
					<li>Careers</li>
				</ul>
			</div>
			<div>
				<ul className='footer-text'>
					<li className='font-semibold mb-2 text-red-400'>Services</li>
					<li>Restaurants</li>
					<li>Hotels</li>
					<li>Book Your Trip</li>
				</ul>
			</div>
			<div>
				<ul className='footer-text'>
					<li className='font-semibold mb-2 text-red-400'>Contact</li>
					<li>Help Desks</li>
					<li>Sales</li>
					<li>Hotels</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
