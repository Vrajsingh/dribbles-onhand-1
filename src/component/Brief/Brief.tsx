import React, { useState } from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const data = [
  "https://images.generated.photos/hduC_c_9RYIUAnQvFf6wh91HGwQ9ch3IceyinaIQcnY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTc0NzA1LmpwZw.jpg",
  "https://cdn.mos.cms.futurecdn.net/THCiUmVZcgxHodGCK3EyYo.jpg",
  "https://images.generated.photos/jnKglcMTMoz97DXd97QWKbCGp5L-STehCmVuig3cHcE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTgzMDA5LmpwZw.jpg",
  "https://images.generated.photos/ZYtOC5xwOtU17-GvKrEJWZpRunetrjzilvoc0rO-GLQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjAxOTY3LmpwZw.jpg",
];

const Brief = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveImageIndex(
      !activeImageIndex ? data.length - 1 : activeImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-white mt-5 flex-1 ml-5 mr-5 md:ml-20 rounded-2xl p-5">
        <div className="flex flex-row justify-between mb-5">
          <button className="rounded-3xl border-2 border-black p-3">
            Our Team
          </button>
          <FaArrowRight className="flex justify-end bg-gray-200 rounded-full text-4xl p-2" />
        </div>
        <p className="text-gray-500">
          <b>Our team designs</b> and curates minimalist furniture
        </p>

        <div className="flex justify-center mt-5">
          {data.map((url, i) => {
            return (
              <img
                key={url}
                src={url}
                className={
                  "w-24 h-30 object-cover rounded-full mx-2 justify-center flex items-center" +
                  (activeImageIndex === i ? " block" : " hidden")
                }
                alt="Image slider"
              />
            );
          })}
        </div>

        <div className="flex flex-row justify-between">
          <button className="flex justify-end bg-gray-200 rounded-full text-4xl p-2" onClick={handlePrevClick}>&#8592;</button>
          <button className="flex justify-end bg-gray-200 rounded-full text-4xl p-2" onClick={handleNextClick}>&#8594;</button>
        </div>
      </div>
      <div className="bg-white mt-5 flex-1 ml-5 mr-5 md:ml-10 rounded-2xl p-5">
        <div className="flex flex-row justify-between mb-5">
          <button className="rounded-3xl border-2 border-black p-3">
            Get a Bonus
          </button>
          <FaArrowRight className="flex justify-end bg-gray-200 rounded-full text-4xl p-2" />
        </div>
        <p className="text-gray-500">
          <b>Discover</b> the Latest in Modern Minimalism <b>with PureSpace!</b>
        </p>
        <h5 className="mt-5">
          <b>Newsletter</b>
        </h5>
        <input
          type="text"
          className="border border-gray-300 p-3 rounded-xl mt-3"
          placeholder="Enter email"
        />
        <button className="rounded-3xl border-2 border-black bg-black text-white p-3 mt-5 w-full">
          Subscribe
        </button>
      </div>
      <div className="bg-white mt-5 flex-1 ml-5 mr-5 md:ml-10 rounded-2xl p-5">
        <div className="flex flex-row justify-between mb-5">
          <button className="rounded-3xl border-2 border-black p-3">
            Contact Us
          </button>
          <FaArrowRight className="flex justify-end bg-gray-200 rounded-full text-4xl p-2" />
        </div>
        <p className="text-gray-500 mb-5">
          <b>Chat to support</b>
          <br /> We're here to help
        </p>
        <a href="support@purespace.community.com" className="text-gray-500">
          <b>support@purespace.comunity.com</b>
        </a>
        <h5 className="mt-5">
          <b>Follow Us</b>
        </h5>
        <p className="text-gray-500 mt-2 mb-3 text-sm">
          Follow Us in Social Media
        </p>
        <div className="flex flex-column">
          <FaFacebook className="text-4xl m-2" />
          <FaInstagram className="text-4xl m-2" />
          <FaPinterest className="text-4xl m-2" />
        </div>
      </div>
    </div>
  );
};

export default Brief;
