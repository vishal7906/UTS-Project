import React from "react";

const AboutSection = () => {
  return (
    <section
      className="about-section py-12 bg-gradient-to-br from-blue-600 to-cyan-400 text-white rounded-lg mb-10"
      id="about-us"
    >
      <div className="container text-center">
        <h2 className="about-title mb-5 text-3xl font-bold uppercase tracking-wider">
          About Us
        </h2>
        <p className="lead about-description text-lg text-fuchsia-100 leading-relaxed max-w-3xl mx-auto mb-4">
          At Unstop Techno Solutions, we merge cutting-edge digital marketing with robust manufacturing sector solutions into a single system. Our unified approach enhances order processing, ensures quality control, and offers real-time tracking for better transparency.
        </p>
        <p className="about-description text-lg text-fuchsia-100 leading-relaxed max-w-3xl mx-auto mb-8">
          As a leading provider of PLM (Product Lifecycle Management) solutions and digital marketing services, we help manufacturers enhance their product offerings, boost revenue, and optimize business operations. Our team offers a wide range of services tailored to simplify workflows and drive measurable results in both fields.
        </p>
        <a
          href="#services"
          className="btn btn-primary mt-4 bg-orange-600 py-3 px-6 text-lg text-wheat rounded-full transition-transform duration-300 hover:bg-orange-700 hover:-translate-y-1 hover:shadow-lg"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
