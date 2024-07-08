import '../slider.css';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import theresa from '../assets/theresa.png'
import jacob from '../assets/jacob.png'
import marvin from '../assets/marvin.png'
import image from '../assets/image.png'

const testimonials = [
  {
    name: "Marvin McKinney",
    text: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely.",
    imageUrl: marvin, 
  },
  {
    name: "Jacob Jones",
    text: "As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.",
    imageUrl: jacob, 
  },
  {
    name: "Theresa Webb",
    text: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
    imageUrl: theresa, 
  },
  {
    name: "Eleanor Pena",
    text: "Swift Revel's financial tools have transformed how we handle our finances, giving us more time to focus on innovation.",
    imageUrl: image, 
  },
  {
    name: "Cameron Williamson",
    text: "Thanks to Swift Revel, managing our business finances has never been easier or more secure.",
    imageUrl: theresa, 
  },
  {
    name: "Jenny Wilson",
    text: "The level of detail and professionalism from Swift Revel is unparalleled. It has been a game-changer for us.",
    imageUrl: marvin, 
  },
];

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  };

  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-center text-[80px] font-Montserrat font-bold mb-4">What User says</h2>
      <p className="text-center text-[28px] font-Montserrat mb-12 ">Testimonials that speak louder than words! Customer stories that light up our day.</p>
      <div className="w-full h-full">
        <Slider {...settings} className="h-full">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`flex justify-center items-center h-4/5 wave-card wave-card-${index % 2 === 0 ? 'top' : 'bottom'}`}>
              <div className="testimonial-card">
                <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image"/>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
