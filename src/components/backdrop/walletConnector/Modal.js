"use client";
import React from "react";
import dynamic from "next/dynamic";


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
