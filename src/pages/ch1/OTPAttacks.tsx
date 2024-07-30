import { motion, useScroll } from "framer-motion";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function OTPAttacks() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="text-div">
      <motion.div
        className="scrollbar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <h1>Attacks on One-Time Pads </h1>
      <p>
        As a reminder, these are the two components required in order to
        guarantee the security of a one-time pad:{" "}
      </p>
      <p>&emsp;1. The pad must consist of truely random data</p>
      <p>&emsp;2. The pad must only be used once</p>
      <p>
        Most commercial products that claim to be one-time pads usually miss on
        either of these components, and should not be used in practice
      </p>
      <h3>Ignoring Data Randomness</h3>

      <p>
        Choosing not to use random data for the pad is not necessarily insecure.
        Syncronous streams ciphers in fact don't have entirely random keys.
        However, if an attacker is to figure out the generation scheme of a pad,
        they could in theory predict what the pad will be. It is always best
        practice to use randomly generated keys.{" "}
      </p>
      <h3>Ignoring Pad Reuse</h3>
      <p>This one is much more serious</p>
      <p>
        If a pad is resued, messages can be decrypted fairly easily. All the
        attacker needs is to get a hold of two encrypted messages. When the
        encrypted messages are XORed, it is equivalent to the XOR of the
        original messages:{" "}
      </p>
      <MathJaxContext>
        <MathJax className="latex-p">
          {
            "\\(C_{1} \\oplus C_{2} = (P_{1} \\oplus k) \\oplus (P_{2} \\oplus k)\\)"
          }
        </MathJax>
        <p>
          We can now utlize the XOR properties to simplify. With the assosiation
          rule we get:{" "}
        </p>
        <MathJax className="latex-p">
          {"\\((P_{1} \\oplus P_{2}) \\oplus (k \\oplus k)\\)"}
        </MathJax>
        <p>The identity rule then yeilds:</p>
        <MathJax className="latex-p">{"\\(P_{1} \\oplus P_{2}\\)"}</MathJax>
      </MathJaxContext>
      <p>
        This at first doesn't seem like a big deal. In order for us to extract a
        plaintext from what we have here, we would need to XOR this value with
        the other plaintext.{" "}
      </p>
      <p>
        However, now that there is no key in the mix, there is still a decent
        amount of information about the plaintexts within the XOR. The process
        used to extract this is called Crib-dragging
      </p>
      <h3>Crib-dragging</h3>
      <p>
        In essense, crib-dragging is a process where we XOR sequences that are
        likely to be found within the XORed plaintexts to see if there is a
        match somewhere
      </p>
      <MathJaxContext>
        <p>
          Lets say, for example, we obtain a ciphertext. We can XOR parts of the
          ciphertext with a phrase to see if we can extract something from it.
          Since ciphertexts are: C = P ⊕ k, a correct guess at a phrase within
          the password would yeild random bits (Since our key is meant to be
          generated randomly)
        </p>
        <p>
          With this in mind, lets go back to our XOR that we obtained from key
          resuse:
        </p>
        <MathJax className="latex-p">{"\\(P_{1} \\oplus P_{2}\\)"}</MathJax>
      </MathJaxContext>
      <p>
        If we XOR parts of this value with phrases that are likely to be in
        plaintext 1, we can extract values that are likely to be in plaintext 2.
        What makes this special is that we know plaintext 2 should not be random
        bits like our key, so we should be able to tell when our guesses our
        correct.
      </p>
      <p>
        How do we go about guessing what is in our plaintext? We use what we
        know
      </p>
      <p>
        {
          "If the plaintext is supposed to be an HTTP request, there should be a Content-Type, <p>, and such."
        }
      </p>
      <p>
        If the plaintext is some SQL request, we could try using SELECT or UNION
        as potential phrases to try and XOR
      </p>
      <p>
        If our guesses are correct, we should see something comprehendable when
        we XOR it with the value from earlier. Since our phrase is shorter than
        the plaintext itself, we should also make sure to 'drag' the phrase
        across the whole plaintext, to ensure that all possible spots where the
        phrase could occur are hit
      </p>
      <h1>[ANIMATION HERE]</h1>
      <div className="note">
        <p>
          <strong>Note:</strong>&emsp;Normally, this is an automated process,
          where your intervention only lies in figuiring out which XORs look
          like plaintexts. Python scripts come in handy for these jobs!
        </p>
      </div>
      <p>
        This whole process becomes much more easier when we get more than two
        ciphertexts:
      </p>
      <p>&emsp;-There are more positions to XOR</p>
      <p>&emsp;-More bytes are revealed on sucessful guesses</p>
      <p>&emsp;There are more ciphertexts to test on</p>
      <br></br>
      <p>
        With more advanced statistical models and language analysis coming to
        light, crib-dragging is only becoming more efficient. Do not use
        multi-time pads!!!
      </p>
      <h3>Where are the One-time pads?</h3>
      <p>
        Thats right, one-time pads are not used in production. The need to
        generate keys as long as the plaintext and then securely send it to a
        recipient causes a lot more pain than promise.
      </p>
      <p>
        What we need is a cryptoscheme that has managable key sizes and can
        negotiate these keys over the Internet, without getting intercepted
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
