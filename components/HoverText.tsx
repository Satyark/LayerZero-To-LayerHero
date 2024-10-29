import { motion } from 'framer-motion';
import React, { useState } from 'react';

const HoverText = () => {
  const words = ["Product", "Feature 1", "Feature 2", "Feature 3"];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="text-white cursor-pointer relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute"
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -100,
          transition: { duration: 0.9, ease: "easeInOut" }
        }}
      >
        {words.map((word, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.9,
              delay: index * 0.2,
              ease: "easeInOut",
              repeat: isHovered ? Infinity : 0,
              repeatType: "loop"
            }}
          >
            {isHovered ? word : "Product"}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HoverText;
