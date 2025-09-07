import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiUsers, FiClock, FiTrendingUp } = FiIcons;

const About = () => {
  const stats = [
    { icon: FiClock, number: '15+', label: 'Years Experience' },
    { icon: FiUsers, number: '500+', label: 'Happy Clients' },
    { icon: FiAward, number: '100+', label: 'Projects Completed' },
    { icon: FiTrendingUp, number: '98%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every project is executed with meticulous attention to detail and the highest standards of craftsmanship.'
    },
    {
      title: 'Reliability',
      description: 'Our clients trust us to deliver on our promises. We maintain transparent communication and stick to our commitments throughout every project.'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and methods to deliver cutting-edge solutions that exceed expectations and add lasting value.'
    },
    {
      title: 'Customer Focus',
      description: 'Your vision is our mission. We work closely with clients to understand their needs and deliver personalized solutions.'
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
        <div className="black-accent-pattern absolute inset-0"></div>
        <div className="dark-blue-hexagon absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              About Can-West Development Ltd
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building excellence since our establishment, we are Vancouver's trusted partner for construction and development projects of all scales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 relative">
        <div className="black-geometric absolute inset-0"></div>
        <div className="dark-blue-waves absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-black-accent mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Can-West Development Ltd has been a cornerstone of Vancouver's construction industry, delivering exceptional building and development services across residential and commercial sectors. Our journey began with a simple mission: to create lasting structures that enhance communities and exceed client expectations.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have built a reputation for excellence, reliability, and innovation. Our team of skilled professionals brings decades of combined experience to every project, ensuring that each build meets the highest standards of quality and craftsmanship.
              </p>
              <p className="text-gray-600">
                From custom homes to large-scale commercial developments, we approach every project with the same commitment to excellence that has made us a trusted name in Vancouver's construction landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://i.ibb.co/sdVW3jdS/Can-West-Development-Ltd-out-side-2.jpg"
                alt="Exterior construction work"
                className="rounded-lg shadow-lg card-shadow-enhanced"
              />
              <img
                src="https://i.ibb.co/d0vGPyXg/Can-West-Development-Ltd-out-side-3.jpg"
                alt="Building exterior"
                className="rounded-lg shadow-lg mt-8 card-shadow-enhanced"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 relative">
        <div className="black-dots absolute inset-0"></div>
        <div className="dark-blue-hexagon absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-black-accent text-center mb-12"
          >
            Our Track Record
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-black-accent card-shadow-enhanced"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 border-2 border-black-accent">
                  <SafeIcon icon={stat.icon} className="text-2xl text-black-accent" />
                </div>
                <h3 className="text-3xl font-bold text-black-accent mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 relative">
        <div className="black-accent-pattern absolute inset-0"></div>
        <div className="dark-blue-geometric absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-black-accent text-center mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 bg-gray-50 rounded-lg border-l-4 border-black-accent card-shadow-enhanced"
              >
                <h3 className="text-xl font-bold text-black-accent mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 relative">
        <div className="black-geometric absolute inset-0"></div>
        <div className="dark-blue-waves absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black-accent mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines technical expertise with creative vision to deliver outstanding results on every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Project Management',
                description: 'Experienced project managers ensure smooth execution from start to finish.'
              },
              {
                title: 'Construction Expertise',
                description: 'Skilled craftsmen and builders with expertise across all construction disciplines.'
              },
              {
                title: 'Design & Planning',
                description: 'Creative design solutions that balance functionality with aesthetic appeal.'
              }
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-black-accent card-shadow-enhanced"
              >
                <h3 className="text-lg font-semibold text-black-accent mb-3">{expertise.title}</h3>
                <p className="text-gray-600">{expertise.description}</p>
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
            Ready to Work With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Let's discuss how we can bring your construction vision to life
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#/contact"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;