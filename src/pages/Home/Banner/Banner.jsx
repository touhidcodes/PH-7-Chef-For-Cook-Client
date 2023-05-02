import React from "react";
import bg from "../../../assets/img/bg.jpg";
import slider_1 from "../../../assets/img/1.jpg";
import slider_2 from "../../../assets/img/2.jpg";
import slider_3 from "../../../assets/img/3.jpg";
import slider_4 from "../../../assets/img/4.jpg";
import slider_5 from "../../../assets/img/5.jpg";
import slider_6 from "../../../assets/img/6.jpg";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const Banner = () => {
	// const swiper = new Swiper(".swiper", {
	// 	modules: [Navigation, Pagination],
	// 	navigation: {
	// 		nextEl: ".swiper-button-next",
	// 		prevEl: ".swiper-button-prev",
	// 	},
	// });

	return (
		<div className='banner'>
			<div className='grid grid-cols-2 gap-4 p-10'>
				<div className='mt-8'>
					<h1 className='text-5xl font-semibold text-red-400 bg-red-100 p-3 rounded-2xl '>
						Discover Your Chef With favorite Recipes...
					</h1>
					<button className='btn btn-warning mt-5 text-white font-semibold'>
						Follow Us
					</button>
				</div>

				<div className='d-flex items-center mt-5'>
					<Swiper
						spaceBetween={30}
						slidesPerView={2}
						centeredSlides={true}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
						onAutoplay={{
							delay: 500,
							disableOnInteraction: false,
						}}
					>
						<SwiperSlide>
							<img src={slider_1} alt='' className='h-96 rounded-xl' />

							{({ isActive }) => (
								<div>Current slide is {isActive ? "active" : "not active"}</div>
							)}
						</SwiperSlide>
						<SwiperSlide className='h-96'>
							<img src={slider_2} alt='' className='h-96 rounded-xl' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={slider_3} alt='' className='h-96 rounded-xl' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={slider_4} alt='' className='h-96 rounded-xl' />
						</SwiperSlide>

						<SwiperSlide>
							<img src={slider_5} alt='' className='h-96 rounded-xl' />
						</SwiperSlide>

						<SwiperSlide>
							<img src={slider_6} alt='' className='h-96 rounded-xl' />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Banner;
