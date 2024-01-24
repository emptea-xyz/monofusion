import {
  faWallet,
  faPaintBrush,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

import "./navbar.css";

export default function Navbar({ setModal }) {
  return (
    <>
      <motion.div className="navigation-container">
        <motion.div className="navigation">
          <motion.div className="navigation-button logo"></motion.div>
          <motion.div
            className="navigation-button"
            onClick={() => {
              setModal(1);
            }}
          >
            <FontAwesomeIcon icon={faWallet} />
          </motion.div>
          <motion.div
            className="navigation-button"
            onClick={() => {
              setModal(2);
            }}
          >
            <FontAwesomeIcon icon={faNetworkWired} />
          </motion.div>
          <motion.div
            className="navigation-button"
            onClick={() => {
              setModal(3);
            }}
          >
            <FontAwesomeIcon icon={faPaintBrush} />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
