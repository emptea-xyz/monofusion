"use client";
import Backdrop from "@/components/backdrop/Backdrop";
import Navbar from "@/components/navbar/Navbar";
import Create from "@/components/panel-create/Panel";
import Leaderboad from "@/components/panel-leaderboard/Panel";
import Profile from "@/components/panel-profile/Panel";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * The Home component.
 * The main component of the platform.
 */
export default function Home() {
  //Hook,which defines which modal shoall be shown, 0 is standard and doesnt show a backdrop
  const [modal, setModal] = useState(0);
  //Hook, which shows the panel-menu on "true", hides it on "false"
  const [option, setOption] = useState(false);
  //Hook, where each number defines which panel shall be shown
  const [panel, setPanel] = useState(0);

  //Function to toggle between the boolean state of "Option".
  const toggleOption = () => {
    if (option == false) {
      setOption(true);
    } else {
      setOption(false);
    }
  };

  //Function reset the state of the Modal component. State 0 sets it to invisible.
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
        {/** Menu-panel to navigate between panels. */}
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
                  profile
                </motion.div>
                <motion.div
                  className="option"
                  onClick={() => {
                    setPanel(1);
                  }}
                >
                  leaderboard
                </motion.div>
                <motion.div className="line"></motion.div>
                <motion.div className="option">airdrop</motion.div>
                <motion.div className="option">maintain</motion.div>
                <motion.div
                  className="option"
                  onClick={() => {
                    setPanel(2);
                  }}
                >
                  create single
                </motion.div>
                <motion.div className="option">create collection</motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/** Based on the state of the panel-hook, one of these panels  will be displayed */}
        {panel == 0 && <Profile setModal={setModal} />}
        {panel == 1 && <Leaderboad setModal={setModal} />}
        {panel == 2 && <Create setModal={setModal} />}
      </motion.div>
      {/** Modal component, which behaves differently based on the modal-hook*/}
      <Backdrop modal={modal} setModal={setModal} resetModal={resetModal} />
      <Navbar setModal={setModal} />
    </>
  );
}