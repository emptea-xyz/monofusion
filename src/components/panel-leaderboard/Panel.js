"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./panel.css";

export default function Panel({ setModal }) {
  const [type, setType] = useState(0);
  const [title, setTitle] = useState("-");
  const [description, setDescription] = useState("-");
  const [attributes, setAttributes] = useState([]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="panel leaderboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <div className="filters">
            <div className="rank">rank</div>
            <div className="username">Username</div>
            <div className="wallet">Wallet</div>
            <div className="points">points</div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
