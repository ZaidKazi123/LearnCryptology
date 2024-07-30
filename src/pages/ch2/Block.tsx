import { motion, useScroll } from "framer-motion";

export default function Block() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="text-div">
      <motion.div
        className="scrollbar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <h1>Block Ciphers</h1>
      <p>
        A block cipher is an algorithm that encrypts blocks of a plaintext with
        the same key. Essentially, the plaintext is divided into blocks of the
        same size, also known as the block size. The encryption/decryption
        proccess is differnet from the norm however.
      </p>
      <p>Like XOR, the same key is used to encrypt as is to decrpyt.</p>
      <div className="note">
        <p>
          <strong>Note:</strong>&emsp; Any cryptoscheme that uses the same key
          to encrypt and decrypt is known as a symmetric-key encryption or
          secret-key encryption scheme. This is different from public-key
          encryptions, which have different keys for encryption and decryption
        </p>
      </div>
      <p>
        An algorithm is used with the key as an input to generate
        transformaitons for every possible combination in a block size. Some of
        these transformations will map to themselves, for example AeFgH could
        map to GkLoP but MnJ1K could map to MnJ1k.
      </p>
      <p>
        This property is called a keyed permutation, and all block ciphers have
        this property.
      </p>
      <p>
        This mapping is important, since the same mapping will be used in
        reverse for decryption
      </p>
      <h1>[KEY-SPACE ANIMATION]</h1>
      <p>
        This animation shows mappings between the letters in the alphabet, but
        in reality the mappings are of binary numbers. The size is usually from
        128 to 256 bits, which creates a number of mappings that is unfathomably
        large!
      </p>
    </div>
  );
}
