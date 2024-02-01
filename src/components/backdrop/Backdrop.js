"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./backdrop.css";

/* 
BACKDROP GUIDE
0 = DEFAULT
1 = WALLET CONNECTOR
2 = NETWORK MANAGER
3 = DESIGN SWITCH
4 = create-single-panel: ATTRIBUTE EDITOR-
*/

/**
 * A component to show a Modal within a backdrop window.
 * @param {JSX.Element} modal - The ID of the Modal to appear
 * @param {Function} setModal - Function, which changes the ID of the Modal.
 * @param {Function} resetModal - Resets the Modal ID to 0, which is the default state.
 */

export default function Backdrop({ modal, setModal, resetModal }) {
  //hook to control the state of the network-switch, from modal "network-manager"
  const [switchModal, setSwitchModal] = useState(false);

  //function to toggle between the boolean state of "switchModal"
  //executed whenever you  click on the network-switch in "network-manager"
  const toggleSwitch = () => {
    if (switchModal != true) {
      setSwitchModal(true);
    } else {
      setSwitchModal(false);
    }
  };
  return (
    <AnimatePresence>
      {modal != 0 && (
        //backdrop component. Blurs out the background to give a better contrast towards the modal.
        <motion.div
          className="backdrop"
          id="backdrop"
          onClick={resetModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {/*Modal component. Frames the modal content.*/}
          <motion.div
            className="modal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.1, duration: 0.1 }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {modal == 4 && (
              <>
                <div className="create-attributes">
                  <div className="input">
                    <input type="text" className="key" placeholder="key" />
                    <input type="text" className="value" placeholder="value" />
                  </div>
                  <div className="submit">add</div>
                </div>
              </>
            )}
            {modal == 1 && (
              <>
                <div className="navbar-connector">
                  <div className="icon phantom"></div>
                  <div className="icon solflare"></div>
                  <div className="icon backpack"></div>
                </div>
              </>
            )}
            {modal == 2 && (
              <>
                <div className="navbar-network-manager">
                  <div className="default">
                    <div className="info">use the default network</div>
                    <motion.div
                      className={
                        switchModal == true
                          ? "switch active"
                          : "switch inactive"
                      }
                      onClick={toggleSwitch}
                    >
                      <motion.div className="base">
                        <motion.div className="handle"></motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="line"></div>
                  <div className="custom">
                    <div className="info">
                      use your own RPC for full control. <br />
                      Don't have one? Get started for free at{" "}
                      <Link href={"https://helius.dev"} target="blank">
                        Helius.
                      </Link>
                    </div>
                    <div className="form">
                      <input type="text" placeholder="enter RPC URL" />
                      <motion.div className="submit" onClick={resetModal}>
                        Go
                      </motion.div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {modal == 3 && (
              <>
                <div className="navbar-themify">
                  <motion.div
                    className={
                      switchModal == true ? "switch active" : "switch inactive"
                    }
                    onClick={toggleSwitch}
                  >
                    <motion.div className="base">
                      <motion.div className="handle"></motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
