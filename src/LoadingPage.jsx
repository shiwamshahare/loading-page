import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const LoadingPage = () => {
  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ delay: 8, duration: 1, ease: "easeOut" }}
        className="preloader bg-black text-white h-screen w-full flex items-center justify-center relative"
      >
        Welcome to the experience
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2, delay: 5 }}
        className="loading-page absolute inset-0 bg-[ linear-gradient(to right, #2c5364, #203a43, #0f2027)] w-full h-full flex flex-col gap-6 items-center justify-center bg-white"
      >
        <Logo />

        <div className="h-8 overflow-hidden">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 5, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-xl uppercase ml-5 font-extrabold"
          >
            Shiwam Shahare
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default LoadingPage;
