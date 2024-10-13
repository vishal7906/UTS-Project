import React from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "./DataProvider";
const Services = () => {

  const data = useDataContext();
  const services = data.services;
  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-4">
          {
            services?.map((service,index)=>(
              <Link key={index} to={'services'}>
                <div className="bg-white rounded-lg p-8 text-center border border-gray-300 transition-transform transform hover:-translate-y-2 hover:shadow-lg">
                  <i className="fas fa-chart-line fa-3x text-blue-600 mb-5"></i>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-3">{service.name}</h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))
          } 
        </div>
      </div>
    </section>
  );
};

export default Services;
