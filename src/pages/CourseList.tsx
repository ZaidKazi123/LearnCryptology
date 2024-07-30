import { motion } from "framer-motion";
function CourseList() {
  const titles = [
    "XOR",
    "Block Ciphers",
    "Stream Ciphers",
    "Key Exchange",
    "Public-Key encryption",
    "Hash Functions",
    "Message Authentication Codes",
    "Signature Algorithms",
    "Key Derivation Functions",
    "Random Number Generators",
    "SSL and TLS",
    "OpenPGP and GPG",
    "Off-The-Record Messaging (OTR)",
  ];
  const pages = [
    "ch1",
    "ch2",
    "ch3",
    "ch4",
    "ch5",
    "ch6",
    "ch7",
    "ch8",
    "ch9",
    "ch10",
    "ch11",
    "ch12",
    "ch13",
  ];
  const available = [
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  return (
    <main>
      <div className="content">
        <h1 className="title">Select a course</h1>
        <div className="course-selection">
          {titles.map((title, index) => (
            <div
              className={
                available[index] ? "course-item" : "course-item-disabled"
              }
            >
              <div className="course-title">{title}</div>
              <div className="course-subtitle">3 Lessons</div>
              <a href={available[index] ? pages[index] : ""}>
                <motion.button
                  whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
                  className={available[index] ? "button" : "button-disabled"}
                  disabled={!available[index]}
                  style={{ top: "5px", left: "0" }}
                >
                  {available[index] ? "Start Course" : "Coming Soon"}
                </motion.button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default CourseList;
