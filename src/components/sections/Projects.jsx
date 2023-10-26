import React from "react";
import styled from "styled-components";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import ProjectCard from "../cards/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="section pb-20 pt-10">
      <div className="color-gr-2">
        <svg
          width="1204"
          height="1155"
          viewBox="0 0 1204 1155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_11_420)">
            <ellipse
              cx="469.643"
              cy="375.378"
              rx="469.643"
              ry="375.378"
              transform="matrix(0.00138382 -1.00001 0.999905 0.0151365 310.095 868.573)"
              fill="url(#paint0_linear_11_420)"
            />
          </g>
          <g filter="url(#filter1_f_11_420)">
            <path
              d="M210.716 243.657L777.906 -157.098L776.773 661.568L210.716 243.657Z"
              fill="url(#paint1_linear_11_420)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_11_420"
              x="30.329"
              y="-345.489"
              width="1311.52"
              height="1500.19"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="140.208"
                result="effect1_foregroundBlur_11_420"
              />
            </filter>
            <filter
              id="filter1_f_11_420"
              x="0.404816"
              y="-367.41"
              width="987.812"
              height="1239.29"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="105.156"
                result="effect1_foregroundBlur_11_420"
              />
            </filter>
            <linearGradient
              id="paint0_linear_11_420"
              x1="97.0897"
              y1="51.7348"
              x2="578.42"
              y2="855.131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6100FF" />
              <stop offset="1" stopColor="#00FFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_11_420"
              x1="210.716"
              y1="243.657"
              x2="966.228"
              y2="244.703"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0075FF" />
              <stop offset="1" stopColor="#00A3FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="color-gr-3">
        <svg
          width="1117"
          height="1085"
          viewBox="0 0 1117 1085"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_12_830)">
            <ellipse
              cx="186.857"
              cy="733.692"
              rx="518.143"
              ry="321.537"
              transform="rotate(180 186.857 733.692)"
              fill="url(#paint0_linear_12_830)"
            />
          </g>
          <g filter="url(#filter1_f_12_830)">
            <path
              d="M17.4643 1141.8L-434.137 656.399L469.066 656.399L17.4643 1141.8Z"
              fill="url(#paint1_linear_12_830)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_12_830"
              x="-742.678"
              y="0.762726"
              width="1859.07"
              height="1465.86"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="205.696"
                result="effect1_foregroundBlur_12_830"
              />
            </filter>
            <filter
              id="filter1_f_12_830"
              x="-742.681"
              y="347.855"
              width="1520.29"
              height="1102.49"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="154.272"
                result="effect1_foregroundBlur_12_830"
              />
            </filter>
            <linearGradient
              id="paint0_linear_12_830"
              x1="-224.17"
              y1="456.469"
              x2="133.451"
              y2="1225.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6100FF" />
              <stop offset="1" stopColor="#00FFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_12_830"
              x1="17.4643"
              y1="1141.8"
              x2="17.4643"
              y2="494.6"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0075FF" />
              <stop offset="1" stopColor="#00A3FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col justify-start items-center py-10 mt-10">
        <h2 className="section-title z-10">my projects</h2>
        <p className="section-sub-heading z-10">
          Unveiling the Art of Code: My Portfolio of Digital Masterpieces
        </p>
        <div className="flex flex-wrap gap-5 justify-center items-center w-full mt-40">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
