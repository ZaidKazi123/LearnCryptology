import { motion, useAnimate, useCycle, useScroll } from "framer-motion";
import playButton from "../../assets/play.png";

export default function OTP() {
  const [isPlaying, togglePlay] = useCycle(false, true);
  const [passScope, passAnimate] = useAnimate();
  const [key1Scope, key1Animate] = useAnimate();
  const [key2Scope, key2Animate] = useAnimate();
  const [cipherScope, cipherAnimate] = useAnimate();
  const [pass2Scope, pass2Animate] = useAnimate();

  function reset() {
    passAnimate(
      passScope.current,
      { y: 100, x: -500, opacity: 1 },
      { duration: 0 }
    );
    key1Animate(
      key1Scope.current,
      { x: -230, y: -50, opacity: 1 },
      { duration: 0 }
    );
    key2Animate(
      key2Scope.current,
      { x: 240, y: -305, opacity: 1 },
      { duration: 0 }
    );
    cipherAnimate(
      cipherScope.current,
      { y: -25, x: -140, opacity: 0 },
      { duration: 0 }
    );
    pass2Animate(
      pass2Scope.current,
      { x: 340, y: -285, opacity: 0 },
      { duration: 0 }
    );
  }
  function animateOpactity() {
    passAnimate(passScope.current, { opacity: 0 }, { duration: 1 });
    key1Animate(key1Scope.current, { opacity: 0 }, { duration: 1 });
  }
  function animateOpactity2() {
    cipherAnimate(cipherScope.current, { opacity: 0 }, { duration: 1 });
    key2Animate(key2Scope.current, { opacity: 0 }, { duration: 1 });
  }
  async function animateOTP() {
    if (!isPlaying) {
      togglePlay();
      await reset();
      await passAnimate(passScope.current, { x: -320 }, { duration: 2 });
      await key1Animate(key1Scope.current, { y: 0 }, { duration: 1 });
      await animateOpactity();
      await cipherAnimate(cipherScope.current, { opacity: 1 }, { duration: 1 });
      await cipherAnimate(cipherScope.current, { x: 150 }, { duration: 2 });
      await key2Animate(key2Scope.current, { y: -265 }, { duration: 1 });
      await animateOpactity2();
      await pass2Animate(pass2Scope.current, { opacity: 1 }, { duration: 1 });
      togglePlay();
    }
  }

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
        The key, or pad as the cryptoscheme's name suggests, has two unique
        properties in a one-time pad. The bits are random and it is only used
        once. When these two conditions are met, the one-time pad has the
        strongest possible security guarantee. Attackers can't dicipher anything
        from just the encrypted text
      </p>
      <div className="animation-wrapper">
        <button className="play-pause"></button>
        <motion.p
          initial={{
            y: 100,
            x: -500,
            opacity: 1,
            fontSize: 25,
          }}
          ref={passScope}
        >
          10101010
        </motion.p>
        <motion.p
          initial={{
            x: -230,
            y: -50,
            opacity: 1,
            fontSize: 25,
          }}
          ref={key1Scope}
        >
          11010011
        </motion.p>
        <motion.p
          initial={{
            y: -25,
            x: -140,
            opacity: 0,
            fontSize: 25,
          }}
          ref={cipherScope}
        >
          01111001
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
            x: 240,
          }}
        >
          ⊕
        </motion.p>
        <motion.p
          initial={{
            x: 240,
            y: -305,
            opacity: 1,
            fontSize: 25,
          }}
          ref={key2Scope}
        >
          11010011
        </motion.p>
        <motion.p
          initial={{
            x: 340,
            y: -285,
            opacity: 0,
            fontSize: 25,
          }}
          ref={pass2Scope}
        >
          10101010
        </motion.p>
        <motion.img
          src={playButton}
          width="50"
          height="50"
          initial={{
            x: -550,
            y: -460,
          }}
          style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: "15px",
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={animateOTP}
        ></motion.img>
        <motion.p
          initial={{
            y: -390,
            x: -320,
          }}
        >
          Text
        </motion.p>
        <motion.p
          initial={{
            y: -610,
          }}
          style={{
            width: "10rem",
          }}
          className="animation-wrapper-title"
        >
          {"← Keys →"}
        </motion.p>
        <motion.p
          initial={{
            y: -530,
          }}
        >
          {" "}
          Encrpyted Text
        </motion.p>
        <motion.p
          initial={{
            y: -600,
            x: 400,
          }}
        >
          Decrypted Text
        </motion.p>
      </div>
      <p>
        From this example we can see that the encrypted text reveals nothing
        other than the existence of an original text, and the length of the
        origional text. We could try testing the text against every possible key
        of that size, but that would also end up giving us every possible 8-bit
        text
      </p>
      <p>
        This is a very strong method of encryption, but as stated, it is hard to
        put in practice. Next we will explore how most "one-time pads" miss the
        key components, and how we can utlize that to crack encrypted messages
      </p>
      <div className="footer">
        <h3>
          <span className="align-left">Left</span>
          <span className="align-right"> Right </span>
        </h3>
      </div>
    </div>
  );
}
