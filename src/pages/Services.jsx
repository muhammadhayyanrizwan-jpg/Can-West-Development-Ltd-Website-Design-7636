import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiTool, FiLayers, FiBuild, FiTrendingUp, FiShield } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiHome,
      title: 'Residential Construction',
      description: 'Custom home building and residential development projects with quality craftsmanship.',
      features: ['Custom Home Design', 'New Construction', 'Home Extensions', 'Basement Development']
    },
    {
      icon: FiBuild,
      title: 'Commercial Development',
      description: 'Professional commercial construction services for businesses and organizations.',
      features: ['Office Buildings', 'Retail Spaces', 'Industrial Projects', 'Mixed-Use Development']
    },
    {
      icon: FiTool,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our comprehensive renovation services.',
      features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Interior Design', 'Complete Makeovers']
    },
    {
      icon: FiLayers,
      title: 'Project Management',
      description: 'Full-service project management from concept to completion.',
      features: ['Planning & Design', 'Permit Acquisition', 'Timeline Management', 'Quality Control']
    },
    {
      icon: FiTrendingUp,
      title: 'Property Development',
      description: 'Strategic property development services for maximum value creation.',
      features: ['Land Development', 'Investment Analysis', 'Market Research', 'Value Engineering']
    },
    {
      icon: FiShield,
      title: 'Quality Assurance',
      description: 'Comprehensive quality assurance and safety protocols on every project.',
      features: ['Safety Compliance', 'Quality Inspections', 'Building Codes', 'Warranty Services']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white pt-8"
    >
      {/* Header */}
      <section className="relative py-16">
        <div className="dark-blue-hexagon absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction and development services tailored to meet your unique needs. From concept to completion, we deliver excellence in every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 relative">
        <div className="dark-blue-waves absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <SafeIcon icon={service.icon} className="text-2xl text-dark-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-dark-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 relative">
        <div className="dark-blue-geometric absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-6">
              Why Choose Can-West Development?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Expert Team', desc: 'Skilled professionals with years of experience' },
              { title: 'Quality Materials', desc: 'Only the finest materials for lasting results' },
              { title: 'Timely Delivery', desc: 'Projects completed on schedule and within budget' },
              { title: 'Customer Focus', desc: 'Your satisfaction is our top priority' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold text-dark-blue mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Contact us today to discuss your project requirements
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+16048668374"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Call +1 (604) 866-8374
            </a>
            <a
              href="#/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Get Quote
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;