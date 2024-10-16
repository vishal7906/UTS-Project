import React from "react";
import { useDataContext } from "./DataProvider";

const AboutSection = () => {

  const data = useDataContext();
  return (
    <section
      className="about-section py-12 bg-gradient-to-br from-blue-600 to-cyan-400 text-white mb-10"
      id="about-us"
    >
      <div className="container text-center">
        <h2 className="about-title mb-5 text-3xl font-bold uppercase tracking-wider">
          About Us
        </h2>
        <p className="lead about-description text-lg text-fuchsia-100 leading-relaxed max-w-3xl mx-auto mb-4">
          {data.aboutUs}
        </p>
        <a
          href="./services"
          className="btn btn-primary mt-4 bg-orange-600 py-3 px-6 text-lg text-wheat rounded-full transition-transform duration-300 hover:bg-orange-700 hover:-translate-y-1 hover:shadow-lg"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
