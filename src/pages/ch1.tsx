import LessonLogo from "../assets/lesson.svg";
import leftd from "../assets/leftd.svg";
import { useState } from "react";
import Modal from "../components/Modal";

import { motion, AnimatePresence } from "framer-motion";
function ch1() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const close2 = () => setModal2Open(false);
  const open2 = () => setModal2Open(true);

  const close3 = () => setModal3Open(false);
  const open3 = () => setModal3Open(true);
  return (
    <main>
      <div className="">
        <h1 className="title">Learn Exclusive OR</h1>
        <div className="learn-path">
          <div className="node1">
            <motion.img
              src={LessonLogo}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lesson-image"
              onClick={() => (modalOpen ? close() : open())}
            />
            <AnimatePresence
              initial={false}
              mode="wait"
              onExitComplete={() => null}
            >
              {modalOpen && (
                <Modal
                  modalOpen={modalOpen}
                  handleClose={close}
                  header="XOR and its properties"
                  description="Learn about the properties of XOR that enable useful arithmetics"
                  page="/ch1/XOR"
                ></Modal>
              )}
            </AnimatePresence>
          </div>
          <div className="node2">
            <img src={leftd} />
          </div>
          <div className="node3">
            <motion.img
              src={LessonLogo}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lesson-image"
              onClick={() => (modal2Open ? close2() : open2())}
            />
            <AnimatePresence
              initial={false}
              mode="wait"
              onExitComplete={() => null}
            >
              {modal2Open && (
                <Modal
                  modalOpen={modal2Open}
                  handleClose={close2}
                  header="One-Time Pads"
                  description="Learn about the encryption based on XOR and different attacks that can be used on it"
                  page="ch1/OTP"
                ></Modal>
              )}
            </AnimatePresence>
          </div>
          <div className="node4">
            <img src={leftd} />
          </div>
          <div className="node5">
            <motion.img
              src={LessonLogo}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lesson-image"
              onClick={() => (modal3Open ? close3() : open3())}
            />
            <AnimatePresence
              initial={false}
              mode="wait"
              onExitComplete={() => null}
            >
              {modal3Open && (
                <Modal
                  modalOpen={modal3Open}
                  handleClose={close3}
                  header="Attacks on One-Time Pads"
                  description="Learn about the security issues that can arise from incorrect implimentations of one-time pads"
                  page="ch1/OTP-Attacks"
                ></Modal>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ch1;
