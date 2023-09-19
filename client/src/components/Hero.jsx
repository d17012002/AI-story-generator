import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import Prompt from "./Prompt";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

function Hero() {
  const [promptComponent, setPromptComponent] = useState(false);
  const [heroComponent, setHeroComponent] = useState(true);
  const [dashboardComponent, setDashboardComponent] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, window.innerHeight], [30, -30]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-30, 30]);

  const handleMouse = (event) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  const handleGetStartedClick = () => {
    // Set the state to show the Prompt component
    setPromptComponent(true);
    // Hide the Hero component
    setHeroComponent(false);
    // Hide the dashboard component
    setDashboardComponent(false);
  };

  const handleDashboardClick = () => {
    setDashboardComponent(true);
    setPromptComponent(false);
    setHeroComponent(false);
  }

  const handleEduchampClick = () => {
    // Set the state to show the Hero component again
    setPromptComponent(false);
    setDashboardComponent(false);
    setHeroComponent(true);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar onEduchampClick={handleEduchampClick} onDashboardClick={handleDashboardClick} />
      {heroComponent && (
       <section className="bg-gray-900 p-5 sm:p-20 items-center relative" onMouseMove={handleMouse}>
       <div className="container mx-auto px-4 mt-15 mb-15 sm:mb-50 h-auto">
         <div className="md:flex md:items-center mt-2 sm:mt-10 ml-1 sm:ml-12">
           <div className="md:w-[60%]">
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
               AI Story Generator
             </h1>
             <br />
             <br />
             <p className="text-lg md:text-xl text-gray-400 mb-6">
               An interactive web platform where users can provide a story
               prompt, and the AI generates a short story based on that
               prompt. Additionally, users are able to upvote their favorite
               generated stories, which are then showcased on the leaderboard.
             </p>
             <br />
             <button
               onClick={handleGetStartedClick}
               className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold text-sm md:text-base"
             >
               Get Started!
             </button>
             <br />
             <br />
           </div>
           <motion.div
             className="md:w-1/2"
             style={{
               rotateX: rotateX,
               rotateY: rotateY,
               perspective: "1000px",
             }}
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.6 }}
           >
             <img
               src="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot03_90833.png"
               alt="Portfolio Hero Image"
               className="w-[14rem] sm:w-[20rem] mt-[3rem] sm:mt-[0rem] mx-auto rounded-lg"
             />
           </motion.div>
         </div>
       </div>
      
     </section>
     
      )}
      {promptComponent && <Prompt />}
      {dashboardComponent && <Dashboard />}
      <Footer />
    </div>
  );
}

export default Hero;
