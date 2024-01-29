"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./panel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faMedal,
  faMicrochip,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
export default function Panel({ setModal }) {
  const [users, setUsers] = useState([
    { username: "maru", wallet: "Fevc...de32", bits: 1213, stars: 54 },
  ]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="panel profile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <div className="row">
            <div className="core">
              <div className="picture"></div>
            </div>
            <div className="stats">
              <div className="bits">
                <div className="amount">1483</div>
                <div className="name">bits</div>
              </div>
              <div className="line"></div>

              <div className="stars">
                <div className="amount">431</div>
                <div className="name">stars</div>
              </div>
              <div className="line"></div>
              <div className="badges">
                <div className="amount">12</div>
                <div className="name">badges</div>
              </div>
              <div className="line"></div>
              <div className="rank">
                <div className="amount">1</div>
                <div className="name">rank</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="username">
              <div className="nickname">Maru</div>
              <div className="wallet">
                <div>Mt2g53...41H</div>
                <div>
                  <FontAwesomeIcon icon={faCopy} />
                </div>
              </div>
            </div>
            <div className="pinwall">
              <div className="title">Badges</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
