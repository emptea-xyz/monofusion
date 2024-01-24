import React from "react";
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
export default function Backdrop({ panel, setPanel, resetPanel }) {
  return (
    <AnimatePresence>
      {panel != 0 && (
        <motion.div
          className="backdrop"
          id="backdrop"
          onClick={resetPanel}
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
            {panel == 4 && (
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
            {panel == 1 && (
              <>
                <div className="navbar-connector">
                  <div className="icon phantom"></div>
                  <div className="icon solflare"></div>
                  <div className="icon backpack"></div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
