import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const people = [
    { name: "Megan Smith", image: "person_1.jpg" },
    { name: "Brooke Cagle", image: "person_2.jpg" },
    { name: "Philip Martin", image: "person_3.jpg" },
    { name: "Steven Ericson", image: "person_4.jpg" },
    { name: "Nathan Dumlao", image: "person_5.jpg" },
    { name: "Brook Smith", image: "person_6.jpg" },
];

export default function TestimonialsCarousel() {
    return (
        <div className="nonloop-block-13">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {people.map((person, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img
                                    src={`/src/assets/images/${person.image}`}
                                    alt={person.name}
                                    className="w-50 mx-auto img-fluid rounded-circle"
                                />
                            </div>
                            <h3 className="font-weight-light h5">{person.name}</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                                iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
