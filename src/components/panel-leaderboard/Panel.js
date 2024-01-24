"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./panel.css";

export default function Panel({ setModal }) {
  const [type, setType] = useState(0);
  const [title, setTitle] = useState("-");
  const [description, setDescription] = useState("-");
  const [attributes, setAttributes] = useState([]);
  const [users, setUsers] = useState([
    { username: "maru", wallet: "Fevc...de32", points: 1213 },
    { username: "batu", wallet: "Gvu1...5d14", points: 1164 },
    { username: "erzhan", wallet: "Er5z...P1c", points: 693 },
  ]);

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
          <div className="items">
            {users.map((user, index) => {
              return (
                <div className="user">
                  <div className="rank">{index+1}</div>
                  <div className="username">{user.username}</div>
                  <div className="wallet">{user.wallet}</div>
                  <div className="points">{user.points}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
