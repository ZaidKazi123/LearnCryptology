import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseList from "./pages/CourseList";

import Ch1 from "./pages/ch1";
import XOR from "./pages/ch1/XOR";
import OTP from "./pages/ch1/OTP";
import OTPAT from "./pages/ch1/OTPAttacks";

import Ch2 from "./pages/ch2";
import Block from "./pages/ch2/Block";
import AES from "./pages/ch2/AES";
import DES from "./pages/ch2/DES";

import Ch3 from "./pages/ch3";
import Ch4 from "./pages/ch4";
import Ch5 from "./pages/ch5";
import Ch6 from "./pages/ch6";
import Ch7 from "./pages/ch7";
import Ch8 from "./pages/ch8";
import Ch9 from "./pages/ch9";
import Ch10 from "./pages/ch10";
import Ch11 from "./pages/ch11";
import Ch12 from "./pages/ch12";
import Ch13 from "./pages/ch13";

import NotFound from "./pages/NotFound";

export const Roots = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/ch1" element={<Ch1 />} />
        <Route path="/ch1/XOR" element={<XOR />} />
        <Route path="/ch1/OTP" element={<OTP />} />
        <Route path="/ch1/OTP-Attacks" element={<OTPAT />} />
        <Route path="/ch2" element={<Ch2 />} />
        <Route path="/ch2/Block" element={<Block />} />
        <Route path="/ch2/AES" element={<AES />} />
        <Route path="/ch2/DES" element={<DES />} />
        <Route path="/ch3" element={<Ch3 />} />
        <Route path="/ch4" element={<Ch4 />} />
        <Route path="/ch5" element={<Ch5 />} />
        <Route path="/ch6" element={<Ch6 />} />
        <Route path="/ch7" element={<Ch7 />} />
        <Route path="/ch8" element={<Ch8 />} />
        <Route path="/ch9" element={<Ch9 />} />
        <Route path="/ch10" element={<Ch10 />} />
        <Route path="/ch11" element={<Ch11 />} />
        <Route path="/ch12" element={<Ch12 />} />
        <Route path="/ch13" element={<Ch13 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
