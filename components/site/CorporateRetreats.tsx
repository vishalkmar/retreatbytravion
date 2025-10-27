import React from "react";
import { Music, Leaf } from "lucide-react";
import Image from "next/image";

const CorporateRetreats = () => {
  const programs = [
    {
      id: 1,
      title: "Wellness Workshops",
      description:
        "Transform your workplace with expert-led wellness workshops focused on stress management, mental health, and work-life balance for enhanced productivity.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 11.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-3.5 8.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S7 17.33 7 16.5s.67-1.5 1.5-1.5zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" />
          <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
        </svg>
      ),
      iconBg: "bg-green-500",
      image: "/wellness-retreats/13.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Team Building Activity",
      description:
        "Foster collaboration and strengthen team bonds through engaging activities that promote communication, trust, and collective problem-solving.",
      icon: (
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25px"
          height="25px"
          viewBox="0 0 122.699 122.699"
        >
          <g>
            <circle fill="#fff" cx="19.5" cy="12.2" r="12.1" />
            <path
              fill="#fff"
              d="M6,66.699h1.2v24c0,3.301,2.7,6,6,6h12.6c3.3,0,6-2.699,6-6V89.3c-1.1-2.101-1.8-4.5-1.8-7v-31.4c0-6.1,3.7-11.4,9-13.7
		v-2.4c0-3.3-2.7-6-6-6H6c-3.3,0-6,2.7-6,6v25.9C0,64,2.6,66.699,6,66.699z"
            />
            <circle fill="#fff" cx="103.3" cy="12.2" r="12.1" />
            <path
              fill="#fff"
              d="M83.699,34.7v2.4c5.301,2.3,9,7.6,9,13.7v31.3c0,2.5-0.6,4.9-1.799,7v1.4c0,3.3,2.699,6,6,6h12.6c3.3,0,6-2.7,6-6v-24
		h1.199c3.301,0,6-2.7,6-6V34.7c0-3.3-2.699-6-6-6h-27C86.4,28.7,83.699,31.399,83.699,34.7z"
            />
            <path
              fill="#fff"
              d="M39.1,50.899L39.1,50.899v9.8v21.6c0,3.3,2.7,6,6,6h2.3v28.3c0,3.3,2.7,6,6,6h16.1c3.3,0,6-2.7,6-6v-28.4h2.3
		c3.3,0,6-2.699,6-6V60.7v-9.8l0,0c0-3.3-2.7-6-6-6H45.1C41.7,44.899,39.1,47.6,39.1,50.899z"
            />
            <circle fill="#fff" cx="61.4" cy="26" r="13.9" />
          </g>
        </svg>
      ),
      iconBg: "bg-green-400",
      image: "/corporate-retreats/2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Corporate Offsites",
      description:
        "Plan memorable corporate retreats in inspiring locations that combine business objectives with rejuvenating experiences for optimal team performance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M5 16h14l-7-8zM12 4l-8 10h16z" />
          <path d="M9 18h6v2H9z" />
        </svg>
      ),
      iconBg: "bg-orange-500",
      image: "/corporate-retreats/1.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "MICE",
      description:
        "Comprehensive Meetings, Incentives, Conferences, and Exhibitions solutions that deliver seamless corporate events with professional execution.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          <path d="M6 15c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v1H6v-1z" />
        </svg>
      ),
      iconBg: "bg-cyan-500",
      image: "/mice-tours/4.jpg",
      link: "#",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-sm mb-4">
            <span className="text-green-600 text-3xl">
              <svg
                width="32px"
                height="32px"
                viewBox="-9.71 0 78.351 78.351"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Group_1"
                  data-name="Group 1"
                  transform="translate(-156.417 -147.06)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M190.084,213.461h-8.394l1.552-22.908h5.29Z"
                    fill="#4aaf52"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M190.62,187.11c0,2.614-2.119,6.488-4.734,6.488s-4.733-3.874-4.733-6.488,2.119-2.98,4.733-2.98S190.62,184.495,190.62,187.11Z"
                    fill="#4aaf52"
                  />
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M200.039,174.539c0,9.646-6.337,19.4-14.153,19.4s-14.152-9.755-14.152-19.4,6.336-15.529,14.152-15.529S200.039,164.894,200.039,174.539Z"
                    fill="none"
                    stroke="#4aaf52"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    opacity="0.15"
                  />
                  <path
                    id="Path_4"
                    data-name="Path 4"
                    d="M196.726,187.958c10.062,3,17.13,9.507,17.13,13.326V223.04a.871.871,0,0,1-.871.871h-54.2a.871.871,0,0,1-.871-.871V201.284c0-3.814,7.039-10.306,17.075-13.314"
                    fill="none"
                    stroke="#4aaf52"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    opacity="0.15"
                  />
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M200.039,164.09c0,9.645-6.337,19.4-14.153,19.4s-14.152-9.755-14.152-19.4,6.336-15.53,14.152-15.53S200.039,154.444,200.039,164.09Z"
                    fill="none"
                    stroke="#4aaf52"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M196.726,177.509c10.062,3,17.13,9.507,17.13,13.326v21.756a.871.871,0,0,1-.871.87h-54.2a.871.871,0,0,1-.871-.87V190.835c0-3.814,7.039-10.307,17.075-13.315"
                    fill="none"
                    stroke="#4aaf52"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                  />
                </g>
              </svg>
            </span>
            <span className="text-green-600 font-extrabold lg:text-2xl md:text-xl sm:text-sm uppercase tracking-wide">
              Corporate Retreats & Offsites
            </span>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Icon Badge */}
                <div
                  className={`absolute top-4 right-4 ${program.iconBg} rounded-full p-3 text-white shadow-lg`}
                >
                  {program.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gradient transition-colors duration-300">
                  {program.title}
                </h3>

                {/* Description grows to fill available space */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {program.description}
                </p>

                {/* Fixed bottom link */}
                <a
                  href="/retreats/corporate"
                  className="inline-flex items-center gap-2 text-green-600 font-medium text-sm hover:gap-3 transition-all duration-300 mt-auto"
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Programs Button */}
        <div className="text-center mt-12">
          <a href="/retreats/corporate">
            <button className="inline-flex items-center gap-2 bg-gradient-primary text-white font-medium px-8 py-3 rounded-full hover:scale-110 hover:gap-3 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
              View All
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CorporateRetreats;
