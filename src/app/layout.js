"use client";

import { useMemo } from "react";

import "../style/globals.css";
import "../style/adapter.css";
import "../style/home.css";

//web3
import { WalletProvider } from "@solana/wallet-adapter-react";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  SolflareWalletAdapter,
  LedgerWalletAdapter,
  CoinbaseWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

/**
 * The root element.
 * @param {JSX.Element} children - Elements, which shall be added to the Root
 */
export default function RootLayout({ children }) {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint
  const endpoint =
    "https://devnet.helius-rpc.com/?api-key=78ae452a-d1dc-44ae-9b6c-fb9c7135f4e6";

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
      new CoinbaseWalletAdapter(),
    ],
    [network]
  );

  return (
    <html lang="en">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <WalletModalProvider>
            <body>{children}</body>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </html>
  );
}
