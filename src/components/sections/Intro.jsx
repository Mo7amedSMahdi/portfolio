import React from "react";
import styled from "styled-components";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Ellipse from "../../assets/shapes/Ellipse.svg";

const StyledEllipse = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  & > svg {
    height: 100%;
  }
`;

const StyledGradient = styled.div`
  position: absolute;
  width: 549px;
  top: 0;
  right: 0;
  bottom: 0;
  transform-origin: 0 0;
  background: linear-gradient(143deg, #6100ff 0%, rgba(0, 255, 255, 0) 100%);
  box-shadow: 280.4151611328125px 280.4151611328125px 280.4151611328125px;
  border-radius: 9999px;
  filter: blur(280.42px);
  z-index: -1;
`;
const StyledGradientTra = styled.div`
  position: absolute;
  width: 554px;
  top: 0;
  right: 0;
  bottom: 0;
  transform-origin: 0 0;
  background: linear-gradient(143deg, #0075ff 0%, #00a3ff00 100%);
  box-shadow: 280.4151611328125px 280.4151611328125px 280.4151611328125px;
  border-radius: 9999px;
  filter: blur(280.42px);
  z-index: -1;
`;
const Intro = () => {
  return (
    <section id="intro">
      <div className="container">
        <StyledEllipse>
          <svg
            width="594"
            height="1024"
            viewBox="0 0 594 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M834 -294C373.395 -294 0 79.3945 0 540C0 1000.61 373.395 1374 834 1374L834 -294Z"
              fill="url(#paint0_linear_11_377)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11_377"
                x1="600.917"
                y1="540"
                x2="-299.852"
                y2="540"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1E1E26" />
                <stop offset="1" stopColor="#16181F" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </StyledEllipse>
        <StyledGradient />
        <StyledGradientTra />
        <div id="content" className="flex">
          <div
            id="intro-left"
            className="flex-1 flex flex-col justify-between items-center px-10"
          >
            <p className="logo">LOGO</p>
            <div className="flex flex-col gap-4 max-w-fit">
              <Button radius="none" isIconOnly color="none">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  initial={{ fill: "#fff" }}
                  whileHover={{
                    fill: "#FBBF24",
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <motion.g clip-path="url(#clip0_4_180)">
                    <motion.path
                      d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z"
                      //   fill="white"
                    />
                  </motion.g>
                  <motion.defs>
                    <clipPath id="clip0_4_180">
                      <motion.rect width="48" height="48" fill="white" />
                    </clipPath>
                  </motion.defs>
                </motion.svg>
              </Button>
              <Button radius="none" isIconOnly color="none">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  initial={{ fill: "#fff" }}
                  whileHover={{
                    fill: "#FBBF24",
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <motion.path d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z" />
                </motion.svg>
              </Button>
              <Button radius="none" isIconOnly color="none">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  initial={{ fill: "#fff" }}
                  whileHover={{
                    fill: "#FBBF24",
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <motion.g clip-path="url(#clip0_4_182)">
                    <motion.path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z"
                    />
                  </motion.g>
                  <motion.defs>
                    <clipPath id="clip0_4_182">
                      <motion.rect width="48" height="48" fill="white" />
                    </clipPath>
                  </motion.defs>
                </motion.svg>
              </Button>
              <Button radius="none" isIconOnly color="none">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="33"
                  viewBox="0 0 48 33"
                  initial={{ fill: "#fff" }}
                  whileHover={{
                    fill: "#FBBF24",
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <motion.path d="M43.7812 0H4.21875C1.88878 0 0 1.88878 0 4.21875V28.5938C0 30.9237 1.88878 32.8125 4.21875 32.8125H43.7812C46.1112 32.8125 48 30.9237 48 28.5938V4.21875C48 1.88878 46.1112 0 43.7812 0ZM40.4055 24.1304C39.8143 24.6334 38.9265 24.5621 38.4232 23.9703L30.3068 14.4272L24.6968 17.6277C24.2649 17.8741 23.735 17.874 23.3032 17.6277L17.6933 14.4272L9.57675 23.9702C9.07388 24.5616 8.18616 24.6337 7.5945 24.1303C7.00284 23.6272 6.93122 22.7397 7.43438 22.1481L15.2075 13.0089L8.30325 9.06994C7.62862 8.68519 7.39378 7.82625 7.77853 7.15172C8.16347 6.477 9.02222 6.24225 9.69684 6.627C10.269 6.95334 23.3548 14.4189 24 14.7871C24.6444 14.4194 37.7295 6.95428 38.3032 6.627C38.9775 6.24216 39.8365 6.477 40.2215 7.15172C40.6062 7.82625 40.3715 8.68509 39.6968 9.06994L32.7925 13.0089L40.5656 22.1481C41.0688 22.7398 40.9972 23.6272 40.4055 24.1304Z" />
                </motion.svg>
              </Button>
            </div>
          </div>
          <div id="separator" className="flex-1" />
          <div
            id="right"
            className="flex-1 flex justify-center items-center h-screen"
          >
            <div className="flex flex-col">
              <h1 className="intro-name">Mohamed Salah</h1>
              <h3 className="intro-sub-heading">Full-Stack web Dev</h3>
              <h3 className="intro-sub-heading">
                Generative{" "}
                <motion.span
                  initial={{
                    background:
                      "linear-gradient(270deg, #97D08D 38.79%, #49C1EB 44.8%, #474BB6 50%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  animate={{
                    background:
                      "linear-gradient(90deg, #97D08D, #49C1EB, #474BB6)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  AI
                </motion.span>{" "}
                Engineer
              </h3>
              <p className="intro-paragraph">
                Elevating Business Through Code
                <br /> Expert Full-Stack Engineer, Mastering Remote
                Collaboration, Meeting Deadlines, and Multilingual Innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
