"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Modal({ modal, setModal, resetModal }) {
  //hook to control the state of the network-switch, from modal "network-manager"
  const [switchModal, setSwitchModal] = useState(false);
  //hook to control the state of the RPC Url
  const [rpc, setRpc] = useState("");

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
    <div className="navbar-network-manager">
      <div className="default">
        <div className="info">use the default network</div>
        <motion.div
          className={switchModal == true ? "switch active" : "switch inactive"}
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
          <input
            type="text"
            placeholder="enter RPC URL"
            onChange={(e) => {
              setRpc(e.target.value);
            }}
          />
          <button className="submit font-text-small" onClick={resetModal} disabled={!rpc || switchModal==false}>
            Go
          </button>
        </div>
      </div>
    </div>
  );
}
