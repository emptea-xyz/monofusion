"use client";
import Backdrop from "@/components/backdrop/Backdrop";
import Navbar from "@/components/navbar/Navbar";
import Create from "@/components/panel-create/Panel";
import Leaderboad from "@/components/panel-leaderboard/Panel";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [modal, setModal] = useState(0); //each number defines which modal shoall be shown, 0 is standard and doesnt show a backdrop
  const [option, setOption] = useState(false); //shows the panel-menu on "true", hides it on "false"
  const [panel, setPanel] = useState(0); //each number defines which panel shall be shown

  const toggleOption = () => {
    if (option == false) {
      setOption(true);
    } else {
      setOption(false);
    }
  };
  const resetModal = () => {
    setModal(0);
  };
  return (
    <>
      <motion.div className="main">
        <motion.div className="texture"></motion.div>
        <motion.div className="platform-name">
          Mono<span>Fusion</span>
        </motion.div>
        <motion.div
          className={option == true ? "mode active" : "mode"}
          onClick={toggleOption}
        >
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
                <motion.div
                  className="option"
                  onClick={() => {
                    setPanel(0);
                  }}
                >
                  create
                </motion.div>
                <motion.div className="option">airdrop</motion.div>
                <motion.div className="option">maintain</motion.div>
                <motion.div className="option">create single</motion.div>
                <motion.div className="option">create collection</motion.div>
                <motion.div
                  className="option"
                  onClick={() => {
                    setPanel(1);
                  }}
                >
                  leaderboard
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {panel==0&&<Create setModal={setModal} />}
        {panel==1&&<Leaderboad setModal={setModal} />}
      </motion.div>
      <Backdrop modal={modal} setModal={setModal} resetModal={resetModal} />
      <Navbar setModal={setModal} />
    </>
  );
}
