import { motion } from "framer-motion";
function ImageComponent({ image }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <h2>{image.title}</h2>
      <img className="images" src={image.src} alt=""></img>
    </motion.div>
  );
}

export default ImageComponent;
