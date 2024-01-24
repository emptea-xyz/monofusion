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
4 = CREATE - ATTRIBUTE EDITOR

*/
export default function Backdrop({ mode, setMode, resetMode }) {
  const [switchMode, setSwitchMode] = useState(false);

  const toggleSwitch = () => {
    if (switchMode != true) {
      setSwitchMode(true);
    } else {
      setSwitchMode(false);
    }
  };
  return (
    <AnimatePresence>
      {mode != 0 && (
        <motion.div
          className="backdrop"
          id="backdrop"
          onClick={resetMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
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
            {mode == 4 && (
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
            {mode == 1 && (
              <>
                <div className="navbar-connector">
                  <div className="icon phantom"></div>
                  <div className="icon solflare"></div>
                  <div className="icon backpack"></div>
                </div>
              </>
            )}
            {mode == 2 && (
              <>
                <div className="navbar-network-manager">
                  <div className="default">
                    <div className="info">use the default network</div>
                    <motion.div
                      className={
                        switchMode == true ? "switch active" : "switch inactive"
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
                      <motion.div className="submit" onClick={resetMode}>
                        Go
                      </motion.div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {mode == 3 && (
              <>
                <div className="navbar-themify">
                  <motion.div
                    className={
                      switchMode == true ? "switch active" : "switch inactive"
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
