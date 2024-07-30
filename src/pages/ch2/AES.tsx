import { motion, useScroll } from "framer-motion";

export default function Block() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="text-div">
      <motion.div
        className="scrollbar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <h1>Advanced Encryption Standard (AES)</h1>
      <p>AES is the most common block cipher used today.</p>
      <p>
        Currently, there are no practical attacks against AES. The only issues
        that arise are when the algorithm is not implemented correctly, like
        reusing keys
      </p>
      <p>
        In AES, the block size must be 128 bits and the key sizes must be either
        128, 192, or 256 bits. Before its standardization, the block sizes and
        key sizes could be any multiple of 32 bits between 128 and 256 bits, but
        that is too big a range for standardization
      </p>
      <p>
        Although it is not necessary to know how AES works, I think it is a cool
        process and thought it would be nice to see it visually, since the first
        time I learned about it I had a hard time
      </p>
      <p>
        <h3>AES in-depth</h3>
      </p>
    </div>
  );
}
