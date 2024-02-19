"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Modal({ modal, setModal, resetModal }) {
  //hook to control the state of the network-switch, from modal "network-manager"
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  return (
    <div className="create-attributes font-text">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input">
          <input
            type="text"
            className="key font-text"
            placeholder="key"
            required=""
            onChange={(e) => {
              setKey(e.target.value);
            }}
          />
          <input
            type="text"
            className="value font-text"
            placeholder="value"
            required
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <button
          className="submit font-text-bold"
          type="submit"
          disabled={!key || !value}
          onClick={() => {
            resetModal();
          }}
        >
          {!key || !value ? "fill in the fields" : "add"}
        </button>
      </form>
    </div>
  );
}
