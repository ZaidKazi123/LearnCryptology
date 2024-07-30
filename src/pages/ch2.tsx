import LessonLogo from "../assets/lesson.svg";
import leftd from "../assets/leftd.svg";
import { useState } from "react";
import Modal from "../components/Modal";

import { motion, AnimatePresence } from "framer-motion";
function ch2() {
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
        <h1 className="title">Learn Block Ciphers</h1>
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
                  header="What are Block Ciphers?"
                  description="Learn about this symmetric-key encryption scheme, and what makes it secure"
                  page="/ch2/Block"
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
                  header="Advanced Encryption Standard (AES)"
                  description="Learn about the most common block cipher in use today and how it works"
                  page="ch2/AES"
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
                  header="Outdated Block Ciphers"
                  description="Learn about the block ciphers that were previously used, and why they are no longer considered secure"
                  page="ch2/DES"
                ></Modal>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ch2;
