"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function Modal({ modal, setModal, resetModal }) {
  return (
    <div className="navbar-connector">
      <WalletMultiButtonDynamic />
    </div>
  );
}
