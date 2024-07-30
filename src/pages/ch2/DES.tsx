import { MathJax, MathJaxContext } from "better-react-mathjax";
import { motion, useScroll } from "framer-motion";

export default function Block() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="text-div">
      <motion.div
        className="scrollbar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <h1>Outdated Block Ciphers</h1>
      <p>
        DES is one of the oldest block ciphers that was used as a standard. Due
        its small key size (56 bits), it is not considered secure and should not
        be used, as it can be bruteforced in less than a day.
      </p>
      <p>
        The temporary solution created to fix DES was 3DES. 3DES was essentially
        DES used three times: first to encrypt, then decrypt, then encrypt again
      </p>
      <MathJaxContext>
        <MathJax className="latex-p">
          {
            "\\(C = E_{DES}(key_{1},D_{DES}(key_{2},E_{DES}(key_{3}, password)))\\)"
          }
        </MathJax>
      </MathJaxContext>
      <p>
        This allowed for the use of a keysize 3 times the original, since the
        alogrithm is ran 3 times. A key of 168 bits would be split into 3 keys
        of 56 bits and used on each step of 3DES
      </p>
      <p>
        3DES also helped with backwards compatibility, since if an older system
        only ran DES, all it would have to do is choose the 3 keys to be the
        same and it would be the same as running DES once
      </p>
      <p>
        There are known attacks for 3DES, but some are impractical. Regardless,
        3DES shouldn't be used, especially since it is significantly slower than
        AES, not to mention the fact that AES is also more secure
      </p>
      <div className="note">
        <p>
          <strong>Note:</strong>&emsp; AES-128 (means AES when used with keys of
          128 bits) takes 12.6 cycles per byte, while 3DES takes 134.5 cycles
          per byte
        </p>
      </div>
      <p>
        Despite 3DES being so slow in performance and not good in terms of
        security, it is still used within finance, an industry so behind they
        still use Fortran and Cobol. Don't be like finance!
      </p>
    </div>
  );
}
