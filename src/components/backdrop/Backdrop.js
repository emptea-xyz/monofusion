"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import CreateSingleAttributeAdder from "./createSingleAttributeAdder/Modal";
import WalletConnector from "./walletConnector/Modal";
import NetworkManager from "./networkManager/Modal";
import ThemeSelector from "./themeSelector/Modal";
import "./backdrop.css";

/* 
BACKDROP GUIDE
0 = DEFAULT
1 = WALLET CONNECTOR
2 = NETWORK MANAGER
3 = DESIGN SWITCH
4 = create-single-panel: ATTRIBUTE ADDER
*/

/**
 * A component to show a Modal within a backdrop window.
 * @param {JSX.Element} modal - The ID of the Modal to appear
 * @param {Function} setModal - Function, which changes the ID of the Modal.
 * @param {Function} resetModal - Resets the Modal ID to 0, which is the default state.
 */

export default function Backdrop({ modal, setModal, resetModal }) {
  return (
    <AnimatePresence>
      {modal != 0 && (
        //backdrop component. Blurs out the background to give a better contrast towards the modal.
        <motion.div
          data-theme={theme == 0 ? "light" : "dark"}
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
            {modal == 1 && (
              <WalletConnector
                modal={modal}
                setModal={setModal}
                resetModal={resetModal}
              />
            )}
            {modal == 2 && (
              <NetworkManager
                modal={modal}
                setModal={setModal}
                resetModal={resetModal}
              />
            )}
            {modal == 3 && (
              <ThemeSelector
                modal={modal}
                setModal={setModal}
                resetModal={resetModal}
              />
            )}
            {modal == 4 && (
              <CreateSingleAttributeAdder
                modal={modal}
                setModal={setModal}
                resetModal={resetModal}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
