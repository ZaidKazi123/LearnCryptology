import { motion, useScroll } from "framer-motion";
import XORImage from "../../assets/XOR.png";

export default function XOR() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="text-div">
      <motion.div
        className="scrollbar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <h1>Exculsive Or (XOR) </h1>
      <p>
        XOR is a boolean binary that is true only when one of two inputs are
        true.
      </p>
      <p>
        You can think of it like this: the first bit is the input bit, and the
        second is the flip bit. If the flip bit is 1, it will flip the input bit
        from 0 to 1 or 1 to 0. If the flip bit is 0, it won't flip the input{" "}
      </p>
      <img src={XORImage} />
      <p>
        XOR is often represented by the symbol: ⊕. This is what we will be using
        throughout these lessons{" "}
      </p>
      <p>Here are some important properties we should know about XOR:</p>
      <p>&emsp;1. XOR is assosiative: a ⊕ (b ⊕ c) = (a ⊕ b) ⊕ c</p>
      <p>&emsp;2. XOR is symetric: a ⊕ b = b ⊕ a</p>
      <p>&emsp;3. Anything, when XORed by itself, will be 0: a ⊕ a = 0 </p>
      <p>&emsp;4. Anything, when XORed by 0, is itself: a ⊕ 0 = a</p>
      <p>
        Lets apply this rules to something that looks a little more complicated:
      </p>
      <p>&emsp;&emsp;&emsp;&emsp;a ⊕ b ⊕ a =</p>
      <p>&emsp;&emsp;&emsp;&emsp;a ⊕ a ⊕ b = (by assosiation)</p>
      <p>&emsp;&emsp;&emsp;&emsp;0 ⊕ b = (third rule)</p>
      <p>&emsp;&emsp;&emsp;&emsp;b (fourth rule)</p>
      <br></br>
      <p>
        Sometimes we need to perform XOR on values that aren't ones and zeros,
        so we take their bitwise XOR. Since all values have a binary
        representation, we can XOR the binary
      </p>
      <div className="note">
        <p>
          <strong>Note:</strong>&emsp;The python caret (^) does exactly this for
          integer values!
        </p>
      </div>
      <p> Lets see an example:</p>
      <p>&emsp;&emsp;25 ⊕ 63 = 0b0011001 ⊕ 0b0111111</p>
      <p>
        &emsp;&emsp;&emsp;&emsp; 0&emsp;0&emsp;1&emsp;1&emsp;0&emsp;0&emsp;1
      </p>
      <p>&emsp;&emsp;&emsp;&emsp;⊕&ensp;⊕&ensp;⊕&ensp;⊕&ensp;⊕&ensp;⊕&ensp;⊕</p>
      <p>
        &emsp;&emsp;&emsp;&emsp; 0&emsp;1&emsp;1&emsp;1&emsp;1&emsp;1&emsp;1
      </p>
      <p>
        &emsp;&emsp;=&emsp;&ensp; 0&emsp;1&emsp;0&emsp;0&emsp;1&emsp;1&emsp;0
      </p>
      <p>&emsp;&emsp;=&emsp;&ensp; 38</p>
      <div className="footer">
        <h3>
          <span className="align-left">Left</span>
          <span className="align-right"> Right </span>
        </h3>
      </div>
    </div>
  );
}
