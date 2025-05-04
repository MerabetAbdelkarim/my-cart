import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaStar, FaCheckCircle, FaQuoteLeft, FaLongArrowAltLeft, FaLongArrowAltRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: 'Sarah M.',
        role: 'Fashion Blogger',
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. The pieces are even better in person and have become staples in my wardrobe.",
        rating: 5,
    },
    {
        name: 'Alex K.',
        role: 'Graphic Designer',
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. Their curated collections are perfect for creative .",
        rating: 5,
    },
    {
        name: 'James L.',
        role: 'Tech Entrepreneur',
        text: "As someone who's always on the lookout for unique fashion pieces, Shop.co has become my go-to. The quality exceeds the price point by far.",
        rating: 4,
    },
    {
        name: 'Priya N.',
        role: 'Marketing Director',
        text: "The customer service is exceptional. When I had sizing issues, they resolved everything quickly and made sure I was completely satisfied.",
        rating: 5,
    },
    {
        name: 'Marcus T.',
        role: 'Photographer',
        text: "I appreciate how Shop.co combines style with comfort. Their clothes look great but also feel amazing to wear all day during shoots.",
        rating: 5,
    },
];

const TestimonialCard = ({ name, role, text, rating }) => (
    <motion.div
        className="p-6 rounded-xl  h-full flex flex-col"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
    >
        <div className="text-yellow-400 mb-3 flex">
            {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} className={idx < rating ? 'opacity-100' : 'opacity-30'} />
            ))}
        </div>

        <FaQuoteLeft className="text-gray-200 text-2xl mb-3" />

        <p className="text-gray-600 mb-5 text-sm md:text-base">"{text}"</p>

        <div className="mt-auto">
            <div className="flex items-center">
                <h5 className="font-bold text-gray-800">
                    {name} <FaCheckCircle className="inline ml-1 text-green-500" size="0.8em" />
                </h5>
            </div>
            <p className="text-gray-500 text-sm">{role}</p>
        </div>
    </motion.div>
);

const HappyCustomers = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="m-0">
                        What Our Customers Say
                    </h4>
                    <div className="d-flex gap-2">
                        <button
                            aria-label="Previous testimonials"
                            className="testimonial-swiper-button-prev border-0 bg-transparent "
                        >
                            <FaArrowLeft size={20} />
                        </button>
                        <button
                            aria-label="Next testimonials"
                            className="testimonial-swiper-button-next  border-0 bg-transparent"
                        >
                            <FaArrowRight size={20} />
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.testimonial-swiper-button-next',
                            prevEl: '.testimonial-swiper-button-prev',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-12"
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard {...t} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
export default HappyCustomers;