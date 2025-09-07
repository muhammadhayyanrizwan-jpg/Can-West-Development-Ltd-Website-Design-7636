import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiPhone, FiArrowRight } = FiIcons;

const Home = () => {
  const images = [
    'https://i.ibb.co/sdVW3jdS/Can-West-Development-Ltd-out-side-2.jpg',
    'https://i.ibb.co/Vcsxjd1H/Can-West-Development-Ltd-inside-2.jpg',
    'https://i.ibb.co/203MMwm9/Can-West-Development-Ltd-inside-3.jpg',
    'https://i.ibb.co/jPtRtxMd/Can-West-Development-Ltd-out-side-1.jpg',
    'https://i.ibb.co/d0vGPyXg/Can-West-Development-Ltd-out-side-3.jpg',
    // Adding the same image again to fill the grid properly
    'https://i.ibb.co/sdVW3jdS/Can-West-Development-Ltd-out-side-2.jpg'
  ];

  const reviews = [
    {
      author: 'Angela Yang',
      rating: 1,
      date: '5 months ago',
      review: ''
    },
    {
      author: 'Jot Kkk',
      rating: 5,
      date: '7 months ago',
      review: ''
    },
    {
      author: 'Parvesh Mehta',
      rating: 5,
      date: '4 years ago',
      review: ''
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <SafeIcon
        key={i}
        icon={FiStar}
        className={`${i < rating ? 'star-rating' : 'star-empty'} fill-current`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Enhanced Hero Section with Images */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="black-accent-pattern absolute inset-0"></div>
        <div className="dark-blue-geometric absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-dark-blue mb-6"
              >
                Can-West Development Ltd
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Premier construction and development services in Vancouver. Building quality projects with excellence and reliability for over 15 years.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/services" className="btn-primary inline-flex items-center">
                  Our Services
                  <SafeIcon icon={FiArrowRight} className="ml-2" />
                </Link>
                <a href="tel:+16048668374" className="btn-black-accent inline-flex items-center">
                  <SafeIcon icon={FiPhone} className="mr-2" />
                  Call Now
                </a>
              </motion.div>
            </div>

            {/* Right Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Main large image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="col-span-2 relative overflow-hidden rounded-2xl shadow-2xl card-shadow-enhanced"
                >
                  <img
                    src="https://i.ibb.co/jPtRtxMd/Can-West-Development-Ltd-out-side-1.jpg"
                    alt="Can-West Development Ltd - Exterior Construction"
                    className="w-full h-64 sm:h-80 object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">Professional Construction</p>
                  </div>
                </motion.div>

                {/* Two smaller images */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="relative overflow-hidden rounded-xl shadow-lg card-shadow-enhanced"
                >
                  <img
                    src="https://i.ibb.co/Vcsxjd1H/Can-West-Development-Ltd-inside-2.jpg"
                    alt="Can-West Development Ltd - Interior Work"
                    className="w-full h-32 sm:h-40 object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="relative overflow-hidden rounded-xl shadow-lg card-shadow-enhanced"
                >
                  <img
                    src="https://i.ibb.co/203MMwm9/Can-West-Development-Ltd-inside-3.jpg"
                    alt="Can-West Development Ltd - Quality Craftsmanship"
                    className="w-full h-32 sm:h-40 object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </div>

              {/* Floating Stats with black accent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute -bottom-8 -left-4 bg-white rounded-lg shadow-xl p-4 border border-gray-100 card-shadow-enhanced"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black-accent">15+</div>
                    <div className="text-xs text-gray-600">Years</div>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black-accent">500+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Rating with enhanced design */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-3 border border-gray-100 card-shadow-enhanced"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <SafeIcon key={i} icon={FiStar} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-black-accent">5.0</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Client Rating</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Black Accents */}
      <section className="py-16 bg-gray-50 relative">
        <div className="black-geometric absolute inset-0"></div>
        <div className="dark-blue-hexagon absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black-accent mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring expertise, reliability, and innovation to every construction project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Craftsmanship',
                description: 'Skilled professionals with decades of combined experience',
                image: 'https://i.ibb.co/203MMwm9/Can-West-Development-Ltd-inside-3.jpg'
              },
              {
                title: 'Quality Materials',
                description: 'We use only premium materials for lasting results',
                image: 'https://i.ibb.co/sdVW3jdS/Can-West-Development-Ltd-out-side-2.jpg'
              },
              {
                title: 'Timely Delivery',
                description: 'Projects completed on schedule and within budget',
                image: 'https://i.ibb.co/d0vGPyXg/Can-West-Development-Ltd-out-side-3.jpg'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden card-shadow-enhanced hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 border-t-4 border-black-accent">
                  <h3 className="text-xl font-semibold text-black-accent mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - Enhanced Grid Layout */}
      <section className="py-16 relative">
        <div className="black-dots absolute inset-0"></div>
        <div className="dark-blue-waves absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-black-accent text-center mb-12"
          >
            Our Recent Projects
          </motion.h2>

          {/* Enhanced Grid Layout - 2 rows, 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-lg overflow-hidden shadow-lg bg-white card-shadow-enhanced group"
              >
                <img
                  src={image}
                  alt={`Can-West Development Project ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm inline-block">
                    Project {index + 1}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              From residential homes to commercial buildings, each project showcases our commitment to quality construction and exceptional craftsmanship.
            </p>
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center"
            >
              Start Your Project
              <SafeIcon icon={FiArrowRight} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white relative">
        <div className="black-accent-pattern absolute inset-0"></div>
        <div className="dark-blue-grid absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-black-accent text-center mb-12"
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-black-accent card-shadow-enhanced"
              >
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-600">({review.rating}/5)</span>
                </div>
                <h4 className="font-semibold text-black-accent mb-2">{review.author}</h4>
                <p className="text-sm text-gray-600">{review.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Black Background */}
      <section className="py-16 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Contact us today for a free consultation and quote
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;