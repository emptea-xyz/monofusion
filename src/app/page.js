"use client";
import Backdrop from "@/ui/backdrop/Backdrop";
import Navbar from "@/ui/navbar/Navbar";
import Create from "@/ui/panel-create-single/Panel";
import Leaderboad from "@/ui/panel-leaderboard/Panel";
import Profile from "@/ui/panel-profile/Panel";
import React, { useState } from "react";
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
  //Hook, which defines the theme of the platform
  const [theme, setTheme] = useState(0);
  //Hook, which defines the rpc
  const [rpc, setRpc] = useState(
    "https://devnet.helius-rpc.com/?api-key=5d69c879-36f4-4acf-87b4-e44a64c07acc"
  );

  //Function to toggle between the boolean state of "Option".
  const toggleOption = () => {
    if (option == false) {
      setOption(true);
    } else {
      setOption(false);
    }
  };

  //Function to toggle between the boolean state of "Theme".
  const toggleTheme = () => {
    if (theme == 0) {
      setTheme(1);
    } else {
      setTheme(0);
    }
  };

  //Function reset the state of the Modal component. State 0 sets it to invisible.
  const resetModal = () => {
    setModal(0);
  };
  return (
    <>
      <motion.div className="main" data-theme={theme == 0 ? "light" : "dark"}>
        <motion.div className="texture"></motion.div>
        <motion.div className="platform-name  font-h3">
          Mono<span>Fusion</span>
        </motion.div>
        <motion.div
          className={
            option == true ? "mode active font-text" : "mode font-text"
          }
          onClick={toggleOption}
        >
          create
        </motion.div>
        {/** Menu-panel to navigate between panels. */}
        <AnimatePresence>
          {option == true && (
            <motion.div
              className="options font-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.1, duration: 0.1 }}
            >
              <motion.div className="section">
                <motion.div
                  className="option"
                  onClick={() => {
                    setPanel(2);
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
                    setPanel(0);
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
        {panel == 2 && (
          <Profile setModal={setModal} rpc={rpc} setRpc={setRpc} />
        )}
        {panel == 1 && (
          <Leaderboad setModal={setModal} rpc={rpc} setRpc={setRpc} />
        )}
        {panel == 0 && <Create rpc={rpc} setRpc={setRpc} />}
      </motion.div>
      {/** Modal component, which behaves differently based on the modal-hook*/}
      <Backdrop
        modal={modal}
        setModal={setModal}
        resetModal={resetModal}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Navbar setModal={setModal} theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}
