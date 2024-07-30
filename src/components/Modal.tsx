import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { y: "100vh", opacity: 0 },
};
const Modal = ({ handleClose, header, description, page }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-text">
          <h1>{header}</h1>
          <h5>{description}</h5>
          <a href={page}>
            <button className="button">Start Lesson</button>
          </a>
        </div>
        <button onClick={handleClose} className="close-button">
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
