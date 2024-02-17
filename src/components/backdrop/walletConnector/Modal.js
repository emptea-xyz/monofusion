"use client";
import React from "react";
import dynamic from "next/dynamic";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function Modal({ modal, setModal, resetModal, theme }) {
  return (
    <div
      className="navbar-connector font-text"
    >
      <WalletMultiButtonDynamic />
    </div>
  );
}
