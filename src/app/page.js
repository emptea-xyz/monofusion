"use client";
import Backdrop from "@/components/backdrop/Backdrop";
import Navbar from "@/components/navbar/Navbar";
import Create from "@/components/panel-create/Panel";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [panel, setPanel] = useState(0);
  const [option, setOption] = useState(false);

  const toggleOption = () => {
    if (option == false) {
      setOption(true);
    } else {
      setOption(false);
    }
  };
  const resetPanel = () => {
    setPanel(0);
  };
  return (
    <>
      <motion.div className="main">
        <motion.div className="texture"></motion.div>
        <motion.div className="platform-name">
          Mono<span>Fusion</span>
        </motion.div>
        <motion.div className={option==true?"mode active":"mode"} onClick={toggleOption}>
          create
        </motion.div>
        <AnimatePresence>
          {option == true && (
            <motion.div
              className="options"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.1, duration: 0.1 }}
            >
              <motion.div className="section">
                <motion.div className="option">airdrop</motion.div>
                <motion.div className="option">maintain</motion.div>
                <motion.div className="option">create single</motion.div>
                <motion.div className="option">create collection</motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <Create setPanel={setPanel} />
      </motion.div>
      <Backdrop panel={panel} setPanel={setPanel} resetPanel={resetPanel} />
      <Navbar setPanel={setPanel} />
    </>
  );
}
