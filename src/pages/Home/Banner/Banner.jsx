import React from "react";
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
import LazyLoad from "react-lazy-load";

const Banner = () => {
	return (
		<div className='banner mt-16'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 lg:p-10'>
				<div className='lg:mt-8'>
					<h1 className='lg:text-5xl font-bold text-white  p-3 rounded-2xl '>
						Discover Your Chef With favorite Recipes...
					</h1>
					<button className='btn btn-warning mt-3 lg:mt-5 text-white font-semibold ml-5'>
						Follow Us
					</button>
				</div>

				<div className='d-flex items-center mt-5'>
					<Swiper
						spaceBetween={30}
						slidesPerView={2}
						centeredSlides={true}
						onSlideChange={() => console.log("")}
						onSwiper={() => console.log("")}
						onAutoplay={{
							delay: 500,
							disableOnInteraction: false,
						}}
					>
						<SwiperSlide>
							<LazyLoad height={500}>
								<img
									src={slider_1}
									alt=''
									className='h-60 lg:h-96 rounded-xl'
								/>
							</LazyLoad>
						</SwiperSlide>
						<SwiperSlide className='h-96'>
							<LazyLoad height={500}>
								<img
									src={slider_2}
									alt=''
									className='h-60 lg:h-96 rounded-xl'
								/>
							</LazyLoad>
						</SwiperSlide>
						<SwiperSlide>
							<LazyLoad height={500}>
								<img
									src={slider_3}
									alt=''
									className='h-60 lg:h-96 rounded-xl'
								/>
							</LazyLoad>
						</SwiperSlide>
						<SwiperSlide>
							<LazyLoad height={500}>
								<img
									src={slider_4}
									alt=''
									className='h-60 lg:h-96 rounded-xl'
								/>
							</LazyLoad>
						</SwiperSlide>

						<SwiperSlide>
							<LazyLoad height={500}>
								<img
									src={slider_5}
									alt=''
									className='h-60 lg:h-96 rounded-xl'
								/>
							</LazyLoad>
						</SwiperSlide>

						<SwiperSlide>
							<LazyLoad height={500}>
								<img
									src={slider_6}
									alt=''
									className='h-60 lg:h-96 rounded-xl'
								/>
							</LazyLoad>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Banner;
