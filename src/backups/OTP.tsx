import { motion, useAnimate, useCycle, useScroll } from "framer-motion";
import { useState } from "react";
import playButton from "../../assets/play.svg";

const imageVariants = {};

export default function XOR() {
  const [isPlaying, togglePlay] = useCycle(false, true);

  const { scrollYProgress } = useScroll();
  return (
    <div className="text-div">
      <motion.div
        className="scrollbar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <h1>One-Time Pad </h1>
      <p>
        A One-time pad is an encryption scheme that utilizes 2 components and
        XORs them: the message to be encrypted, a key that will encrypt the
        message
      </p>
      <p>
        {" "}
        The key, or pad as we will reference it as from here on out, has two
        unique properties in a one-time pad. The bits are random and it is only
        used once. When these two conditions are met, the one-time pad has the
        strongest possible security guarantee. Attackers can't dicipher anything
        from just the encrypted text
      </p>
      <div className="animation-wrapper">
        <button className="play-pause"></button>
        {/* <motion.img
          src={playButton}
          initial={false}
          animate={isPlaying ? "pause" : "play"}
        ></motion.img> */}
        <motion.p
          className="animation-object-1"
          initial={{
            y: 100,
            fontSize: 25,
          }}
          animate={{
            x: [-500, -320, -320, -320],
            opacity: [1, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            type: "keyframes",
            times: [0, 0.5, 0.8, 1],
          }}
        >
          Password
        </motion.p>
        <motion.p
          initial={{
            x: -230,
            fontSize: 25,
          }}
          animate={{
            y: [-50, -50, 0, 0],
            opacity: [1, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            type: "keyframes",
            times: [0, 0.5, 0.8, 1],
          }}
        >
          Key
        </motion.p>
        <motion.p
          initial={{
            y: -25,
            fontSize: 25,
          }}
          animate={{
            x: [-140, -140, -140, 190],
            opacity: [0, 0, 1, 1],
          }}
          transition={{
            duration: 6.8,
            type: "keyframes",
            times: [0, 0.588, 0.718, 1],
          }}
        >
          Ciphertext
        </motion.p>
        <motion.p
          initial={{
            y: -90,
            x: -230,
          }}
        >
          ⊕
        </motion.p>
        <motion.p
          initial={{
            y: -160,
            x: 280,
          }}
        >
          ⊕
        </motion.p>
        <motion.p
          initial={{
            x: 280,
            fontSize: 25,
          }}
          animate={{
            y: [-315, -315, -265, -265],
            opacity: [1, 1, 1, 0],
          }}
          transition={{
            duration: 8.2,
            type: "keyframes",
            times: [0, 0.829, 0.977, 1],
          }}
        >
          Key
        </motion.p>
      </div>
      <div className="footer">
        <h3>
          <span className="align-left">Left</span>
          <span className="align-right"> Right </span>
        </h3>
      </div>
    </div>
  );
}
